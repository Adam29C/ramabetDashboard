import PagesIndex from "../../Pages/PagesIndex";
import { Link } from "react-router-dom";
import { Get_Year_Only } from "../../Utils/Common_Date";
import Toggle from "../../Helpers/Toggle";
import Swal from "sweetalert2";
import DeleteSweetAlert from "../DeleteSweetAlert";
import { GAME_PROVIDER_DELETE_API } from "../../Services/SuperAdminServices";
const GameRatesProvider = ({ data, path, getGameRatesList,title }) => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();
console.log(title)
//   const handleDelete = async (id) => {
//     const confirmResult = await Swal.fire({
//       title: "Are you sure?",
//       text: "You want to delete this!",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (confirmResult.isConfirmed) {
//       try {
//         let data = {
//           adminId: userId,
//           gameProviderId: id,
//         };
//         const res = await PagesIndex.admin_services.GAME_PROVIDER_DELETE_API(
//           data
//         );

//         getGameProviderList();
//         if (res.status === 200) {
//           Swal.fire({
//             title: "Deleted!",
//             text: res?.message,
//           });
//         } else {
//           Swal.fire({
//             title: "Error!",
//             text: "There was an issue deleting your file.",
//           });
//         }
//       } catch (error) {
//         Swal.fire({
//           title: "Error!",
//           text: "There was an issue deleting your file.",
//         });
//       }
//     }
//   };

  const columns = [
    {
      name: "Game Name",
      selector: (row) => row.gameName,
    },
    {
      name: "Game Price",
      selector: (row) => row.gamePrice,
    },
    
    {
      name: "Created At",
      selector: (row) => Get_Year_Only(row.createdAt),
    },
    {
      name: "Actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={path} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1 "></i>
              </span>
            </Link>

            <Link href="#" 
            // onClick={() => 
            //   handleDelete(cell?._id)}
            onClick={() => DeleteSweetAlert(PagesIndex.admin_services.GAME_RATES_DELETE_API, cell?._id, userId, getGameRatesList)}
              >
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
        <h1 className="list-title">{title}</h1>
        <PagesIndex.Data_Table columns={columns} data={data} />
      </PagesIndex.Main_Containt>
    </div>
  );
};

export default GameRatesProvider;
