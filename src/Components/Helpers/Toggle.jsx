import React, { useEffect, useState } from 'react'

const Toggle = ({check}) => {
    const [isChecked, setIsChecked] = useState(check);


    useEffect(() => {
        const checkbox = document.getElementById('employee-switch');
        if (checkbox) {
            checkbox.checked = check;
        }
    }, [check]); 
   
  return (
 <>
    <div>
    <label class="switch">
        <input type="checkbox" id="employee-switch"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}/>
        <span class="slider round"></span>
    </label>
   
     </div>
     </>
  )
}

export default Toggle