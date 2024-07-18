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


  console.log("data" ,data);

  const columns = [
    {
      name: "Game Name",
      selector: (row) => (
        <>
          <div className="break-text">{row.providerName}</div>
        </>
      ),
    },
    {
      name: "Monday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Tuesday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Wednesday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Thursday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Friday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Seturday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },
    {
      name: "Sunday",
      selector: (row) => (
        <>
          <div className="my-1">
            <p className="game-setting-font">OBT : 10:25 AM</p>
            <p className="game-setting-font">CBT : 10:25 AM</p>
            <p className="game-setting-font">OBRT : 10:25 AM</p>
            <p className="game-setting-font">CBRT : 10:25 AM</p>
            <p className="game-setting-font">IsClosed : Open</p>
            <button className="update-button">update</button>
          </div>
        </>
      ),
    },

    // {
    //   name: "actions",
    //   selector: (cell, row) => (
    //     <div style={{ width: "120px" }}>
    //       <div>
    //         <Link to={path} state={cell}>
    //           <span data-toggle="tooltip" data-placement="top" title="Edit">
    //             <i class="ti-marker-alt fs-5 mx-1 "></i>
    //           </span>
    //         </Link>

    //         <Link
    //           href="#"
    //           onClick={() =>
    //             DeleteSweetAlert(
    //               PagesIndex.admin_services.GAME_PROVIDER_DELETE_API,
    //               cell?._id,
    //               userId,
    //               getGameProviderList
    //             )
    //           }
    //         >
    //           <span data-toggle="tooltip" data-placement="top" title="Delete">
    //             <i class="ti-trash fs-5 mx-1 "></i>
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div>
      <PagesIndex.Main_Containt
        add_button={true}
        route={path}
        title={title}
        btnTitle="Add"
      >
        <PagesIndex.Data_Table columns={columns} data={data} />
      </PagesIndex.Main_Containt>
    </div>
  );
};

export default GameProvider;
