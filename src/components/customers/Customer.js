import React from "react"
import "./Customer.css"

export const Customer = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address>
            <div>{customer.address}</div>
        </address>
    </section>
)
