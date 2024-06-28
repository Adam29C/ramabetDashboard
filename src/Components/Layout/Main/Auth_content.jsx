import React, { useState } from "react";
import PagesIndex from "../../Pages/PagesIndex";
const Main_Containt = ({ add_button ,col_size, route, children }) => {



  return (
    <div className="login-form-bg " id="dynamic-background">
    <div className="container">
      <div className="row justify-content-center  align-items-center" style={{height : '100vh'}}>
          <div className={`card ${col_size} custom-card`}>
            <div className="card-body">
              {add_button && (
                <div className="d-flex mx-auto justify-content-end">
                  <PagesIndex.Link to={route} type="button" className="btn btn-primary">
                    add
                  </PagesIndex.Link>
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
