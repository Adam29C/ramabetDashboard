import PagesIndex from "../../Pages/PagesIndex";


const GameRates = () => {
  const [loading, setLoading] = PagesIndex.useState(false);
  const [data ,setData]=PagesIndex.useState([])
const userId = localStorage.getItem("userId")


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
  
    {
      name: "User Name",
      selector: (row) => row.username,
    },

    
    {
      name: "created At",
      selector: (row) => Get_Year_Only(row.createdAt),
    },

  ];


  return (
    <div>
      <PagesIndex.Main_Containt add_button={true} route="#">
        <PagesIndex.Data_Table isLoading={loading} columns={columns} data={data} />
      </PagesIndex.Main_Containt>
    </div>
  );
};

export default GameRates;
