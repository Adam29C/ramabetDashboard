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
        title: "Game1",
        route: "#",
      },
      {
        id: 2,
        title: "Game2",
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
        title: "Game1",
        route: "#",
      },
      {
        id: 2,
        title: "Game2",
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
        title: "Game1",
        route: "#",
      },
      {
        id: 2,
        title: "Game2",
        route: "#",
      },
    ],
  },
];
