<style lang="scss">
.signup_form {
  position: relative;
  left: 50%;
  margin: 100px 0;
  transform: translate(-50%);
  text-align: center;
  width: 450px;

  .logo {
    height: 190px;
  }

  @media screen and (max-width: 768px) {
    &{
      width: 90%;
    }
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordRepeat: "",
      keepMeSignedIn: true,
      submitLoading: false
    };
  },
  methods: {
    handleSubmitSignup() {
      alert("not implemented yet")
    }
  },
  mounted() {
    if (process.env.NODE_ENV == "development") {
      this.$data.name = "john"
      this.$data.lastName = "doe"
      this.$data.email = "johndoe@kavka.social"
      this.$data.username = "johndoe"
      this.$data.password = "12345678"
      this.$data.passwordRepeat = "12345678"
    }
  }
};
</script>

<template>
  <div class="signup_form">
    <img src="~/assets/img/logo_dark_transparent.png" class="logo mb-5" />
    <h1>Sign up to Kavka</h1>
    <p class="text-medium-emphasis mb-8">Welcome to Kavka!</p>
    <div>
      <v-text-field v-model="name" maxlength="30" color="primary" label="Name" variant="outlined"></v-text-field>

      <v-text-field v-model="lastName" maxlength="50" color="primary" label="Last Name"
        variant="outlined"></v-text-field>

      <v-text-field v-model="email" maxlength="50" color="primary" label="Email" variant="outlined"></v-text-field>

      <v-text-field v-model="username" maxlength="50" color="primary" label="Username"
        variant="outlined"></v-text-field>

      <v-text-field type="password" v-model="password" minlength="8" maxlength="50" color="primary" label="Password"
        variant="outlined"></v-text-field>

      <v-text-field type="password" v-model="password" minlength="8" maxlength="50" color="primary" label="Password"
        variant="outlined"></v-text-field>

      <v-checkbox v-model="keepMeSignedIn" color="primary">
        <template v-slot:label>
          <div>
            I accept 
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <a href="/" target="_blank" v-bind="props" @click.stop>
                  Kavka's
                </a>
              </template>
              Open terms of service.
            </v-tooltip>
            terms of service.
          </div>
        </template>
      </v-checkbox>


      <v-btn :loading="submitLoading" @click="handleSubmitSignup" class="rounded-sm" size="x-large" type="submit"
        color="primary" flat block>Submit</v-btn>
    </div>
  </div>
</template>
