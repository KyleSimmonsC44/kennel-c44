import React, { useState } from "react"
import "./Location.css"

export const LocationDetail = (props) => {
    console.log(props)
    return (
        <section className="location">
            <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
                <p>Currently caring for {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }</p>
            <address className="location__address">{props.location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                <p>We currently have {`${props.location.state.chosenLocation.employees.length} ${props.location.state.chosenLocation.employees.length === 1 ? "animal lover and trainer:" : "animal lovers and trainers:"}`}</p>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
            </div>
        </section>
    )
}