<script lang="ts">
import { normalizePhone } from "@/utils/phone_formatter";
import useAuthStore from '~/stores/auth';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      phoneNumber: undefined as string | undefined,
      isCodeSent: false,
      formMessage: undefined,
      invalidOtp: false,
      submitLoading: false,
    }
  },
  methods: {
    handleSubmitVerify(otp: string) {
      this.authStore.verifyOtp(this.phoneNumber!, Number(otp)).then(() => {
        this.$router.push("/")
      }).catch((error) => {
        console.error(error);
        this.invalidOtp = true;
      })
    },
    handleBackToLoginForm() {
      this.isCodeSent = false
    },
    handleLogin(phone: string, keepMeSignedIn: boolean) {
      phone = normalizePhone(phone);

      this.submitLoading = true;

      this.authStore.login(phone).then(() => {
        this.phoneNumber = phone;
        this.isCodeSent = true

        this.submitLoading = false
      }).catch((error) => {
        console.log(error);
      })
    }
  },
};
</script>

<template>
  <LoginForm :submit-loading="submitLoading" :form-message="formMessage" v-if="!isCodeSent" :handle-login="handleLogin"/>
  <VerifyOTPForm
    :handle-submit-verify="handleSubmitVerify"
    :back-to-login-form="handleBackToLoginForm"
    :invalid-otp="invalidOtp"
    :phone="phoneNumber"
    v-else/>
</template>
