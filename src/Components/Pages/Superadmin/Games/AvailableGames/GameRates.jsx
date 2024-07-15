import React from 'react'
import GameProvider from '../../../../Helpers/Provider/GameProvider'
import PagesIndex from '../../../PagesIndex'
import GameRatesProvider from '../../../../Helpers/Provider/GameRatesProvider'

const GameRates = () => {
    
  const userId = localStorage.getItem("userId")

    const [data,getData]=PagesIndex.useState([])
  const getGameRatesList = async()=>{
    const res = await PagesIndex.admin_services.GAME_RATES_GET_LIST_API(userId)
    getData(res?.data)
  }

  PagesIndex.useEffect(()=>{
    getGameRatesList()
  },[])
  
  return (
    <>
    <GameRatesProvider data={data} path={"/admin/game/rates/add"} getGameRatesList={getGameRatesList} title="Game Rates"/>
    {/* <Modal/> */}
    </>

  )
}

export default GameRates