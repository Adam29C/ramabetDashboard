
import { Api } from "../Config/Api";
import dataservice from "../Config/DataService";


export const EMPLOYEE_GET_LIST = async (id) => {
  try {
    const res = await dataservice.get(`${Api.EMPLOYEE_LIST}?adminId=${id}`);
    return res?.data;
  } catch (error) {
    return error
  }
};

