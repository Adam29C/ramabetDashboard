import React, { useState } from "react";
import { admin_Sidebar } from "./Sidebar_data";
import { Link } from "react-router-dom";
import PagesIndex from "../../Pages/PagesIndex";
import { Get_permissions } from "../../Redux/slice/CommonSlice";
import { filterNestedItems, filterSidebarItems } from "./FilteredPermissions";

const SIdebar = () => {
  let userId = localStorage.getItem("userId");
  let role = localStorage.getItem("role");
  const { getPermissions } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );
  const dispatch = PagesIndex.useDispatch();
  //all states

  const [expandedItem, setExpandedItem] = useState(null);

  const getPermissionApi = () => {
    dispatch(Get_permissions(userId));
  };

  PagesIndex.useEffect(() => {
    getPermissionApi();
  }, []);

  const handleToggle = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };
  const filteredSidebar = filterSidebarItems(
    admin_Sidebar,
    role,
    getPermissions
  );

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
          style={{ overflowY: "auto", width: "auto", height: "100%" }}
        >
          <ul className="metismenu in" id="menu">
            {filteredSidebar &&
              filteredSidebar.map((item, index) => {
                const isActive = expandedItem === index;
                return (
                  <div key={`${item.headerTitle}_${index}`}>
                    {item.headerTitle && (
                      <li className="nav-label">{item.headerTitle}</li>
                    )}

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
                          {filterNestedItems(
                            item.NestedElement,
                            role,
                            getPermissions
                          ).map((nested) => (
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
          </ul>
        </div>

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
