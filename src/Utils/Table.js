import React, { useEffect, useState, useRef, useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import {StateContext} from '../StateProvider';
import "./Table.css";


function Table() {

  const [stateVal, useStateVal] = useContext(StateContext);

  const [tData, setData] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://gorest.co.in/public-api/users")
        .then((response) => response.json())
        .then((data) =>
          setData(data.data.map((d) => ({ select: false, ...d })))
        );
    }
    fetchMovies();
  }, []);


  const HandleClick = (head) =>{
    useStateVal(head);
  }
  // console.log(stateVal);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>
              {/* <Checkbox
                onChange={(event) => {
                  let checked = event.target.checked;
                  setData(
                    tData.map((d) => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              /> */}
            </th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((head, index) => (
            <tr
              key={index}
              className={head.select == true ? "active" : ""}
              // onClick={() => {
              //   if (head.select == false) {
              //     setData(
              //       tData.map((d) => {
              //         if (head.id === d.id) {
              //           head.select = true;
              //         }
              //         return d;
              //       })
              //     );
              //   } else {
              //     setData(
              //       tData.map((d) => {
              //         if (head.id === d.id) {
              //           head.select = false;
              //         }
              //         return d;
              //       })
              //     );
              //   }
              // }}
              onClick={() => {
                // HandleClick(head.id);
                HandleClick(head);
                setData(
                  tData.map((d) => {
                    if (!head.select && head.id === d.id) {
                      head.select = true;
                    } else {
                      if (head.id === d.id) {
                        head.select = false;
                      }
                    }
                    return d;
                  })
                );
              }}
            >
              <td>
                <Checkbox
                  onChange={(event) => {
                    let checked = event.target.checked;
                    setData(
                      tData.map((d) => {
                        if (head.id === d.id) {
                          head.select = checked;
                          // console.log(head.select);
                        }
                        return d;
                      })
                    );
                  }}
                  checked={head.select}
                />
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
