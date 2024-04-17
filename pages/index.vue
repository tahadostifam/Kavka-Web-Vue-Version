<script lang="ts">
import useAuthStore from '~/stores/auth';

export default {
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  methods: {
    update() {
      this.authStore.authenticate().catch(() => this.$router.push("/login")).then((authenticated) => {
        console.log("Authenticated", authenticated);        
      });
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
