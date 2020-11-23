import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import {Animal} from "./Animal"

export const AnimalList = () => {
    // This state changes when `getLocations()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("AnimalList: Location state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
        {
            animals.map(ani => <Animal key={ani.id} animal={ani} />)
        }
        </div>
    )
}