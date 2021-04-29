import React, { Component } from "react";
import API from "../utils/API";
import Footer from './Footer';
import EmployeeCard from './EmployeeCard';
import Navigation from './Navigation.js';

class MainContent extends Component {
    state = {
      // stores the specific information we are needing for the database into their respective categories
        search: "",
        employees: [],
        error: ""
    };

    componentDidMount() {
      // Calls the random user database API and pulls the requested information from the data for the page
        API.search()
            .then(res => {
                console.log(res)
                this.setState({
                    employees: res.data.results.map((e, i) => ({
                        firstName: e.name.first,
                        lastName: e.name.last,
                        picture: e.picture.large,
                        email: e.email,
                        phone: e.phone,
                        city: e.location.city,
                        key: i,
                    })),
                });
            })
            .catch(err => console.log(err));
    }

    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
          // merge data together, then check to see if employee exists
          let values = Object.values(employee).join('').toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        // Update the employee list with the filtered value
        this.setState({ employees: filteredList });
      };
    

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        console.log('Handle ', this.state.search);
      };
    //search function that will be called back later upon the onclick of the submit button
      handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Button Clicked', this.state.search, e);
        this.searchEmployee(this.state.search);
      };
  render() {
    return (
        <div className="container">
          <div className="row">
              <h2>Employee Directory</h2>
              <Navigation
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </div>

          <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <EmployeeCard
                  //All the information that we need stored into variables that will be based into the employee card where they will be called later to organize the data accordingly
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    city={item.city}
                    key={item.key}
                  />
                ))}
              </table>
          </div>
          <Footer />
        </div>
    );
  }
}

export default MainContent