import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { StateContext } from "../StateProvider";

function Profile() {
  const [stateVal, useStateVal] = useContext(StateContext);
  const [profile, setProfile] = useState([]);

  // useEffect(() => {
    // async function fetchProfile() {
    //   const result = await fetch(
    //     `https://gorest.co.in/public-api/users/${stateVal}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => setProfile(data.data));
    // }
    // fetchProfile();
  // }, [stateVal]);

  const DisplayPicture = ({ name }) => {
    if (typeof name == "undefined") {
      name = "";
      return name;
    } else {
      let dp = name.match(/\b\w/g).join("").slice(0, 2).toUpperCase();
      return <div className="disply__name">{dp}</div>;
    }
  };

  return (
    <div className="profile">
      {stateVal.length == 0 ? (
        "No Results!"
      ) : (
        <>
          <DisplayPicture name={stateVal.name} />
          <p className="profile__name">{stateVal.name}</p>
          <p className="profile__email"><span>Email:</span> <span>{stateVal.email}</span></p>
          <p className="profile__gender"><span>Gander:</span> <span>{stateVal.gender}</span></p>
          <p className="profile__status"><span>Status:</span> <span>{stateVal.status}</span></p>
        </>
      )}
    </div>
  );
}

export default Profile;
