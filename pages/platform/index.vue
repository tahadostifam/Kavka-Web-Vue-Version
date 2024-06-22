<script>
</script>

<template>
    <NuxtLayout name="platform">
        <Sidebar />
        <Transition name="fade">
            <div id="chat_section" class="col" v-if="$data.currentChatStore.isSelected">
                <ChatMessagingSection />
            </div>
    
            <NoChatSelected v-else />
        </Transition>
    </NuxtLayout>
</template>