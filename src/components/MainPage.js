import React, { useState } from "react";
import API from "../utils/API";

function MainContent() {
    const [developerState, setDeveloperState] = useState({
        name: "Joe",
        number: "(111)222-3333",
        DOB: "01/24/1992",
        email: "joe@gmail.com"
    });

    return (
        <div class="table">
            <div>
                Name: {developerState.name}
            </div>
            <div>
                Number: {developerState.number}
            </div>
            <div>
                DOB: {developerState.DOB}
            </div>
            <div>
                Email: {developerState.email}
            </div>
        </div>
    )
    
      };

export default MainContent