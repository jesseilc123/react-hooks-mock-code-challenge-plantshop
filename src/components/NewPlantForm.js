import React, { useState } from "react";

function NewPlantForm({ onPlantFormSubmit }) {
  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState("")

  function handleForm(event) {
    event.preventDefault()
    const newPlant = {
      key: plantName,
      name: plantName,
      image: plantImage,
      price: plantPrice
    } 

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(newItem => onPlantFormSubmit(newItem))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
