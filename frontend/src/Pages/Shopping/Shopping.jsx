import React, { useEffect, useState } from 'react'
import './Shopping.css'
import { Link } from 'react-router-dom'
import { Search } from '../../Component/Search/Search'
import {Shopcard} from './Shopcard'


export const Shopping = () => {
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
  },[]);//this is the fetch function to display all the shopcards


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
          <Link style={{textDecoration: 'none'}} to={`/productdescription/${shoppost._id}`}>
            <Shopcard key={shoppost._id} shoppost={shoppost} /> {/*here data is mapped to shopcard*/ }
          </Link>
        ))}
      </div>
      
</div>
  )
}

export default Shopping;