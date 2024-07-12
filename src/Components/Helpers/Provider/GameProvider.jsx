import PagesIndex from "../../Pages/PagesIndex";
import { Link } from "react-router-dom";
import { Get_Year_Only } from "../../Utils/Common_Date";
import Toggle from "../../Helpers/Toggle";
import Swal from "sweetalert2";
import DeleteSweetAlert from "../DeleteSweetAlert";
import { GAME_PROVIDER_DELETE_API } from "../../Services/SuperAdminServices";
const GameProvider = ({ data, path,getGameProviderList }) => {
  const userId = localStorage.getItem("userId")
  const navigate = PagesIndex.useNavigate();


  // const handleDelete = (id) => {
    
  //   console.log(id)
  //   let data = {
  //     adminId:userId,
  //     gameSettingId:id
  //   }

  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     // icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const res =  PagesIndex.admin_services.GAME_PROVIDER_DELETE_API(data)
  //       console.log(res,"check delete api response")
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         // icon: "success"
  //       });
  //     }
  //   });
  // };

  const handleDelete = async(id) => {


    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if (confirmResult.isConfirmed) {
      try {
        let data = {
          adminId: userId,
          gameProviderId: id
        };
        const res = await GAME_PROVIDER_DELETE_API(data);
        console.log(res, "check delete api response");
        getGameProviderList()
        if (res.success) { 
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            // icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting your file.",
            // icon: "error"
          });
        }
      } catch (error) {
        console.error("Error deleting file:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue deleting your file.",
          // icon: "error"
        });
      }
    }
  };

  
  const columns = [
  
    {
      name: "Provider Name",
      selector: (row) => row.providerName,
    },
    {
      name: "Provider Result",
      selector: (row) => row.providerResult,
    },

    {
      name: "Result Status",
      selector: (row) => row.resultStatus,
    },

    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },

    {
      name: "Active Status",
      selector: (row) => (
        <>
          <Toggle check={row.activeStatus} />
        </>
      ),
    },
    {
      name: "created At",
      selector: (row) => Get_Year_Only(row.createdAt),
    },

    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={path} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1 "></i>
              </span>
            </Link>

            <Link href="#" onClick={() => handleDelete(cell?._id)}>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1 "></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PagesIndex.Main_Containt add_button={true} route={path}>
        <PagesIndex.Data_Table columns={columns} data={data} />
      </PagesIndex.Main_Containt>
    </div>
  );
};

export default GameProvider;
