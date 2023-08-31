<script>
import "./SidebarUserProfile.scss";
export default {
  props: ["name", "online", "avatar"],
};
</script>

<template>
  <div class="sidebar_user_profile">
    <div class="sidebar_user_avatar">
      <img :src="avatar" />
    </div>

    <div class="sidebar_user_info">
      <div>
        <h1>{{ name }}</h1>
        <span class="text-medium-emphasis">{{ online ? "Online" : "Offline" }}</span>
      </div>

      <AppMenu />
    </div>
  </div>
</template>
