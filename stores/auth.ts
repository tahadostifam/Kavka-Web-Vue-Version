import axios from 'axios';
import { defineStore } from 'pinia';
import appConfig from '~/app.config';
import { IUser } from '~/models/user.model';

export type Tokens = {
    refreshToken: string | undefined;
    accessToken: string | undefined;
};

enum StorageToken {
    RefreshToken = "refresh",
    Authorization = "authorization"
}

export default defineStore({
    id: 'auth',
    state: () => ({
        _user: undefined as IUser | undefined,
    }),
    actions: {
        setTokens(tokens: Tokens) {
            localStorage.setItem("refresh", tokens.refreshToken!);
            localStorage.setItem("authorization", tokens.accessToken!);
        },
        getToken(name: StorageToken): string | null {
            const token = localStorage.getItem(name);

            return token;
        },
        async login(phone: string) {
            return new Promise(async (resolve, reject) => {
                const url = appConfig.httpApi.url + "/users/login";

                axios.post(url, { phone }).then((response) => {
                    if (response.data.code == 200) {
                        return resolve(undefined);
                    } else {
                        reject(new Error("unknown error"));
                    }
                });
            });
        },
        async verifyOtp(phone: string, otp: number) {
            return new Promise(async (resolve, reject) => {
                const url = appConfig.httpApi.url + "/users/verify_otp";

                axios.post(url, { phone, otp }).then((response) => {
                    if (response.data.code == 200) {
                        // Store tokens
                        const refreshToken = response.headers['refresh'];
                        const accessToken = response.headers['authorization'];

                        if (refreshToken && accessToken) {
                            this.setTokens({ accessToken, refreshToken });

                            return resolve(undefined);
                        } else {
                            reject(new Error("server responses wrong tokens"));
                        }
                    } else {
                        reject(new Error("unknown error"));
                    }
                }).catch(reject);
            });
        },
        async authenticate() {
            return new Promise<IUser>(async (resolve, reject) => {
                const url = appConfig.httpApi.url + "/users/authenticate";

                const accessToken = this.getToken(StorageToken.Authorization);

                if (!accessToken) {
                    return reject("invalid access token");
                }

                axios.post(url, {}, {
                    headers: {
                        Authorization: accessToken
                    }
                }).then((response) => {
                    if (response.data.code == 200) {
                        const user = response.data.user;

                        if (user) {
                            this._user = (user as IUser);
                            resolve(user);
                        } else {
                            reject(new Error("the key `user` in response of `authenticate request` is empty"));
                        }
                    } else {
                        reject(new Error("unknown error"));
                    }
                }).catch(reject);
            });
        }
    },
    getters: {
        user(): IUser | undefined {
            return this._user;
        }
    }
});
