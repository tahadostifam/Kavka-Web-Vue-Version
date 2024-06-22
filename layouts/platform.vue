<template>
    <SettingsDialog />

    <div class="main_grid">
        <MiniSidebar />
        <MobileNav />

        <div class="main_view">
            <slot/>
        </div>
    </div>
    <!-- <MainSection v-if="authStore.user != undefined" /> -->
    <!-- <SplitLoader v-else /> -->
</template>


<style lang="scss">
#chat_section {
    position: relative !important;
    width: calc(100% - var(--mini-sidebar-width));
}

.main_grid {
    --mini-sidebar-width: 90px;
    --sidebar-width: 450px;

    .main_view {
        position: relative;
        left: 0;
        width: calc(100% - var(--mini-sidebar-width));
    }

    display: grid;
    grid-template-columns: var(--mini-sidebar-width) calc(100vw - var(--mini-sidebar-width));

    .col {
        height: 100vh;
    }

    @media screen and (max-width: $bk-desktop-2) {
        // Enable mobile mode!

        & {
            grid-template-columns: 100%;
        }

        .main_view {
            width: 100%;
        }

        #chat_section {
            background: $background-color;
            position: fixed;
            width: 100vw;
            height: 100vh;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 50;
        }
    }
}
</style>