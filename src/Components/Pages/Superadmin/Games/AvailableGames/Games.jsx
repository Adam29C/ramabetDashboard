import React from 'react'
import GameProvider from '../../../../Helpers/Provider/GameProvider'
import PagesIndex from '../../../PagesIndex'



const Games = () => {
  const userId = localStorage.getItem("userId")

const [data,getData]=PagesIndex.useState([])
  const getGameProviderList = async()=>{
    const res = await PagesIndex.admin_services.GAME_PROVIDER_GET_LIST_API(userId)
    console.log(res,"check get data in response")
    getData(res?.data?.details)
  }

  PagesIndex.useEffect(()=>{
getGameProviderList()
  },[])
  


  

  return (
    <div>
    
      
        <GameProvider data={data} path={"/admin/game/add"} getGameProviderList={getGameProviderList} title="Game Provider"/>
   
    </div>
  )
}

export default Games