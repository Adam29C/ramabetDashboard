import React, { useState, useEffect } from "react";

const ToggleDark = () => {
  const [changeDark, setChangeDark] = useState("light");

  useEffect(() => {
    if (changeDark === "dark") {
      document.body.setAttribute("data-theme-version", "dark");
     
    } else {
      document.body.setAttribute("data-theme-version", "light");
    
    }
  }, [changeDark]);

  const handleToggle = () => {
    setChangeDark(changeDark === "light" ? "dark" : "light");
  };

  return (
    <div>
      <input
        type="checkbox"
        class="checkbox"
        id="checkbox"
        onChange={() => handleToggle("dark")}
      />
      <label for="checkbox" class="checkbox-label">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
        <span class="ball"></span>
      </label>
    </div>
  );
};

export default ToggleDark;
