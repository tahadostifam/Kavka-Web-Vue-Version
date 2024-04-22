<script lang="ts">
import useAuthStore from '~/stores/auth';
import { IUser } from "~/api/auth/auth.model"

export default {
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  methods: {
    async update() {
      let vm = this;
      try {
        const { user, chats } = await this.$data.authStore.authenticate();
        
        // Complete user profile before enter to this page
        if ((user.name + user.lastName).trim().length == 0) {
          this.$router.push('/complete_profile');
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        this.$router.push("/login")
      }
    }
  },
  mounted() {
    this.update();
  }
};
</script>

<template>
  <MainSection v-if="authStore.user != undefined" />
  <SplitLoader v-else />
</template>
