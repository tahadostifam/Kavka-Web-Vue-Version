<script>
import "./Sidebar.scss";
import useAuthStore from '~/stores/auth';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      selectedFolder: null
    };
  },
};
</script>

<template>
  <div class="col chat_sidebar py-6 px-5">
    <div class="d-flex align-center flex-row justify-space-between">
      <div class="chat_sidebar-user_avatar">
        <div class="d-flex flex-row justify-space-between">
          <div class="d-flex">
            <UserAvatar class="mr-3 chat_sidebar-customized_avatar" size="70"
              src="https://cdn.vuetifyjs.com/images/john.jpg">
              <span></span>
            </UserAvatar>

            <div>
              <h1 class="text-high-emphasis chat_sidebar-user_avatar-username">{{ authStore.getFullName() }}</h1>
              <span class="text-disabled chat_sidebar-user_avatar-state">Online</span>
            </div>
          </div>

          <div class="d-flex align-center">
            <AppMenu />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <v-text-field rounded="lg" prepend-inner-icon="mdi-magnify" placeholder="Search" variant="solo"></v-text-field>

      <h2>Messages</h2>
      <ChatRows />
    </div>
  </div>
</template>
