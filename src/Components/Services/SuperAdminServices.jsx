import { Api } from "../Config/Api";
import dataservice from "../Config/DataService";

export const ADMIN_PROFILE_GET_API = async (id) => {
  try {
    const res = await dataservice.get(`${Api.ADMIN_PROFILE_GET}?adminId=${id}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const ADMIN_CHANGE_PASSWORD_API = async (data) => {
  try {
    const res = await dataservice.post(Api.ADMIN_CHANGE_PASSWORD, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

// --------------------------   Employee Crud ------------------------

export const CREATE_EMPLOYEE = async (data) => {
  try {
    const res = await dataservice.post(Api.CREATE_EMPLOYEE, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};
export const UPDATE_EMPLOYEE = async (data) => {
  try {
    const res = await dataservice.put(Api.UPDATE_EMPLOYEE, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const EMPLOYEE_GET_LIST_API = async (id) => {
  try {
    const res = await dataservice.get(`${Api.EMPLOYEE_LIST}?adminId=${id}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const BLOCK_EMPLOYEE_API = async (data) => {
  console.log(data);
  try {
    const res = await dataservice.patch(Api.BLOCK_EMPLOYEE, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const DELETE_EMPLOYEE = async (ID) => {
  let apiData = {
    adminId: ID.adminId,
    empId: ID.deleteId,
  };
  try {
    const res = await dataservice.delete(Api.DELETE_EMPLOYEE, {
      data: apiData,
    });
    return res?.data;
  } catch (error) {
    return error;
  }
};
// --------------------------   Employee Crud ------------------------

// --------------------------  game provider api ------------------------

export const GAME_PROVIDER_GET_LIST_API = async (id) => {
  try {
    const res = await dataservice.get(
      `${Api.ADMIN_GAME_PROVIDER}?adminId=${id}`
    );
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_PROVIDER_ADD_API = async (data) => {
  try {
    const res = await dataservice.post(Api.ADMIN_GAME_PROVIDER, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_PROVIDER_DELETE_API = async (data) => {
  try {
    let apiData = {
      adminId: data.adminId,
      gameProviderId: data.deleteId,
    };

    const res = await dataservice.delete(Api.ADMIN_GAME_PROVIDER, {
      data: apiData,
    });
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_PROVIDER_UPDATE_API = async (data) => {
  try {
    const res = await dataservice.put(Api.ADMIN_GAME_PROVIDER, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

//GAME RATES API
export const GAME_RATES_GET_LIST_API = async (id) => {
  try {
    const res = await dataservice.get(`${Api.ADMIN_GAME_RATES}?adminId=${id}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_RATES_ADD_API = async (data) => {
  try {
    const res = await dataservice.post(Api.ADMIN_GAME_RATES, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_RATES_UPDATE_API = async (data) => {
  try {
    const res = await dataservice.put(Api.ADMIN_GAME_RATES, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_RATES_DELETE_API = async (data) => {
  try {
    let apiData = {
      adminId: data.adminId,
      gameRateId: data.deleteId,
    };

    const res = await dataservice.delete(Api.ADMIN_GAME_RATES, {
      data: apiData,
    });
    return res?.data;
  } catch (error) {
    return error;
  }
};

// --------------------------  game provider api ------------------------
// --------------------------   super admin provider api ------------------------

// --------------------------   GAME SETTING CRUD ------------------------

export const GAME_SEETING_LIST_API = async (id) => {
  try {
    const res = await dataservice.get(
      `${Api.ADMIN_GAME_SETTING}?adminId=${id}`
    );
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const GAME_SETTING_ADD = async (id) => {
  try {
    const res = await dataservice.post(`${Api.ADMIN_GAME_SETTING}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

// --------------------------   GAME SETTING CRUD ------------------------

// --------------------------   GAME SETTING CRUD ------------------------


export const GAME_RESULT = async (id) => {
  console.log();
  try {
    const res = await dataservice.get(`${Api.ADMIN_GAME_RESULT}?date=${id}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};



// --------------------------   GAME SETTING CRUD ------------------------

// --------------------------   USERS CRUD ------------------------

export const USERS_LIST = async (id) => {
  try {
    const res = await dataservice.get(`${Api.USERS_LIST}/${id}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const BLOCK_USER = async (ID) => {
  try {
    const res = await dataservice.put(Api.USERS_LIST, ID);
    return res?.data;
  } catch (error) {
    return error;
  }
};
export const DELETE_USER = async (ID) => {
  console.log(ID,"check")
  let apiData = {
    adminId: ID.adminId,
    userId: ID.deleteId,
    reason: ID.reason
  };
  try {
    const res = await dataservice.delete(Api.USERS_LIST, { data: apiData });
    return res?.data;
  } catch (error) {
    return error;
  }

};

export const GET_DELETED_USERS = async(id)=>{
  try {
    const res = await dataservice.get(`${Api.DELETED_USERS}?adminId=${id}`)
    return res?.data
  } catch (error) {
    return error
  }
}
export const GET_USERS_IDEAS  = async(id)=>{
  try {
    const res = await dataservice.get(`${Api.USERS_IDEAS}?adminId=${id}`)
    return res?.data
  } catch (error) {
    return error
  }
}
// --------------------------   USERS CRUD ------------------------
