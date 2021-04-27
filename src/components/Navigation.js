import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept }) { // The two props coming down from the Navigation Component
    return (
        <div>
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} 
                        type="button"
                        id="buttons" 
                        className="btn btn-dark">
                        Name</button>
                <button onClick={handleSortByDept} 
                        type="button"
                        id="buttons"
                        className="btn btn-dark">
                        Dept</button>
            </div>
            <form>
                <input
                    value={searchTerm} // value attribute here keeps what you type in sync
                    onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    id="searchBox"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Navigation;