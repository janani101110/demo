import React, {useState} from 'react'
import './Shoppingpost.css'
import  { Axios } from 'axios';


//publishing post review

export const Shoppingpost = () => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [contact, setContact] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:5000/add',{
      componentname: name,
      description: description,
      price: price,
      contact: contact

    })
  }



  return ( 
    <div className='adpost'>
      <h1>Create your advertisement</h1>
      <div className='shopbody'>
      <form className='shoppingform '  method='post' action='/Shopping' onSubmit={handleSubmit}>
        <div className='restrict'>
        <p>This website or the company will not be responsible for the business users do using this website.
        Users are strictly adviced not to publish any advertisements that are not convenient for this website.
        Users must only add advertisements related to electronic and IoT topics. After selling your goods be kind enough to 
        remove the advertisements.</p>
        <input type='checkbox' name='agree' id='' className='agree'/> I agree
        </div>
        <table className='shoptable'>
          <tbody>
          <tr className='shoprow'>
            <th>Component Name</th>
            <td><input type='text' name='name' value={this.state.name} placeholder=' Enter the component name with correct spellings' onChange={(e) => {setName(e.target.value)}}/></td>
          </tr>
          <tr className='shoprow'>
            <th>Description</th>
            <td><textarea name='description' value={this.state.description} cols={50} rows={18} placeholder='  Write a description about the component you wish to sell.Include all the necessary details including any constraints' onChange={(e) => {setDescription(e.target.value)}} /></td>
          </tr>
          <tr className='shoprow'>
            <th>Price</th>
            <td><input type='text' name='price' value={this.state.price} placeholder=' Enter the price in Sri Lankan currency' onChange={(e) => {setPrice(e.target.value)}}/></td>
          </tr>
          <tr className='shoprow'>
            <th>Contact Number</th>
            <td><input type='text' name='contact' value={this.state.contact} placeholder=' Enter a contact number containing 10 digits' onChange={(e) => {setContact(e.target.value)}}/></td>
          </tr>
          <tr className='shoprow'>
            <th>Add a photo</th>
            <td><input type='file'  /></td>
          </tr>
          </tbody>
        </table>
        
        
        <button className='shopbutton' type='submit' >Add</button>
      </form>
      <div className='shopadver'>
        
              
                  <h3>your input</h3>
                  <p>Component Name:{this.state.name}</p>
                  <p>Description:{this.state.description}</p>
                  <p>Price:{this.state.price}</p>
                  <p>Contact:{this.state.contact}</p>
              
       
        
       
      </div>
      </div>

    
    </div>
    )
    
  


}
export default Shoppingpost
