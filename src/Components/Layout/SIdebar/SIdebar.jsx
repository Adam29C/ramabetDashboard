import React, { useState } from "react";
import { useMyContext } from "../../Hooks/Context/CreateSidebarContext";
import { admin_Sidebar } from "./Sidebar_data";
import { Link } from "react-router-dom";
import PagesIndex from "../../Pages/PagesIndex";
import { Get_permissions } from "../../Redux/slice/CommonSlice";

const SIdebar = () => {
  let userId = localStorage.getItem("userId");
  let role = localStorage.getItem("role");
  const { getPermissions } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );
  const dispatch = PagesIndex.useDispatch();
  console.log(getPermissions, "getPermissions");
  //all states
  const [TabsToggle, setTabsToggle] = useState(false);
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
  const filteredSidebar = admin_Sidebar.filter((data) => {
    if (role === "ADMIN") {
      return true;
    }
    if (data.title === "Dashboard" && !getPermissions?.permission?.isDashboard)
      return false;

    if (data.title === "Users" && !getPermissions?.permission?.isUsers)
      return false;
    if (data.title === "Available Games" && !getPermissions?.permission?.isGames)
      return false;
    if (data.title === "Starline" && !getPermissions?.permission?.isStarline)
      return false;
    if (data.title === "Jackpot" && !getPermissions?.permission?.isAndarBahar)
      return false;

    if (data.title === "Penal Info" && role !== "ADMIN") return false;
    if (data.title === "Employee" && role !== "ADMIN") return false;



    if (data.title === "Cutting Group" && !getPermissions?.permission?.isCuttingGroup) return false;
    if (data.title === "Bookie Corner" && !getPermissions?.permission?.isBookieCorner) return false;
    if (data.title === "Wallet" && !getPermissions?.permission?.isWallet) return false;
    if (data.title === "Credit Request (UPI)" && !getPermissions?.permission?.isCreditRequest) return false;
    if (data.title === "Approved Debit Requests" && !getPermissions?.permission?.isApprovedDebitPage) return false;
    if (data.title === "Pending Debit Requests" && !getPermissions?.permission?.isPendingDebitRequest) return false;
    if (data.title === "Declined Request" && !getPermissions?.permission?.isDeclinedRequest) return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports) return false;
    if (data.title === "Notification" && !getPermissions?.permission?.isNotification) return false;
    if (data.title === "News" && !getPermissions?.permission?.isNews) return false;
    if (data.title === "Deleted User" && !getPermissions?.permission?.isDeletedUsers) return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports) return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports) return false;
    if (
      data.title === "App Settings" &&
      !getPermissions?.permission?.isAppSettings
    )
      return false;
    if (data.title === "Masters" && !getPermissions?.permission?.isMasters)
      return false;
    return true;
  });

  console.log(filteredSidebar, "admin sidebar");
  console.log(role, "role");
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
                          {item.NestedElement.filter((nested) => {
                                if (role === "ADMIN") {
                                  return true;
                                }
                            if (
                              nested.title === "Game Provider" &&
                              !getPermissions?.permission?.isGamesProvider
                            )
                              return false;
                            if (
                              nested.title === "Games Setting" &&
                              !getPermissions?.permission?.isGamesSetting
                            )
                              return false;
                            if (
                              nested.title === "Game Rates" &&
                              !getPermissions?.permission?.isGamesRates
                            )
                              return false;
                            if (
                              nested.title === "Game Result" &&
                              !getPermissions?.permission?.isGamesResult
                            )
                              return false;
                            if (
                              nested.title === "Revert Result Payment" &&
                              !getPermissions?.permission?.isGamesRevert
                            )
                              return false;
                            if (
                              nested.title === "Refund User Points" &&
                              !getPermissions?.permission?.isGamesRefund
                            )
                              return false;
                            if (
                              nested.title === "Star Game Provider" &&
                              !getPermissions?.permission?.isStarlineProvider
                            )
                              return false;
                            if (
                              nested.title === "Star Games Setting" &&
                              !getPermissions?.permission?.isStarlineSetting
                            )
                              return false;
                            if (
                              nested.title === "Star Game Rates" &&
                              !getPermissions?.permission?.isStarlineRates
                            )
                              return false;
                            if (
                              nested.title === "Star Game Result" &&
                              !getPermissions?.permission?.isStarlineResult
                            )
                              return false;
                            if (
                              nested.title === "Star Revert Result Payment" &&
                              !getPermissions?.permission?.isStarlineRevert
                            )
                              return false;
                            if (
                              nested.title === "Refund User Points" &&
                              !getPermissions?.permission?.isStarlineRefund
                            )
                              return false;
                            if (
                              nested.title === "Jackpot Game Provider" &&
                              !getPermissions?.permission?.isAndarBaharProvider
                            )
                              return false;
                            if (
                              nested.title === "Jackpot Games Setting" &&
                              !getPermissions?.permission?.isAndarBaharSetting
                            )
                              return false;
                            if (
                              nested.title === "Jackpot Game Rates" &&
                              !getPermissions?.permission?.isAndarBaharRates
                            )
                              return false;
                            if (
                              nested.title === "Jackpot Game Result" &&
                              !getPermissions?.permission?.isAndarBaharResult
                            )
                              return false;
                            if (
                              nested.title ===
                                "Jackpot Revert Result Payment" &&
                              !getPermissions?.permission?.isAndarBaharRevert
                            )
                              return false;
                            if (
                              nested.title === "Refund User Points" &&
                              !getPermissions?.permission?.isAndarBaharRefund
                            )
                              return false;
                            if (
                              nested.title === "OC Cutting Group" &&
                              !getPermissions?.permission?.isOCCuttingGroup
                            )
                              return false;
                            if (
                              nested.title === "Final OC Cutting Group" &&
                              !getPermissions?.permission?.isFinalCuttingGroup
                            )
                              return false;
                              if (
                                nested.title === "Manual Request" &&
                                !getPermissions?.permission?.isFundRequest
                              )
                                return false;
                                if (
                                  nested.title === "Export Debit Report" &&
                                  !getPermissions?.permission?.isExportDebitReport
                                )
                                  return false;
                                  if (
                                    nested.title === "View Wallet" &&
                                    !getPermissions?.permission?.isViewWallet
                                  )
                                    return false;
                                    if (
                                      nested.title === "Requests On/Off" &&
                                      !getPermissions?.permission?.isRequestON/OFF
                                    )
                                      return false;
                       

                            return true;
                          }).map((nested) => (
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
        {/* <div
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
        /> */}
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
