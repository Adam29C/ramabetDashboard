import PagesIndex from '../../../PagesIndex'
import GameRatesProvider from '../../../../Helpers/GameProvider/GameRates/GameRatesProvider'

const StarLineGameRate = () => {
    
  const userId = localStorage.getItem("userId")

    const [data,getData]=PagesIndex.useState([])
  const getGameRatesList = async()=>{
    let data = {
        userId:userId,
        gameType:"StarLine"
    }
    const res = await PagesIndex.admin_services.GAME_RATES_GET_LIST_API(data)
    console.log(res)
    getData(res?.data)
  }

  PagesIndex.useEffect(()=>{
    getGameRatesList()
  },[])

  return (
    <>
    <GameRatesProvider data={data} path={"/admin/games/starlinegamerates"} getGameRatesList={getGameRatesList} title="StarLine Game Rates"/>
  
    </>

  )
}

export default StarLineGameRate