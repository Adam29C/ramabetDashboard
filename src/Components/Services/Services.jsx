import { Api } from "../Config/Api"
import dataservice from "../Config/DataService"


export const employee_get_list = async(id)=>{
    
    try {
        const res = await dataservice.get(`${Api.EMPLOYEE_LIST}?adminId=${id}`)
       return res?.data
    } catch (error) {
        console.error('Error fetching employee list:', error);
    }
}