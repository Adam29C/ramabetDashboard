import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// import Loader from "./Loader";
import { Tooltip, OverlayTrigger, Form } from "react-bootstrap";

const Data_Table = ({ columns, data, tableStyle, isLoading, showFilter }) => {
  const [getClass, setgetClass] = useState(
    document.body.getAttribute("data-theme-version")
  );

  let color = localStorage.getItem("theme_Color");


  const adminStyles = {
    rows: {
      background: "#27394F",
      // color: "#fff",
    },
    headCells: {
      style: {
        // background: "#4E3896",
        color: "#fffff",
        backgroundColor: "#27394F",
        fontSize: "15px",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        fontWeight: "500",
        backgroundColor: "#27394F",
        color: "black",
      },
    },
  };

  const userStyles = {
    // rows: {
    //   style: {
    //     // minHeight: "72px",
    //   },
    // },
    // headCells: {
    //   style: {
    //     background: "#4E3896",
    //     color: "#fff",
    //   },
    // },
    // cells: {
    //   background: "#4E3896",
    //   color: "#fff",
    // },
  };

  const TooltipCell = ({ value }) => (
    <OverlayTrigger placement="top" overlay={<Tooltip>{value}</Tooltip>}>
      <div className="truncated-cell">{value}</div>
    </OverlayTrigger>
  );

  const columns1 = [
    {
      name: "Sr. No",
      selector: (row, index) => index + 1,
      width: "70px",
    },
    ...columns,
  ];

  return (
    <>
      <DataTableExtensions
        columns={columns1}
        data={data}
        print={false}
        export={false}
        filter={showFilter}
      >
        <DataTable
        //   noHeader

          defaultSortAsc={false}
          pagination
          highlightOnHover
        //   customStyles={color === "dark" ? adminStyles : ""}
          noDataComponent={
            isLoading ? (
              <div className="user-loading-main">
                {/* <Loader lodersize={25} /> */}
              </div>
            ) : (
              "There are no records to display"
            )
          }
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
