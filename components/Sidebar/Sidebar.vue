<script>
import "./Sidebar.scss";
export default {};
</script>

<template>
  <div class="col chat_sidebar">
    <SidebarUserProfile name="John Doe" online="true" avatar="https://picsum.photos/300/300" />

    <ChatRows />

    <NewChatButton />
  </div>
</template>
