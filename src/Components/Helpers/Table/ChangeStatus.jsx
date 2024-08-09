// import React, { useEffect, useState } from "react";

// const ChangeStatus = ({ rowData, apiRoute, checkboxStatus, req }) => {
//   const userId = localStorage.getItem("userId");


//   const [isChecked, setIsChecked] = useState(checkboxStatus);

//   useEffect(() => {
//     const checkbox = document.getElementById("employee-switch");
//     if (checkboxStatus) {
//       checkbox.checked = checkboxStatus;
//     }
//   }, [checkboxStatus]);

//   const updateStatus = (e) => {
//     setIsChecked(rowData);
//     apiRoute({ adminId: userId, ...req  , });
//     // alert("")
//   };

//   return (
//     <>
//       <div>
//         <label class="switch">
//           <input
//             type="checkbox"
//             id="employee-switch"
//             checked={isChecked}
//             onChange={(e) => updateStatus(e)}
//           />
//           <span class="slider round"></span>
//         </label>
//       </div>
//     </>
//   );
// };

// export default ChangeStatus;



import React, { useEffect, useState } from "react";

const ChangeStatus = ({ rowData, apiRoute, checkboxStatus, req }) => {
  const userId = localStorage.getItem("userId");
  
  const [isChecked, setIsChecked] = useState(checkboxStatus);

  useEffect(() => {
    setIsChecked(checkboxStatus);
  }, [checkboxStatus]);

  const updateStatus = async () => {
    setIsChecked(!isChecked);
    await apiRoute({ adminId: userId, ...req, isBlock: !isChecked });
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          id="employee-switch"
          checked={isChecked}
          onChange={updateStatus}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ChangeStatus;
