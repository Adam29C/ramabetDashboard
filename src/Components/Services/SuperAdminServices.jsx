import { Api } from "../Config/Api";
import dataservice from "../Config/DataService";



export const ADMIN_PROFILE_GET_API = async (id) => {

  try {
    const res = await dataservice.get(`${Api.ADMIN_PROFILE_GET}?adminId=${id}`);
    return res?.data;
  } catch (error) {
    return error
  }
};


export const ADMIN_CHANGE_PASSWORD_API =  async(data)=>{
  console.log(data)
  try {
    const res = await dataservice.post(Api.ADMIN_CHANGE_PASSWORD,data)
    return res?.data
  } catch (error) {
    return error
  }
}