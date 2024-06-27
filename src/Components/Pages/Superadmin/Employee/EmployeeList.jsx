import React, { useEffect, useState } from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import Data_Table from "../../../Helpers/Datatable";
import { EMPLOYEE_GET_LIST} from "../../../Services/Services";
import { Get_Year_Only } from "../../../Utils/Common_Date";

import Toggle from "../../../Helpers/Toggle";
const EmployeeList = () => {
  const [loading, setLoading] = useState(false);
  const [data ,setData]=useState([])
const userId = localStorage.getItem("userId")
  const getList = async()=>{
  
    const res = await EMPLOYEE_GET_LIST(userId)
  
    setData(res?.data?.details)
  }

  useEffect(()=>{
    getList()
  },[])

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employeeName ,
    },

    {
      name: "Designation",
      selector: (row) => row.designation,
    }, {
      name: "Block",
      selector: (row) => (
        <>
        <Toggle check={row.isBlock}/>
      
        </>
      )
    },
    // {
    //   name: "Status",
    //   selector: (row) => (
    //     <>
    //       <Form.Check
    //         type="switch"
    //         id="custom-switch"
    //         defaultChecked={row?.status}
    //         onChange={(e) => handleStatusUpdate(e.target.checked, row?._id)}
    //         className="custom-switch"
    //       />
    //     </>
    //   ),
    // },
    {
      name: "User Name",
      selector: (row) => row.username,
    },

    
    {
      name: "created At",
      selector: (row) => Get_Year_Only(row.createdAt),
    },

  ];

  // const data = [
  //   {
  //     id: 1,
  //     name: "ttt",
  //     mobileNumber: "000000000000",
  //   },
  //   {
  //     id: 2,
  //     name: "tsssstt",
  //     mobileNumber: "000000000000",
  //   },
  //   {
  //     id: 3,
  //     name: "tttttt",
  //     mobileNumber: "000000000000",
  //   },
  // ];

  return (
    <div>
      <Main_Containt add_button={false} route="/admin/employee/add">
        <Data_Table isLoading={loading} columns={columns} data={data} />
      </Main_Containt>
    </div>
  );
};

export default EmployeeList;
