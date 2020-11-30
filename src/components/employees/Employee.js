import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location, animal }) => (
    <div className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <div className="employee__animals">Animals Cared For: {animal.name}</div>
    </div>
)