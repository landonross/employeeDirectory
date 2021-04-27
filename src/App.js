import React, { useState } from 'react';
import './App.css';
import './index.css';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmployeeCardList from './components/EmployeeCardList';
import Navigation from './components/Navigation.js';
import Layout from './components/Layout.js';
import employees from "./data/API.json";

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setData ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        // sort array ascending or descending by first name
        if (!sorted) {
            setData(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setData(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortByDept() {
        // sort array ascending or descending by dept name
        if (!sorted) {
            setData(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSorted(true);
        } else {
            setData(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
            setSorted(false);
        }
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            {/* <Navbar /> */}
            <Layout>
                <h1 className="title">Employee Directory</h1>
                <p className="title2">Search for an employee or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeCardList data={filteredEmployees}/>
                <Footer />
            </Layout>
        </div>
    )
}

export default App;