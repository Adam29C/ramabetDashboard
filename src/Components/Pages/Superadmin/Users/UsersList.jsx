import React, { useState, useEffect } from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import ModalComponent from "../../../Helpers/ModalComponent";
import PagesIndex from "../../PagesIndex";
import { DELETE_USER } from "../../../Services/SuperAdminServices";
import DeleteSweetAlert from "../../../Helpers/DeleteSweetAlert";


const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const userId = localStorage.getItem("userId");
let userDeleteReason = true
  const getList = async () => {
    setLoading(true);
    try {
      const res = await PagesIndex.admin_services.USERS_LIST(userId);

      setData(res?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "User Name",
      selector: (row) => row?.username,
    },
    {
      name: "Mobile No.",
      selector: (row) => row?.mobile,
    },
    {
      name: "Device",
      selector: (row) => row?.deviceName,
    },
    {
      name: "Is Active",
      selector: (row) => (
        <span
          className={`badge fw-bold ${
            row.isActive ? "bg-primary" : "bg-danger"
          }`}
        >
          {row.isActive ? "Active" : "In-Active"}
        </span>
      ),
    },
    {
      name: "Is Block",
      selector: (row) => (
        <PagesIndex.ChangeStatus
          apiRoute={PagesIndex.admin_services.BLOCK_USER}
          req={{ userId: row?._id, isBlock: row?.isBlock }}
          checkboxStatus={row?.isBlock}
          rowData={row}
        />
      ),
    },
    {
      name: "Is Login",
      selector: (row) => (
        <span
          className={`badge fw-bold ${
            row.isLogin ? "bg-primary" : "bg-danger"
          }`}
        >
          {row.isLogin ? "Login" : "Log-Out"}
        </span>
      ),
    },
    {
      name: "Actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            {/* <PagesIndex.Link to={"/admin/employee/edit"} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1 "></i>
              </span>
            </PagesIndex.Link> */}

            <PagesIndex.Link
              href="#"
              onClick={() =>
                DeleteSweetAlert(
                  PagesIndex.admin_services.DELETE_USER,
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
    <Main_Containt add_button={false} route="/admin/user/add" title="All Users">
      {/* <ModalComponent /> */}
      <PagesIndex.Data_Table
        isLoading={loading}
        columns={columns}
        data={data}

      />
      
    </Main_Containt>
  );
};

export default UsersList;
