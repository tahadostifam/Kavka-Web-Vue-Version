const uiState = {
    isSettingsDialogActive: false,
    activeTab: "chat",
    tabs: [
        {
            to: "chat",
            icon: "mdi-message",
            text: "Chats"
        },
        {
            to: "pages",
            icon: "mdi-text-box",
            text: "Pages"
        },
        {
            to: "rooms",
            icon: "mdi-message-video",
            text: "Rooms"
        },
        {
            to: "settings",
            icon: "mdi-cog",
            text: "Settings"
        },
    ]
}

export default uiState;