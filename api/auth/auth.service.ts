import axios from "axios";
import appConfig from "~/app.config";
import { IUser } from './auth.model';
import { IChat } from '../chat/chat.model';

class UnauthorizedError extends Error {
    constructor() {
        super("Unauthorized");
    }
}

namespace AuthService {
    export enum StorageToken {
        RefreshToken = "refresh",
        Authorization = "authorization",
    }

    export async function Authenticate(accessToken: string) {
        return new Promise<{user: IUser, chats: IChat[]}>(async (resolve, reject) => {
            const url = appConfig.httpApi.url + "/users/authenticate";

            axios
                .post(
                    url,
                    {},
                    {
                        headers: {
                            Authorization: accessToken,
                        },
                    }
                )
                .then((response) => {
                    if (response.data.code == 200) {
                        return resolve({user: response.data.user as IUser, chats: response.data.chats as IChat[]});
                    }

                    reject("unauthorized");
                })
                .catch(reject);
        });
    }

    export async function Login(phone: string) {
        return new Promise<void>(async (resolve, reject) => {
            const url = appConfig.httpApi.url + "/users/login";

            axios.post(url, { phone }).then((response) => {
                if (response.data.code == 200) {
                    return resolve();
                }

                reject(new Error("unknown error: " + response.data.message));
            });
        });
    }

    export async function VerifyOtp(phone: string, otp: number) {
        return new Promise<
            { refreshToken: string; accessToken: string } | undefined
        >(async (resolve, reject) => {
            const url = appConfig.httpApi.url + "/users/verify_otp";

            axios
                .post(url, { phone, otp })
                .then((response) => {
                    if (response.data.code == 200) {
                        // Store tokens
                        const refreshToken = response.headers["refresh"];
                        const accessToken = response.headers["authorization"];

                        return resolve({ refreshToken, accessToken });
                    }

                    reject(new UnauthorizedError());
                })
                .catch(reject);
        });
    }
}

export default AuthService;
