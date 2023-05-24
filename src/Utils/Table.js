import React, { useEffect, useState, useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { StateContext } from "../StateProvider";
import "./Table.css";

function Table() {
  const { useStateVal } = useContext(StateContext);
  const [tData, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  
  useEffect(() => {
    async function fetchMovies() {
      await fetch("https://gorest.co.in/public-api/users")
        .then((response) => response.json())
        .then((result) => {
          setData(result.data);
        });
    }
    fetchMovies();
  }, []);

  const HandleClick = (head, index) => {
    setSelectedIndex(index);
    useStateVal(head);
  };

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((head, index) => (
            <tr
              key={index}
              className={selectedIndex === index ? "active" : ""}
              onClick={() => {
                HandleClick(head, index);
              }}>
              <td>
                <Checkbox checked={selectedIndex === index} />
              </td>
              <td>{head.name}</td>
              <td>{head.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
