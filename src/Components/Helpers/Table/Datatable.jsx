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
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDeviceType('mobile');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  const ExpandedComponent = ({ data, columns }) => (
    <div>
      {console.log(columns)}
      {/* {columns?.map(column => (
        <p key={column.selector}>
          <strong>{column.name}:</strong> {data[column.selector]}
        </p>
      ))} */}
       {Object.keys(data).map(key => (
        <p key={key}><strong>{key}:</strong> {data[key]}</p>
      ))}
    </div>
  );
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
          expandableRows={deviceType === 'mobile'}
          expandableRowsComponent={ExpandedComponent}
          responsive
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;