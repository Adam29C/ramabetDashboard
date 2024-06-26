import React, { useState } from "react";
import { useMyContext } from "../../Hooks/Context/CreateSidebarContext";
import { admin_Sidebar } from "./Sidebar_data";
import { Link } from "react-router-dom";

const SIdebar = () => {
  const [TabsToggle, setTabsToggle] = useState(false);


  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="nk-sidebar">
      <div
        className="slimScrollDiv"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "auto",
          height: "100%",
        }}
      >
        <div
          className="nk-nav-scroll active"
          style={{ overflow: "hidden", width: "auto", height: "100%" }}
        >
          <ul className="metismenu in" id="menu">
            {admin_Sidebar &&
              admin_Sidebar.map((item, index) => {
                const isActive = expandedItem === index;
                return (
                  <div key={`${item.headerTitle}_${index}`}>
                    <li className="nav-label">{item.headerTitle}</li>
                    <li
                      className={`${isActive ? "active" : ""}`}
                      key={`${item.headerTitle}_${index}`}
                    >
                      <Link
                      to={item.route}
                        className={
                          item.NestedElement.length > 0 ? "has-arrow" : ""
                        }
                        aria-expanded={isActive}
                        onClick={() => handleToggle(index)}
                      >
                        <i className={`${item.Icon} menu-icon me-2`} />
                        <span className="nav-text">{item.title}</span>
                      </Link>
                      {item.NestedElement.length > 0 && (
                        <ul
                          aria-expanded={isActive}
                          className={`collapse ${isActive ? "in" : ""}`}
                        >
                          {item.NestedElement.map((nested) => (
                            <li
                              key={nested.id}
                              className={isActive ? "active" : ""}
                            >
                              <Link
                                to={nested.route}
                                className={isActive ? "active" : ""}
                              >
                                {nested.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </div>
                );
              })}

            {/* <li className="mega-menu mega-menu-sm">
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon-globe-alt menu-icon" />
                <span className="nav-text">Layouts</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="./layout-blank.html">Blank</a>
                </li>
                <li>
                  <a href="./layout-one-column.html">One Column</a>
                </li>
                <li>
                  <a href="./layout-two-column.html">Two column</a>
                </li>
                <li>
                  <a href="./layout-compact-nav.html">Compact Nav</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Apps</li> */}
          </ul>
        </div>
        <div
          className="slimScrollBar"
          style={{
            background: "transparent",
            width: 5,
            position: "absolute",
            top: 1,
            opacity: "0.4",
            display: "none",
            borderRadius: 7,
            zIndex: 99,
            right: 1,
            height: "3396.5px",
          }}
        />
        <div
          className="slimScrollRail"
          style={{
            width: 5,
            height: "100%",
            position: "absolute",
            top: 0,
            display: "none",
            borderRadius: 7,
            background: "rgb(51, 51, 51)",
            opacity: "0.2",
            zIndex: 90,
            right: 1,
          }}
        />
      </div>
    </div>
  );
};

export default SIdebar;
