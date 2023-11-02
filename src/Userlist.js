import React from "react";

const Userlist = ({ user, index }) => {
  return (
    <div key={index} className="user__card">
      <img src={user.picture.large} alt="User" />
      <div className="user__info">
        <p>
          Name:{" "}
          <b>
            {user.name.first} {user.name.last}
          </b>
        </p>
        <p>Gender: {user.gender}</p>
        <p>Age: {user.dob.age}</p>
        <p>Nationality: {user.nat}</p>
      </div>
    </div>
  );
};

export default Userlist;
