export const admin_Sidebar = [
  {
    id: 1,
    headerTitle: "Dashboard",
    title: "Dashboard",
    route: "dashboard",
    Icon: "icon-speedometer",
    NestedElement: [],
  },
  {
    id: 2,
    route: "Dashboard",
    headerTitle: "Penal Info",
    title: "Penal Info",
    Icon: "icon-globe-alt",
    NestedElement: [
      {
        id: 1,
        title: "Systems",
        route: "system",
      },
    ],
  },
  {
    id: 3,
    // route: "Dashboard",
    headerTitle: "Users",
    title: "Users",
    Icon: "icon-globe-alt",
    NestedElement: [
      // {
      //   id: 1,
      //   title: "Add Users",
      //   route: "user/add",
      // },
      {
        id: 2,
        title: "Users List",
        route: "users",
      },
      {
        id: 3,
        title: "Users Idea's",
        route: "users/ideas",
      },
      {
        id: 4,
        title: "Deleted Users",
        route: "users/deleted",
      },
    ],
  },
  {
    id: 4,
    route: "employee/add",
    headerTitle: "Employee",
    title: "Employee",
    Icon: "icon-globe-alt",
    NestedElement: [
      {
        id: 1,
        title: "Add Employee",
        route: "employee/add",
      },
      {
        id: 2,
        title: "Employee List",
        route: "employees",
      },
    ],
  },
  {
    id: 5,
    headerTitle: "Games",
    title: "Available Games",
    Icon: "fa-solid fa-gamepad",
    NestedElement: [
      {
        id: 1,
        title: "Game Provider",
        route: "games",
      },
      {
        id: 2,
        title: "Games Setting",
        route: "game/settings",
      },
      {
        id: 3,
        title: "Game Rates",
        route: "game/rates",
      },
      {
        id: 4,
        title: "Game Result",
        route: "game/results",
      },
      {
        id: 5,
        title: "Revert Result Payment",
        route: "#",
      },
      {
        id: 6,
        title: "Refund User Points",
        route: "#",
      },
    ],
  },
  {
    id: 6,

    title: "Starline",
    Icon: "fa-regular fa-star",
    NestedElement: [
      {
        id: 1,
        title: "Star Game Provider",
        route: "#",
      },
      {
        id: 2,
        title: "Star Games Setting",
        route: "#",
      },
      {
        id: 3,
        title: "Star Game Rates",
        route: "#",
      },
      {
        id: 4,
        title: "Star Game Result",
        route: "#",
      },
      {
        id: 5,
        title: "Star Revert Result Payment",
        route: "#",
      },
      {
        id: 6,
        title: "Refund User Points",
        route: "#",
      },
    ],
  },
  {
    id: 7,
    title: "Jackpot",
    Icon: "fa-regular fa-heart",
    NestedElement: [
      {
        id: 1,
        title: "Jackpot Game Provider",
        route: "#",
      },
      {
        id: 2,
        title: "Jackpot Games Setting",
        route: "#",
      },
      {
        id: 3,
        title: "Jackpot Game Rates",
        route: "#",
      },
      {
        id: 4,
        title: "Jackpot Game Result",
        route: "#",
      },
      {
        id: 5,
        title: "Jackpot Revert Result Payment",
        route: "#",
      },
      {
        id: 6,
        title: "Refund User Points",
        route: "#",
      },
    ],
  },

  // {
  //   id: 8,
  //   headerTitle: "Cutting Group",
  //   title: "Cutting Group",
  //   route: "cuttinggroup",
  //   Icon: "icon-speedometer",
  //   NestedElement: [],
  // },
  // {
  //   id: 9,
  //   headerTitle: "Bookie Corner",
  //   title: "Bookie Corner",
  //   Icon: "fa-solid fa-wallet",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "OC Cutting Group",
  //       route: "OCGroup",
  //     },
  //     {
  //       id: 2,
  //       title: "Final OC Cutting Group",
  //       route: "finalOCGroup",
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   headerTitle: "Wallet",
  //   title: "Wallet",
  //   Icon: "fa-solid fa-wallet",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "Manual Request",
  //       route: "wallet/manualrequest",
  //     },
  //     {
  //       id: 2,
  //       title: "Export Debit Report",
  //       route: "wallet/debitreport",
  //     },
  //     {
  //       id: 3,
  //       title: "Download Debit Report",
  //       route: "wallet/moneycheck",
  //     },
  //     {
  //       id: 4,
  //       title: "Search Account",
  //       route: "wallet/searchaccount",
  //     },
  //     {
  //       id: 5,
  //       title: "Invoices",
  //       route: "wallet/invoices",
  //     },

  //     {
  //       id: 6,
  //       title: "View Wallet",
  //       route: "wallet/customerbalance",
  //     },
  //     {
  //       id: 7,
  //       title: "Requests On/Off",
  //       route: "wallet/reqOnOff",
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   headerTitle: "Credit Request (UPI)",
  //   title: "Credit Request (UPI)",
  //   route: "creditUPI",
  //   Icon: "fa-solid fa-check",
  //   NestedElement: [],
  // },
  // {
  //   id: 12,
  //   headerTitle: "Approved Requests",
  //   title: "Approved Debit Requests",
  //   Icon: "fa-solid fa-check",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "Bank Account(Export)",
  //       route: "#",
  //     },
  //     {
  //       id: 2,
  //       title: "Bank Account(Manual)",
  //       route: "#",
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   headerTitle: "Pending Requests",
  //   title: "Pending Debit Requests",
  //   Icon: "fa-regular fa-clock",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "Pending Bank Requests",
  //       route: "#",
  //     },
  //     {
  //       id: 2,
  //       title: "Pending Paytm Requests",
  //       route: "#",
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   headerTitle: "Declined Request",
  //   title: "Declined Request",
  //   route: "#",
  //   Icon: "fa-solid fa-times",
  //   NestedElement: [],
  // },

  // {
  //   id: 15,
  //   headerTitle: "Reports",
  //   title: "Reports",
  //   Icon: "ti-agenda",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "Sales Report",
  //       route: "#",
  //     },
  //     {
  //       id: 2,
  //       title: "Starline Sales Report",
  //       route: "#",
  //     },
  //     {
  //       id: 3,
  //       title: "Andar Bahar Sales Report",
  //       route: "#",
  //     },
  //     {
  //       id: 4,
  //       title: "Andar Bahar Total Bids",
  //       route: "#",
  //     },
  //     {
  //       id: 5,
  //       title: "Fund Report",
  //       route: "#",
  //     },
  //     {
  //       id: 6,
  //       title: "UPI Fund Report",
  //       route: "#",
  //     },

  //     {
  //       id: 7,
  //       title: "Trak Pay Fund Report",
  //       route: "#",
  //     },
  //     {
  //       id: 8,
  //       title: "RazorPay Fund Report",
  //       route: "#",
  //     },
  //     {
  //       id: 9,
  //       title: "Total Bids",
  //       route: "#",
  //     },
  //     {
  //       id: 10,
  //       title: "Credit/Debit Report",
  //       route: "#",
  //     },
  //     {
  //       id: 11,
  //       title: "Daily Report",
  //       route: "#",
  //     },
  //     {
  //       id: 12,
  //       title: "Bidding Report",
  //       route: "#",
  //     },
  //     {
  //       id: 13,
  //       title: "User Analysis",
  //       route: "#",
  //     },
  //     {
  //       id: 14,
  //       title: "Customer Balance",
  //       route: "#",
  //     },
  //     {
  //       id: 15,
  //       title: "All User Bids",
  //       route: "#",
  //     },
  //   ],
  // },
  // {
  //   id: 16,
  //   headerTitle: "Notification",
  //   title: "Notification",
  //   route: "#",
  //   Icon: "fa-regular fa-bell",
  //   NestedElement: [],
  // },
  // {
  //   id: 17,
  //   headerTitle: "User Idea's",
  //   title: "User Idea's",
  //   route: "#",
  //   Icon: "fa-regular fa-bell",
  //   NestedElement: [],
  // },
  // {
  //   id: 18,
  //   headerTitle: "News",
  //   title: "News",
  //   route: "#",
  //   Icon: "fa-solid fa-television",
  //   NestedElement: [],
  // },
  
  // {
  //   id: 19,
  //   headerTitle: "Deleted User",
  //   title: "Deleted User",
  //   route: "#",
  //   Icon: "fa-solid fa-television",
  //   NestedElement: [],
  // },
  {
    id: 20,
    headerTitle: "Masters",
    title: "App Settings",
    Icon: "fa-solid fa-cog",
    NestedElement: [
      // {
      //   id: 1,
      //   title: "How To Play",
      //   route: "#",
      // },
      // {
      //   id: 2,
      //   title: "Withdraw Screen",
      //   route: "#",
      // },
      // {
      //   id: 3,
      //   title: "Notice Board",
      //   route: "#",
      // },
      // {
      //   id: 4,
      //   title: "Profile Note",
      //   route: "#",
      // },
      // {
      //   id: 5,
      //   title: "Wallet Contact",
      //   route: "#",
      // },
      {
        id: 1,
        title: "App Version",
        route: "appSettings/versionSetting",
      },
    ],
  },
  // {
  //   id: 21,
  //   headerTitle: "Masters",
  //   title: "Masters",
  //   Icon: "ti-money",
  //   NestedElement: [
  //     {
  //       id: 1,
  //       title: "Bank",
  //       route: "#",
  //     },
  //     {
  //       id: 2,
  //       title: "UPI Id",
  //       route: "#",
  //     },
  //     {
  //       id: 3,
  //       title: "Add Fund Mode",
  //       route: "#",
  //     },
  //     {
  //       id: 4,
  //       title: "Manage Employee",
  //       route: "#",
  //     },
  //     {
  //       id: 5,
  //       title: "Wallet Contact",
  //       route: "#",
  //     },
  //     {
  //       id: 6,
  //       title: "Register New Employee",
  //       route: "#",
  //     },
  //   ],
  // },
];
