<script lang="ts">
import useAuthStore from '~/stores/auth';

export default {
  data() {
    return {
      authStore: useAuthStore()
    };
  },
  methods: {
    update() {
      // this.authStore.authenticate().catch(() => this.$router.push("/login"));
    }
  },
  mounted() {
    this.update();

  }
};
</script>

<template>
  <Chat />
  <!-- <SplitLoader v-else/> -->
</template>
