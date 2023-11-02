import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Search from "./Search";
import Userlist from "./Userlist";

function App() {
  const [userData, setUserData] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [filterCondition, setFilterCondition] = useState({
    ageRange: "",
    nationality: "",
    gender: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  // *** Fetch users data from API ***
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // *** Filter the user data based on the specified condition and search term ***
  useEffect(() => {
    const filtered = userData.filter((user) => {
      const name = `${user.name.first} ${user.name.last}`;
      return (
        (filterCondition.ageRange === "" ||
          (user.dob.age >= Number(filterCondition.ageRange.split("-")[0]) &&
            user.dob.age <= Number(filterCondition.ageRange.split("-")[1]))) &&
        (filterCondition.nationality === "" ||
          user.nat === filterCondition.nationality) &&
        (filterCondition.gender === "" ||
          user.gender === filterCondition.gender) &&
        (searchTerm === "" ||
          name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredUsers(filtered);
  }, [userData, filterCondition, searchTerm]);

  // *** Function to handle filter changes ***
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCondition((prevCondition) => ({
      ...prevCondition,
      [name]: value,
    }));
  };

  // *** Funtion to undo filters applied ***
  const handleReset = () => {
    setFilterCondition({
      ageRange: "",
      nationality: "",
      gender: "",
    });
    setSearchTerm("");
  };

  return (
    <div className="App">
      <h1>User Data</h1>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Filters
        filteredUsers={filteredUsers}
        filterCondition={filterCondition}
        handleFilterChange={handleFilterChange}
        handleReset={handleReset}
      />

      <div className="user__list">
        {filteredUsers.length > 0 ? (
          <div className="user__card__container">
            {filteredUsers.map((user, index) => (
              <Userlist user={user} index={index} />
            ))}
          </div>
        ) : (
          <div className="not__found">
            <p>No matching users found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
