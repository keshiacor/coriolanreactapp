import React, { useState } from "react";

function FoodOrderForm() {
  const [nameInput, setName] = useState('');
  const [phoneInput,setPhone] = useState('');
  const [addressInput, setAddress] = useState('');
  const [orderInput, setOrder] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Order Successul! \n Your order was ${orderInput}. \n Please show your confirmation number for pickup.`);
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'> Name: </label>
      <input id='name' name="name" type="text" value={nameInput} onChange={(e) => setName(e.target.value)}/>
       <label htmlFor='phone'> Telephone: </label>
      <input id='phone' name="phone" type="text" value={phoneInput} onChange={(e) => setPhone(e.target.value)}/>
       <label htmlFor='address'> Address: </label>
      <input id='address' name="address" type="text" value={addressInput} onChange={(e) => setAddress(e.target.value)}/>
       <label htmlFor='order'> Order: </label>
      <input id='order' name="order" type="text" value={orderInput} onChange={(e) => setOrder(e.target.value)}/>
      <button id="formButton" type="submit">Submit
      </button>
    </form>
    </div>
    </>
  )
}

export default FoodOrderForm;