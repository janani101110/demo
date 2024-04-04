import React, { useState } from 'react';
import './Search.css';
import searchIcon from '../Assets/search.jpeg';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [prompt,setPrompt]=useState("")
  //console.log(prompt)
  const navigate=useNavigate()

  return (
    <div className="search">
      <input
        type="text"
        className="searchBar"
        placeholder="Search for more.."
        onChange={(e) => setPrompt(e.target.value)}
      />
      <img src={searchIcon} className="searchIcon" onClick={()=>navigate(prompt?"?search="+prompt:navigate("/sensors"))} alt="Search Icon" />

    </div>
  );
};

