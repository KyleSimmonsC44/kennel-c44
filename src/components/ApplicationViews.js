import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./locations/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { CustomerList } from "./customers/CustomerList";
import { CustomerProvider } from "./customers/CustomerProvider";
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
          <Route
            exact
            path="/animals"
            render={(props) => <AnimalList {...props} />}
            />

          <Route
            exact
            path="/animals/create"
            render={(props) => <AnimalForm {...props} />}
            />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
            <AnimalProvider>

          <Route
            exact
            path="/employees"
            render={(props) => <EmployeeList {...props} />}
            />

          <Route
            exact
            path="/employees/create"
            render={(props) => <EmployeeForm {...props} />}
            />

            </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};
