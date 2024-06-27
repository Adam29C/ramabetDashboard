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
  
];
