import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Productdescription = () => {
  const [shoppost, setShoppost] = useState(null);
  const { id } = useParams(); // Assuming you're using React Router for routing

  useEffect(() => {
    fetch(`http://localhost:5000/getpost/${id}`, { // Using template literal to include the ID in the URL
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "shoppost");
      setShoppost(data); // Assuming your API returns a single post object
    })
    .catch((error) => {
      console.error('Error fetching shoppost:', error);
      // Handle error, e.g., set error state or show error message
    });
  }, [id]); // Depend on 'id' so that the effect re-runs when 'id' changes

  return (
    <div className='pdescrip'>
      <h2>Product Description</h2>
      {shoppost ? (
        <div className='pdetails'>
          <img src={shoppost.imageUrl} alt=''/>
          <p>{shoppost.name}</p>
          <p>{shoppost.description}</p>
          <p>{shoppost.price}</p>
          <p>{shoppost.contact}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Productdescription;
