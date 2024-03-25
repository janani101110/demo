import React from "react";
import Pagination from "@mui/material/Pagination";
import "./ProjectPgNavi.css";
//import { useState } from "react";
//import Stack from "@mui/material/Stack";

function ProjectPgNavi({ onPageChange }) {
  const handleChange = (e, page) => {
    onPageChange(e, page);
  };

  return (
    <div className="pagiantion">
     

    
      <Pagination count={10} color="primary" onChange={handleChange} />
      
    </div>
  );
}

export default ProjectPgNavi;