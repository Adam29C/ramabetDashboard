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
  const [deviceType, setDeviceType] = useState("desktop");
  const [visibleColumns, setVisibleColumns] = useState(columns);

  useEffect(() => {
    const handleResize = () => {
      let newVisibleColumns;
      if (window.innerWidth <= 320) {
        newVisibleColumns = columns.slice(0, 1);
        setDeviceType("mobile");
      } else if (window.innerWidth <= 425) {
        newVisibleColumns = columns.slice(0, 2);
        setDeviceType("mobile");
      } else if (window.innerWidth <= 768) {
        newVisibleColumns = columns.slice(0, 4);
        setDeviceType("tablet");
      } else {
        newVisibleColumns = columns;
        setDeviceType("desktop");
      }
      setVisibleColumns(newVisibleColumns);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  let color = localStorage.getItem("theme_Color");

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
    ...visibleColumns,
  ];

  const ExpandedComponent = ({ data }) => {
    const hiddenColumns = columns.filter(
      (col) => !visibleColumns.includes(col)
    );

    return (
      <div className="short-datatable-main">
        {hiddenColumns.map((col, index) => {
          const key = col.selector ? col.selector(data) : data[col.name];
          return (
            <p className="short-datatable-data" key={index}>
              <strong>{col.name}:</strong> {key}
            </p>
          );
        })}
      </div>
    );
  };

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
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noDataComponent={
            isLoading ? (
              <div className="user-loading-main">
                {/* <Loader lodersize={25} /> */}
              </div>
            ) : (
              "There are no records to display"
            )
          }
          expandableRows={deviceType === "mobile" || deviceType === "tablet"}
          expandableRowsComponent={ExpandedComponent}
          responsive
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
