import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList ({ data }) {
  return (
    data.map(employee => (
      <EmployeeCard>
        key = {employee.id}
        image={employee.image}
        name={employee.name}
        dept={employee.department}
        email={employee.email}
        phone={employee.phone}
      </EmployeeCard>
    ))
  )
}

export default EmployeeCardList