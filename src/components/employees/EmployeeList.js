import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import {Employee} from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
  
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getLocations()
        .then(getEmployees)
    }, [])


    return (
        console.log(locations),
        <div className="employees">
            {employees.map(emp => {
        const clinic = locations.find(l => l.id === emp.locationId)

        return <Employee key={emp.id}
                    location={clinic}
                    employee={emp} />
        })}
             
        
        </div>
    )
}
