import { Message } from "@mui/icons-material";

export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "shavez khan",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "shavez khan",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "shavez khan",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const SampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "shavez khan",
    _id: "1",
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar2.png",
    ],
    name: " khan",
    _id: "2",
  },
];

export const SampleNotifications = [
  {
    // sender: {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "shavez khan",
    // },
    _id: "1",
  },
  {
    // sender: {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "khan",
    // },
    _id: "2",
  },
];

export const SampleMessage = [
  {
    content: "Hi keysa hai bro",
    _id: "scsadjasnvnsvsv",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "charId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "asdsad2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],

    _id: "scsadjbhvasnvshaveznsvsv",
    sender: {
      _id: "dncsa;vavfs'bbdfbdf",
      name: "Chaman2",
    },
    chat: "charId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "shavez khan",
      _id: "1",
      username: "khan",
      friends: 20,
      groups: 5,
    },
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: " khan",
      _id: "2",
      username: "Shavez",
      friends: 25,
      groups: 2,
    },
  ],

  chats: [
    {
      name: "zahir Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: " khan",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },

    {
      name: "Zuhair Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: " khan",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
  ],

  message: [
    {
      attachments: [],
      content: "bhag sale",
      _id: "cjslbsdvsdjhsdvsbdhb",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "chaman",
      },
      chat: "chatId",
      groupChat:false,
      createdAt: "2024-02-12T10:40:30.6302",
    },
    {
      attachments: [
        {
          public_id: "sdss 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "bhag sale",
      _id: "cjslbsdvsdjhsdvsbdhb",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "chaman",
      },
      chat: "chatId",
      groupChat:true,
      createdAt: "2024-02-12T10:40:30.6302",
    },
  ],
};
