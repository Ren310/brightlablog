import React from 'react';
import { dummyData } from "../../dummyData";

const NavFilter = ({changeMonth, changeYear}) => {
  return (
    <div>
      {dummyData.map((item, id) =>
          <button key = {id} onClick={() => changeYear(item.year)}>{item.year}</button>)}

      {dummyData.map((item, id) =>
          <button key = {id} onClick={() => changeMonth(item.month)}>{item.month}</button>)}
    </div>
  )
}

export default NavFilter;