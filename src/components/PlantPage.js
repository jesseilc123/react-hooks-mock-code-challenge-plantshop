import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [copy, setCopy] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data) || setCopy(data))
  }, [])

  const filterItem = plants.filter((plant) => {
    if(search === "") return true

    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function onPlantFormSubmit(newItem){
    const newArray = [...plants, newItem]
    return setPlants(newArray)

  }

  return (
    <main>
      <NewPlantForm onPlantFormSubmit={onPlantFormSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filterItem}/>
    </main>
  );
}

export default PlantPage;
