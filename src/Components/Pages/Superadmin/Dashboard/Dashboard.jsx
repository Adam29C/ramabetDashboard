import React from "react";
import Dashboard from "../../../Helpers/Dashboard";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import PagesIndex from "../../PagesIndex";

const Dashboard_Component = () => {
const userId = localStorage.getItem("userId")
const [data,setData]= PagesIndex.useState()

  const getDashboardCount = async()=>{
    const res = await PagesIndex.admin_services.GET_DASHBOARD_COUNT_API(userId)
    setData(res?.data)
  }

  PagesIndex.useEffect(()=>{
    getDashboardCount()
  },[])
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-1">
                <div className="card-body custom-card-body">
                  <h3 className="card-title text-white">All Users</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">{data?.allUsers}</h2>
                    {/* <p className="text-white mb-0">Jan - March 2019</p> */}
                  </div>
                  <span className="float-right display-5 opacity-5">
                  <i className="fa fa-users" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-2">
                <div className="card-body  custom-card-body">
                  <h3 className="card-title text-white">Active Users</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">{data?.activeUsers}</h2>
                    {/* <p className="text-white mb-0">Jan - March 2019</p> */}
                  </div>
                  <span className="float-right display-5 opacity-5">
                    {/* <i className="fa fa-money" /> */}
                    <i className="fa fa-users" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-3">
                <div className="card-body  custom-card-body">
                  <h3 className="card-title text-white">Login Users</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">{data?.loginUsers}</h2>
                    {/* <p className="text-white mb-0">Jan - March 2019</p> */}
                  </div>
                  <span className="float-right display-5 opacity-5">
                    <i className="fa fa-users" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-4">
                <div className="card-body  custom-card-body">
                  <h3 className="card-title text-white">
                    Banned Users
                  </h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">{data?.bannedUsers}</h2>
                    {/* <p className="text-white mb-0">Jan - March 2019</p> */}
                  </div>
                  <span className="float-right display-5 opacity-5">
                    {/* <i className="fa fa-heart" /> */}
                    <i class="fa fa-ban" aria-hidden="true"></i>

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Component;
