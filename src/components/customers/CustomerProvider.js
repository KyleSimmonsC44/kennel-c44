import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `employees` state, the `addEmployee` function,
        and the `getEmployee` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customers, addCustomer, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}