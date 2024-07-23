import React from "react";
import Dashboard from "../../../Helpers/Dashboard";
import Main_Containt from "../../../Layout/Main/Main_Containt";

const Dashboard_Component = () => {
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-1">
                <div className="card-body">
                  <h3 className="card-title text-white">Products Sold</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">4565</h2>
                    <p className="text-white mb-0">Jan - March 2019</p>
                  </div>
                  <span className="float-right display-5 opacity-5">
                    <i className="fa fa-shopping-cart" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-2">
                <div className="card-body">
                  <h3 className="card-title text-white">Net Profit</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">$ 8541</h2>
                    <p className="text-white mb-0">Jan - March 2019</p>
                  </div>
                  <span className="float-right display-5 opacity-5">
                    <i className="fa fa-money" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-3">
                <div className="card-body">
                  <h3 className="card-title text-white">New Customers</h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">4565</h2>
                    <p className="text-white mb-0">Jan - March 2019</p>
                  </div>
                  <span className="float-right display-5 opacity-5">
                    <i className="fa fa-users" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card gradient-4">
                <div className="card-body">
                  <h3 className="card-title text-white">
                    Customer Satisfaction
                  </h3>
                  <div className="d-inline-block">
                    <h2 className="text-white">99%</h2>
                    <p className="text-white mb-0">Jan - March 2019</p>
                  </div>
                  <span className="float-right display-5 opacity-5">
                    <i className="fa fa-heart" />
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
