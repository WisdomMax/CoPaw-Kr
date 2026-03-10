const defaultConfig = {
  theme: {
    colorPrimary: "#615CED",
    darkMode: false,
    prefix: "copaw",
    leftHeader: {
      logo: "",
      title: "Work with CoPaw",
    },
  },
  sender: {
    attachments: false,
    maxLength: 10000,
    disclaimer: "Works for you, grows with you",
  },
  welcome: {
    greeting: "Hello, how can I help you today?",
    description:
      "I am a helpful assistant that can help you with your questions.",
    avatar: `${import.meta.env.BASE_URL}copaw-symbol.svg`,
    prompts: [
      {
        value: "새로운 여정을 시작해 볼까요!",
      },
      {
        value: "어떤 기술들을 가지고 있는지 알려줄 수 있나요?",
      },
    ],
  },
  api: {
    baseURL: "",
    token: "",
  },
} as const;

export default defaultConfig;

export type DefaultConfig = typeof defaultConfig;
