import Main_Containt from "../../../Layout/Main/Main_Containt";
import PagesIndex from "../../PagesIndex";

const EmployeeList = () => {
  const [loading, setLoading] = PagesIndex.useState(false);
  const [data, setData] = PagesIndex.useState([]);

  const userId = localStorage.getItem("userId");

  // ---- GET EMPLOYEE LIST
  const getList = async () => {
    const res = await PagesIndex.apiService.EMPLOYEE_GET_LIST(userId);

    setData(res?.data?.details);
  };

  PagesIndex.useEffect(() => {
    getList();
  }, []);

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
    },

    {
      name: "Designation",
      selector: (row) => row.designation,
    },
    {
      name: "Block",
      selector: (row) => (
        <>
          <PagesIndex.Toggle_Button check={row.isBlock} />
        </>
      ),
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
      selector: (row) => PagesIndex.Get_Year_Only(row.createdAt),
    },
  ];

  return (
    <div>
      <Main_Containt add_button={false} route="/admin/employee/add">
        <PagesIndex.Data_Table
          isLoading={loading}
          columns={columns}
          data={data}
        />
      </Main_Containt>
    </div>
  );
};

export default EmployeeList;
