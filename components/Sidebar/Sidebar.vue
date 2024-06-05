<script>
import "./Sidebar.scss";
</script>

<template>
  <div class="col chat_sidebar py-0 px-5">
    <div class="mt-6">
      <v-text-field rounded="pill" prepend-inner-icon="mdi-magnify" placeholder="Search..." variant="solo"></v-text-field>

      <h2>Messages</h2>
      <ChatRows />
    </div>
  </div>
</template>
