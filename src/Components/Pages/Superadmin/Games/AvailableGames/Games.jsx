import React from 'react'
import GameProvider from '../../../../Helpers/Provider/GameProvider'
import PagesIndex from '../../../PagesIndex'



const Games = () => {
  const userId = localStorage.getItem("userId")
  // const [loading, setLoading] = PagesIndex.useState(false);
const [data,getData]=PagesIndex.useState([])
  const getGameProviderList = async()=>{
    const res = await PagesIndex.admin_services.GAME_PROVIDER_GET_LIST_API(userId)
    console.log(res,"check get data in response")
    getData(res?.data?.details)
  }

  PagesIndex.useEffect(()=>{
getGameProviderList()
  },[])
  
  // const data = [
  //   {
  //     id: 1,
  //     name: "ttt",
  //     mobileNumber: "000000000000",
  //   },
  //   {
  //     id: 2,
  //     name: "tsssstt",
  //     mobileNumber: "000000000000",
  //   },
  //   {
  //     id: 3,
  //     name: "tttttt",
  //     mobileNumber: "000000000000",
  //   },
  //   {
  //     id: 4,
  //     name: "Edit",
  //     mobileNumber: "000000000000",
  //   },
  // ];

  

  return (
    <div>
    
      
        <GameProvider data={data} path={"/admin/game-provider-add"} getGameProviderList={getGameProviderList}/>
   
    </div>
  )
}

export default Games