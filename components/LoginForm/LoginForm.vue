<script>
import "./LoginForm.scss";

export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    enforcePhoneFormat() {
      let x = this.phoneNumber.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

      this.phoneNumber = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
  },
};
</script>

<template>
  <div class="login_form">
    <img src="~/assets/img/logo.png" class="logo mb-5" />
    <h1>Sign in to Kavka</h1>
    <p class="text-medium-emphasis mb-8">Please enter your phone number.</p>
    <v-form>
      <v-text-field placeholder="(xxx) xxx-xxxx" @input="enforcePhoneFormat()" v-model="phoneNumber" maxlength="16" color="primary" label="Phone Number" variant="outlined"></v-text-field>

      <v-checkbox label="Keep me signed in" color="primary"></v-checkbox>

      <v-btn class="rounded-sm" size="x-large" type="submit" color="primary" flat block>Next</v-btn>
    </v-form>
  </div>
</template>
