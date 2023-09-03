<script>
import "./Sidebar.scss";
export default {
  data() {
    return {
      selectedFolder: null
    };
  }
};
</script>

<template>
  <div class="col chat_sidebar">
    <div class="d-flex align-center flex-row justify-space-between">
      <AppMenu />

      <v-text-field
        rounded
        density="compact"
        variant="outlined"
        color="primary"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      >
      </v-text-field>
    </div>

    <div class="chat_sidebar_folders mt-2">
      <v-tabs show-arrow fixed-tabs v-model="selectedFolder" color="primary">
        <v-tab value="one">All</v-tab>
        <v-tab value="two">Personal</v-tab>
        <v-tab value="three">Music</v-tab>
        <v-tab value="four">Programming</v-tab>
      </v-tabs>
    </div>

    <!-- <v-card-text> -->
      <!-- <v-window v-model="tab">
        <v-window-item value="one"> One </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window> -->
    <!-- </v-card-text> -->

    <ChatRows />

    <NewChatButton />
  </div>
</template>
