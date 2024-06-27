import axios from "axios";
import { Api } from "../Config/Api";
import { BASE_URL } from "../Config/DataService";

export const COMMON_GENERATE_TOKEN_API = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}${Api.COMMON_GENERATE_TOKEN}`,id);
      return res?.data;
    } catch (error) {
      return error
    }
  };
  