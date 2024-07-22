import React from 'react'
import PagesIndex from '../../../PagesIndex'
import GameRatesProvider from '../../../../Helpers/GameProvider/GameRates/GameRatesProvider'

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
    <GameRatesProvider data={data} path={"/admin/game/rate"} getGameRatesList={getGameRatesList} title="Game Rates"/>
    {/* <Modal/> */}
    </>

  )
}

export default GameRates