import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import {Employee} from "./Employee"
import "./Employee.css"
import { AnimalContext } from "../animal/AnimalProvider"
import { Link } from "react-router-dom"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)
  
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getLocations()
        .then(getAnimals)
        .then(getEmployees)
    }, [])


    return (
        <div className="employees">
            <h1>Employees</h1>
            <div className="buttonDiv">
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            </div>
            <div className="test">
            <article className="employeeList">
                {employees.map(employee => {
                    const clinic = locations.find(l => l.id === employee.locationId)
                    const animal = animals.find(a => a.id === employee.animalId)
                    return <div className="employee">
                    <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    </div>
                    
                })}
            </article>
                </div>
        </div>
)
    }
