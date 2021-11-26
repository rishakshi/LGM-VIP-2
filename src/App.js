import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Users } from "./MyComponents/Users";
import React, { useState } from 'react';

function App() {
  console.log("App.js1");
  const [users, setUsers] = useState([]);
  const getUsers = async (e) => {
    console.log("App.js2");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  }
  return (
    <>
      <Header getUsers={getUsers} />
      <Users users={users}/>
      <Footer />
    </>
  );
}

export default App;
