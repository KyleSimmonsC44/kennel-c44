import React, { useContext, useRef, useEffect } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import {CustomerContext} from "../customers/CustomerProvider"
import "./Animal.css";

export const AnimalForm = (props) => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const location = useRef(null);
  const customer = useRef(null);
  const breed = useRef(null)

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getCustomers().then(getLocations);
  }, []);

  const constructNewAnimal = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value);
    const customerId = parseInt(customer.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addAnimal({
        name: name.current.value,
        breed: breed.current.value,
        locationId,
        customerId,
      }).then(() => props.history.push("/animals"));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Animal</h2>
        <div className="testForm">
            <div className="testDiv">

      <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Animal name: </label>
            <input
              type="text"
              id="animalName"
              ref={name}
              required
              autoFocus
              className="form-control"
              placeholder="Animal name"
              />
          </div>
        </fieldset>
      <fieldset>
          <div className="form-group">
            <label htmlFor="animalBreed">Animal Breed: </label>
            <input
              type="text"
              id="animalBreed"
              ref={breed}
              required
              autoFocus
              className="form-control"
              placeholder="Animal Breed"
              />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select
              defaultValue=""
              name="location"
              ref={location}
              id="animalLocation"
              className="form-control"
              >
              <option value="0">Select a location</option>
              {locations.map((e) => (
                  <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Belonging to: </label>
            <select
              defaultValue=""
              name="customer"
              ref={customer}
              id="customerAnimal"
              className="form-control"
              >
              <option value="0">Select a customer</option>
              {customers.map((e) => (
                  <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <div className="button">
          <button
            type="submit"
            onClick={(evt) => {
                evt.preventDefault(); // Prevent browser from submitting the form
                constructNewAnimal();
            }}
            className="btn btn-primary"
            >
            Save Animal
          </button>
            </div>
        </div>
      </div>
    </form>
  );
};