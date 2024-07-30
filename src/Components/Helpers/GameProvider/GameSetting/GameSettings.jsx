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


  const columns = [
    {
      name: "Game Name",
      selector: (row, cell) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[0];
        return (
          <div className="">
            <div className="break-text">{row.providerName}</div>
            <PagesIndex.Link
              to={"/admin/game/setting/edit"}
              state={{ row: row, rowData: rowData, edit: "multiple" }}
              className="update-button"
            >
              update
            </PagesIndex.Link>
          </div>
        );
      },
    },
    {
      name: "Monday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[0];
        return (
          <div className="py-2">
            {rowData ? (
              <>
                <p className="game-setting-font">
                  <span className="fw-bold"> OBT</span> :
                  {rowData ? rowData.OBT : "N/A"}
                </p>
                <p className="game-setting-font">
                  <span className="fw-bold"> CBT</span> :
                  {rowData ? rowData.CBT : "N/A"}
                </p>
                <p className="game-setting-font">
                  <span className="fw-bold"> OBRT</span> :
                  {rowData ? rowData.OBRT : "N/A"}
                </p>
                <p className="game-setting-font">
                  <span className="fw-bold"> CBRT</span> :
                  {rowData ? rowData.CBRT : "N/A"}
                </p>
                <p className="game-setting-font">
                  <span className="fw-bold">
                    IsClosed :
                    {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                  </span>
                </p>

                <PagesIndex.Link
                  to={"/admin/game/setting/edit"}
                  state={{ row: row, rowData: rowData, edit: "single" }}
                  className="update-button"
                >
                  update
                </PagesIndex.Link>
              </>
            ) : (
              " No Record"
            )}
          </div>
        );
      },
    },
    {
      name: "Tuesday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[1];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Wednesday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[2];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Thursday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[3];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Friday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[4];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Saturday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[5];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Sunday",
      selector: (row) => {
        const rowData = row.gameSatingInfo && row.gameSatingInfo[6];
        return (
          <div className="py-2">
            <div className="py-2">
              {rowData ? (
                <>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBT</span> :
                    {rowData ? rowData.OBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBT</span> :
                    {rowData ? rowData.CBT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> OBRT</span> :
                    {rowData ? rowData.OBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold"> CBRT</span> :
                    {rowData ? rowData.CBRT : "N/A"}
                  </p>
                  <p className="game-setting-font">
                    <span className="fw-bold">
                      IsClosed :
                      {rowData ? (rowData.isClosed ? "Closed" : "Open") : "N/A"}
                    </span>
                  </p>

                  <PagesIndex.Link
                    to={"/admin/game/setting/edit"}
                    state={{ row: row, rowData: rowData, edit: "single" }}
                    className="update-button"
                  >
                    update
                  </PagesIndex.Link>
                </>
              ) : (
                " No Record"
              )}
            </div>
          </div>
        );
      },
    },
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
