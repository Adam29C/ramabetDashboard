
import React, { useState, useEffect } from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import ModalComponent from "../../../Helpers/ModalComponent";
import PagesIndex from "../../PagesIndex";
import { DELETE_USER } from "../../../Services/SuperAdminServices";
import DeleteSweetAlert from "../../../Helpers/DeleteSweetAlert";
import { toast } from "react-toastify";


const UpiIdList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();
  const userId = localStorage.getItem("userId");
let userDeleteReason = false
  const getList = async () => {
    setLoading(true);
    try {
      const res = await PagesIndex.admin_services.GET_UPI_LIST_API(userId);

      setData(res?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const handleStatusUpdate = async (event, value) => {
    try {
      let apidata = {
        adminId: userId,
        upiId:value._id,
        status: event
      }
      console.log(apidata,"chhhhhh")

    const response = await PagesIndex.admin_services.UPDATE_UPI_LIST_API(apidata);
    console.log(response,"response")
    if (response?.status === 200) {
      toast.success(response.message);
      getList()
    } 

    } catch (error) {
      console.log(response,"responseddddddddddd")
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.upiName,
    },

    {
      name: "IsActive",
      selector: (row) => (
             <span
          className={`badge fw-bold ${
            row.status === "true" ? "bg-primary" : "bg-danger"
          }`}
        >
          {row.status === "true" ? "Active" : "Disable"}
        </span>
      )
    },



    {
        name: "Status",
      selector: (row) => (
   
        <div>
        <select
        className="form-select-upi"
        aria-label="Default select example"
        onChange={(e) => {
          handleStatusUpdate(e.target.value, row);
          setUpdateData(row);
        }}
      >
      

            <option value="false" disbled selected>
            {row.status === "true" ? "Active" : "Disable"}
            </option>
            <option value="true">Active</option>
            <option value="false">Disable</option>
        
     
      </select>
      </div>
      ),
    },


    {
      name: "Actions",
      selector: (cell, row) => (

        <div style={{ width: "120px" }}>
          <div >
         
            <PagesIndex.Link
              href="#"
              onClick={() =>
                DeleteSweetAlert(
                  PagesIndex.admin_services.DELETE_UPI_LIST_API,
                  cell?._id,
                  getList,
                  userDeleteReason
                )
              }
            >
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1 "></i>
              </span>
            </PagesIndex.Link>
          </div>
        </div>
      ),
    },
  ];



  return (
    <Main_Containt add_button={true}
    route="/admin/masters/UPI/add"
    btnTitle="Add"
    title="UPI ID List">
      {/* <ModalComponent /> */}
      <PagesIndex.Data_Table
        isLoading={loading}
        columns={columns}
        data={data}

      />
       <PagesIndex.Toast />
    </Main_Containt>
  );
};

export default UpiIdList;
