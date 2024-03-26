import React, { useState } from 'react';
import './Shoppingpost.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { imageDb } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {v4} from "uuid";

export const Shoppingpost = () => {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');
  //const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [,setPhoto]=useState(null);
  const[image,setImage] = useState('');
  //const[imageUrl,setImageUrl]=useState('');

  const [input, setInput]=useState({
    name:'',
    description:'',
    price:'',
    contact:'',
    imageUrl:'',

  })
  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPhotoURL(URL.createObjectURL(file));
  }
 
  //post upload
  function handleChange(event){
    const {name,value}=event.target;

    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }

  


  function handleClick(event) {
    event.preventDefault();
  
    // Assuming 'input' and 'image' are defined elsewhere in your code
    const imgRef = ref(imageDb, `shoppingimages/${v4()}`);
    
    // Upload the image to Firebase Storage
    uploadBytes(imgRef, image)
      .then(() => {
        // Once the image is uploaded, get its download URL
        return getDownloadURL(imgRef);
      })
      .then((downloadURL) => {
        // Log the download URL in the console
        console.log('Download URL:', downloadURL);
        
        // Create a new shop post object
        const newShoppost = {
          name: input.name,
          description: input.description,
          price: input.price,
          contact: input.contact,
          imageUrl: downloadURL // Add the image URL to the shop post object
        };
        
        // Send the shop post data to your backend
        return axios.post('http://localhost:5000/create', newShoppost);
      })
      .then((response) => {
        // Handle successful response from the backend if needed
        console.log('Shop post created:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error creating shop post:', error);
      });
  }
  


  return (
    <div className="adpost">
      <h1>Create your advertisement</h1>
      <div className="shopbody">
        <form className="shoppingform" method='post' >
          <div className="restrict">
            <p>
              This website or the company will not be responsible for the
              business users do using this website. Users are strictly advised
              not to publish any advertisements that are not convenient for this
              website. Users must only add advertisements related to electronic
              and IoT topics. After selling your goods be kind enough to remove
              the advertisements.
            </p>
            <input type="checkbox" name="agree" id="" className="agree" required /> I
            agree
          </div>
          <table className="shoptable">
            <tbody>
              <tr className="shoprow">
                <th>Component Name</th>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => {setName(e.target.value); handleChange(e)}}
                    placeholder=" Enter the component name with correct spellings"
                  />
                </td>
              </tr>
              <tr className="shoprow">
                <th>Description</th>
                <td>
                  <textarea
                    name="description"
                    value={input.description}
                    onChange={(e) => {setDescription(e.target.value);handleChange(e)}}
                    cols={50}
                    rows={18}
                    placeholder="  Write a description about the component you wish to sell.Include all the necessary details including any constraints"
                  />
                </td>
              </tr>
              <tr className="shoprow">
                <th>Price</th>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={input.price}
                    onChange={(e) => {setPrice(e.target.value); handleChange(e)}}
                    placeholder=" Enter the price in Sri Lankan currency"
                  />
                </td>
              </tr>
              <tr className="shoprow">
                <th>Contact Number</th>
                <td>
                  <input
                    type="text"
                    name="contact"
                    value={input.contact}
                    onChange={(e) => {setContact(e.target.value); handleChange(e)}}
                    placeholder=" Enter a contact number containing 10 digits"
                  />
                </td>
              </tr>
              <tr className="shoprow">
                <th>Add a photo</th>
                <td>
                  <input type="file" onChange={(e) =>{setImage(e.target.files[0]);handlePhotoChange(e)}}/>
                {/*handlePhotoChange is for the preview and this function will be called only here. then handleSubmit is on the form tag
                it is for the whole form submission. These two won't conflict each other. we can call two functions in same from. one on the
                form tag and other one inside the form*/ }    
                </td>
              </tr>
            </tbody>
          </table>
             
          <button className="shopbutton" type="submit" onClick={handleClick}>
            Add
          </button>
          
        </form>
        
{/*-----------------preview setting------------------------------*/ }


        <table className="shoptable2">
          <h3>See your Post</h3>
          <tbody>
            <tr>
              
              <td className="shopphoto">
                {photoURL ? <img src={photoURL} alt="Selected" /> : ""}
              </td>
            </tr>
            <tr>
              
              <td className="comname">{name}</td>
            </tr>
            <tr>
              
              <td className="comdesc">{description}</td>
            </tr>
            <tr>
              <td className="comprice">{price}</td>
            </tr>
            <tr>
              <td className="concontact">{contact}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shoppingpost;
