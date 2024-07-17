import PagesIndex from "../../../Pages/PagesIndex";
import { Link } from "react-router-dom";
import { Get_Year_Only } from "../../../Utils/Common_Date";
import Toggle from "../../Toggle";
import Swal from "sweetalert2";
import { GAME_PROVIDER_DELETE_API } from "../../../Services/SuperAdminServices";
import DeleteSweetAlert from "../../DeleteSweetAlert";
const GameProvider = ({ data, path, getGameProviderList, title }) => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();

  const updateStatusApi = () => {};

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
      name: "Active Status",
      selector: (row) => (
        <>
          <Toggle check={row.activeStatus} updateStatusApi={updateStatusApi} />
        </>
      ),
    },
    {
      name: "created At",
      // selector: (row) => Get_Year_Only(row.createdAt),
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

            <Link
              href="#"
              onClick={() =>
                DeleteSweetAlert(
                  PagesIndex.admin_services.GAME_PROVIDER_DELETE_API,
                  cell?._id,
                  userId,
                  getGameProviderList
                )
              }
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

export default GameProvider;
