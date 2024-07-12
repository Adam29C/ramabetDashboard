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
    const res = await dataservice.post(Api.BLOCK_EMPLOYEE, data);
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
  console.log(data);
  try {
    const res = await dataservice.delete(Api.ADMIN_GAME_PROVIDER, { data });
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
      const res = await dataservice.delete(Api.ADMIN_GAME_RATES, {data});
      return res?.data;
    } catch (error) {
      return error;
    }
  };
  

// --------------------------  game provider api ------------------------
// --------------------------   super admin provider api ------------------------
