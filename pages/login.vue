<style lang="scss">
.login_form {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 400px;

  .logo {
    height: 190px;
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
      keepMeSignedIn: true,
      submitLoading: false
    };
  },
  methods: {
    handleSubmitLogin() {
      alert("not implemented yet")
    }
  },
  mounted() {
    if (process.env.NODE_ENV == "development") {
      this.$data.email = "johndoe@kavka.social"
      this.$data.password = "12345678"
    }
  }
};
</script>

<template>
  <div class="login_form">
    <img src="~/assets/img/logo_dark_transparent.png" class="logo mb-5" />
    <h1>Sign in to Kavka</h1>
    <p class="text-medium-emphasis mb-8">Please enter your Email and Password.</p>
    <div>
      <v-text-field v-model="email" maxlength="50"
        color="primary" label="Email" variant="outlined"></v-text-field>

      <v-text-field type="password" v-model="password" minlength="8" maxlength="50"
        color="primary" label="Password" variant="outlined"></v-text-field>

      <v-checkbox v-model="keepMeSignedIn" label="Keep me signed in" color="primary"></v-checkbox>

      <v-btn :loading="submitLoading" @click="handleSubmitLogin"
        class="rounded-sm" size="x-large" type="submit" color="primary" flat block>Signin</v-btn>
    </div>
  </div>
</template>
