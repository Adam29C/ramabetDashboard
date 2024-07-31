const Api = {
  COMMON_GENERATE_TOKEN: "common/generate-token",
  // AUTH MODULE
  LOGIN: "admin/adminLogin",
  ADMIN_CHANGE_PASSWORD: "admin/changePassword",

  // SYSTEM MODULE
  ADD_SYSTEM_INFO: "admin/addSystemInfo",
  LIST_SYSTEM_INFO: "common/systemInforList",
  UPDATE_SYSTEM_INFO: "admin/updateSystemInfo",
  ADMIN_PROFILE_GET: "admin/adminProfile",

  // EMPLOYEE MODULE
  CREATE_EMPLOYEE: "admin/createEmployee",
  UPDATE_EMPLOYEE: "admin/updateEmployeeInformition",

  EMPLOYEE_LIST: "admin/empList",
  BLOCK_EMPLOYEE: "admin/blockEmployee",
  DELETE_EMPLOYEE: "admin/deleteEmployee",

  //GAME PROVIDER
  ADMIN_GAME_PROVIDER: "admin/game/gameProvider",

  //GAME RATES
  ADMIN_GAME_RATES: "admin/game/gameRate",

  //GAME SETTING
  ADMIN_GAME_SETTING: "/admin/game/gameSetting",

  // GAME RESULT
  ADMIN_GAME_RESULT: "/admin/game/gameResult",

  //GAME SETTING
  //users
  USERS_LIST: "/admin/users",
  DELETED_USERS:"/admin/getDeleteUser",
  USERS_IDEAS:"/admin/UserIdea",
  GET_VERSION:"/admin/appSetting/listVersionSetting",
  UPDATE_VERSION:"/admin/appSetting/updateVersionSetting",
  GET_DASHBOARD_COUNT:"/admin/countDashboard/",
  WALLET_CONTACT_LIST:"/admin/appSetting/walledContestList",
  UPDATE_WALLET_CONTACT:"/admin/appSetting/updateWalledContest",
};

export { Api };
