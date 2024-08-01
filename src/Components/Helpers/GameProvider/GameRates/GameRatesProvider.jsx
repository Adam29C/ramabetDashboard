import PagesIndex from "../../../Pages/PagesIndex";
import { Link } from "react-router-dom";
import { Get_Year_Only } from "../../../Utils/Common_Date";

import DeleteSweetAlert from "../../DeleteSweetAlert";

const GameRatesProvider = ({ gameType, path, title }) => {
  const userId = localStorage.getItem("userId");

  const [data, getData] = PagesIndex.useState([]);
  let userDeleteReason = false;
  const getGameRatesList = async () => {
    let data = {
      userId: userId,
      gameType: gameType,
    };
    const res = await PagesIndex.admin_services.GAME_RATES_GET_LIST_API(data);

    getData(res?.data);
  };

  PagesIndex.useEffect(() => {
    getGameRatesList();
  }, []);

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
            <Link to={`${path}/edit`} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1 "></i>
              </span>
            </Link>

            <Link
              href="#"
              onClick={() =>
                DeleteSweetAlert(
                  PagesIndex.admin_services.GAME_RATES_DELETE_API,
                  cell?._id,
                  getGameRatesList,
                  userDeleteReason
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
      <PagesIndex.Main_Containt
        add_button={true}
        route={`${path}/add`}
        title={title}
        btnTitle="Add"
      >
        <PagesIndex.Data_Table columns={columns} data={data} />
      </PagesIndex.Main_Containt>
    </div>
  );
};

export default GameRatesProvider;
