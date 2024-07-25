import React from "react";
// import GameProvider from '../../../../Helpers/Provider/GameProvider'
import PagesIndex from "../../../PagesIndex";
import GameSettings from "../../../../Helpers/GameProvider/GameSetting/GameSettings";

const GameSettingList = () => {
  const userId = localStorage.getItem("userId");
  const [data, getData] = PagesIndex.useState([]);

  const getGameRatesList = async () => {
    const res = await PagesIndex.admin_services.GAME_SEETING_LIST_API(userId);
    getData(res?.data);
  };

  PagesIndex.useEffect(() => {
    getGameRatesList();
  }, []);

  return (
    <>
      <GameSettings
        data={data}
        path={"/admin/game/setting/add"}
        getGameRatesList={getGameRatesList}
        title="Game Setting "
      />
      {/* <Modal/> */}
    </>
  );
};

export default GameSettingList;
