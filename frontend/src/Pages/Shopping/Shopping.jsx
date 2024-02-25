import React, { useEffect, useState } from 'react'
import './Shopping.css'
import { Link } from 'react-router-dom'
import { Search } from '../../Component/Search/Search'

export const Shopping = () => {

  const [shoppingData, setShoppingData] = useState([]);
  useEffect(()=>{
    //fetch data from the server when the component mounts
    fetchData();

  },[]);

  const fetchData= async()=>{
    try{
      const response = await fetch('api/getData');
      const data = await response.json();
      setShoppingData(data);
    } catch(error){
      console.error('error fetching data', error);
    }
  };



  return (
    <div className='shopmain'>
      <div className='shopup'>
      <Search/>
      </div>
      <div className='postbutton'>
        <Link to={'/Shoppingpost'}><button>Create Ad</button></Link>
      </div>
      <div className='shopadver'>
        <ul>
        {shoppingData.map((post)=>(
              <li key={post._id}>
                  <h3>your input</h3>
                  <p>Component Name:{this.state.name}</p>
                  <p>Description:{this.state.description}</p>
                  <p>Price:{this.state.price}</p>
                  <p>Contact:{this.state.contact}</p>
              </li>
        ))}
        
        </ul>
      </div>
</div>
  )
}
