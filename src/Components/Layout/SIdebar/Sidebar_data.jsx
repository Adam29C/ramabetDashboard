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
    // route: "Dashboard",
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
      {
        id: 1,
        title: "Add Users",
        route: "user/add",
      },
      {
        id: 2,
        title: "Users List",
        route: "users",
      },
    ],
  },
  {
    id: 4,
    // route: "Dashboard",
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
        route: "#",
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
        route:"#",
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
  
  {
    id: 1,
    headerTitle: "Cutting Group",
    title: "Cutting Group",
    route: "cuttinggroup",
    Icon: "icon-speedometer",
    NestedElement: [],
  },
];
