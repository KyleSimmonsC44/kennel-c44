import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])


    return (
        <div className="animals">
            <h1>Animals</h1>
        <div className="buttonDiv">
        <button onClick={() => props.history.push("/animals/create")}>
            Add Animal
        </button>
        </div>
        <div className="test">
            <article className="employeeList">

            {animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)
                
                return <Animal key={animal.id}
                location={clinic}
                customer={owner}
                animal={animal} />
            })}
            </article>
            </div>
        </div>
    )
}
