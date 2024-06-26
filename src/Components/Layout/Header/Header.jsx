import React from "react";
import { useMyContext } from "../../Hooks/Context/CreateSidebarContext";
import ToggleDark from "./ToggleDark";

const Header = () => {
  const { toggleSidebar } = useMyContext();

  return (
    <div className="header">
      <div className="header-content clearfix">
        <div className="nav-control">
          <div className="hamburger">
            <span className="toggle-icon">
              <i className="icon-menu" onClick={() => toggleSidebar()} />
            </span>
          </div>
        </div>

        <div className="header-right">
          <ul className="clearfix">
            <li className="icons dropdown">
              <ToggleDark />
            </li>
            <li className="icons dropdown">
              <div
                className="user-img c-pointer position-relative"
                data-toggle="dropdown"
              >
                <span className="activity active" />
                <img
                  src="/assets/images/user/1.png"
                  height={40}
                  width={40}
                  alt=""
                />
              </div>
              <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                <div className="dropdown-content-body">
                  <ul>
                    <li>
                      <a href="app-profile.html">
                        <i className="icon-user" /> <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void()">
                        <i className="icon-envelope-open" /> <span>Inbox</span>{" "}
                        <div className="badge gradient-3 badge-pill gradient-1">
                          3
                        </div>
                      </a>
                    </li>
                    <hr className="my-2" />
                    <li>
                      <a href="page-lock.html">
                        <i className="icon-lock" /> <span>Lock Screen</span>
                      </a>
                    </li>
                    <li>
                      <a href="page-login.html">
                        <i className="icon-key" /> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
