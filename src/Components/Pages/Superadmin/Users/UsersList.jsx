import React, { useState } from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import Data_Table from "../../../Helpers/Datatable";

const UsersList = () => {
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
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
      <Main_Containt add_button={true} route="/admin/user/add">
        <Data_Table isLoading={loading} columns={columns} data={data} />
      </Main_Containt>
    </div>
  );
};

export default UsersList;
