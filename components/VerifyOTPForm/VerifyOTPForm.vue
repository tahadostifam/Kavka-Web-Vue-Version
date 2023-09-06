<script>
import { VOtpInput } from 'vuetify/labs/VOtpInput'
import "./VerifyOTPForm.scss"
export default {
    props: ["phone", "backToLoginForm", "handleSubmitVerify", "invalidOtp"],
    components: { VOtpInput },
    data(){
        return {
            maxOtpLength: 6,
            otp: ''
        }
    },
    watch: {
        otp() {
           if (this.otp.length === this.maxOtpLength) {
                this.handleSubmitVerify(this.otp)
           }
        }
    }
}
</script>

<template>
    <div class="verify_otp_form">
        <h1 class="verify_otp_form_header">We sent you an OTP code</h1>
        <h2 class="verify_otp_form_phone">
            {{ phone }}
            <v-icon @click="backToLoginForm" icon="mdi-pen"></v-icon>
        </h2>
        <v-otp-input :error="invalidOtp" class="mt-10" v-model="otp"></v-otp-input>
    </div>
</template>
