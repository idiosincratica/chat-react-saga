export default {
    modules: {
        header: {
            enabled: true,
        },
        sidebar: {
            enabled: true,
        },
        chat: {
            status: '',
            enabled: true,
        },
        footer: {
            enabled: true,
        },
        settings: {
            enabled: true
        }
    },
    blocksActive: {
        chat: true,
        settings: false,
    },
    host: "http://localhost:3000",
    serviceMsg: true,
    blackList: '',
    blackListEnabled: true
}