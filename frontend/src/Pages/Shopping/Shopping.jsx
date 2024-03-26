import React, { useEffect, useState } from 'react'
import './Shopping.css'
import { Link } from 'react-router-dom'
import { Search } from '../../Component/Search/Search'
import Shopcard from './Shopcard'

// eslint-disable-next-line no-empty-pattern
export const Shopping = ({}) => {
  const [shopposts,setShopposts]=useState([])
  


  useEffect(()=>{
    fetch("http://localhost:5000/getpost",{
      method:"GET"
    })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data, "shoppost");
        setShopposts(data.data);
      });
  },[]);


  return (
    <div className='shopmain'>
      
      <div className='shopup'>
      <div className='shopsearch'>
      <Search/>
      </div>
      
      
      <div className='postbutton'>
        <Link to={'/Shoppingpost'}><button>Create Ad</button></Link>
      </div>
      </div>
      <div className='postsection'>
        {shopposts.map(shoppost => (
          <Link  to={`/productdescription/${shoppost._id}`}>
            <Shopcard key={shoppost._id} shoppost={shoppost} />
          </Link>
        ))}
      </div>
      
</div>
  )
}
