import React from "react";
import { Link } from "react-router-dom";
import { get_year_and_month_only } from "../../Utils/Common_Date";
const Main_Containt = ({ add_button ,col_size, route, children }) => {

  return (
    <div className="content-body">
      <div className="container-fluid mt-3">
        <div className="row">
          <div className={`card col-${col_size} `}>
            <div className="card-body">
              {add_button && (
                <div className="d-flex mx-auto justify-content-end">
                  <Link to={route} type="button" className="btn btn-primary">
                    Add
                  </Link>
          
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_Containt;
