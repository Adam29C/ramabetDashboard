import React, { useEffect, useState } from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import Data_Table from "../../../Helpers/Datatable";
import { employee_get_list } from "../../../Services/Services";

const EmployeeList = () => {
  const [loading, setLoading] = useState(false);

  const getList = async()=>{
   let id = "667a8f8fc735da40250abafe"
    const res = await employee_get_list(id)
    console.log(res,"check response on api")
  }

  useEffect(()=>{
    getList()
  },[])

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.name,
    },
    {
      name: "Designation",
      selector: (row) => row.name,
    }, {
      name: "Block",
      selector: (row) => row.name,
    },
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "created At",
      selector: (row) => row.name,
    },

  ];

  const data = [
    {
      id: 1,
      name: "ttt",
      mobileNumber: "000000000000",
    },
    {
      id: 2,
      name: "tsssstt",
      mobileNumber: "000000000000",
    },
    {
      id: 3,
      name: "tttttt",
      mobileNumber: "000000000000",
    },
  ];

  return (
    <div>
      <Main_Containt add_button={false} route="/admin/employee/add">
        <Data_Table isLoading={loading} columns={columns} data={data} />
      </Main_Containt>
    </div>
  );
};

export default EmployeeList;
