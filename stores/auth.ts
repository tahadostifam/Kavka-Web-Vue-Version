import { defineStore } from "pinia";
import { IUser } from "~/api/auth/auth.model";
import AuthService from "~/api/auth/auth.service";
import { IChat } from "../api/chat/chat.model";

export default defineStore({
  id: "auth",
  state: () => ({
    user: undefined as IUser | undefined,
    chats: undefined as IChat[] | undefined,
  }),
  actions: {
    setTokens(accessToken: string, refreshToken: string) {
      localStorage.setItem("refresh", refreshToken);
      localStorage.setItem("authorization", accessToken);
    },
    getToken(name: AuthService.StorageToken): string | null {
      const token = localStorage.getItem(name);

      return token;
    },
    async login(phone: string) {
      return AuthService.Login(phone);
    },
    async verifyOtp(phone: string, otp: number) {
      return new Promise<void>(async (resolve, reject) => {
        AuthService.VerifyOtp(phone, otp)
          .then((tokens) => {
            this.setTokens(tokens!.accessToken, tokens!.refreshToken);
            resolve();
          })
          .catch(reject);
      });
    },
    async authenticate() {
      return new Promise<{ user: IUser; chats: IChat[] }>(
        async (resolve, reject) => {
          const accessToken = this.getToken(
            AuthService.StorageToken.Authorization
          );

          if (!accessToken) {
            return reject("invalid access token");
          }

          AuthService.Authenticate(accessToken)
            .then(({ user, chats }) => {
              this.user = user;
              this.chats = chats;

              resolve({ user, chats });
            })
            .catch(reject);
        }
      );
    },
  },
});
