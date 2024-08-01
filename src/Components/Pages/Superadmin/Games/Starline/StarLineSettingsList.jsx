import React from 'react'
import GameSettings from "../../../../Helpers/GameProvider/GameSetting/GameSettings"

const StarLineSettingsList = () => {


  return (
    <>
      <GameSettings
      path={"/admin/game/starline/addSetting"}
      foreditpath={"/admin/game/starline/updateSetting"}
       title="Starline Game Settings"
        gameType= "StarLine"
      />
      {/* <Modal/> */}
    </>
  );
};

export default StarLineSettingsList;
