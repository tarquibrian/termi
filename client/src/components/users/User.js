import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../layout/Navbar";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div>
      <Navbar />
      <div className="container py-4 contenedor">
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {user.name}</li>
          <li className="list-group-item">user name: {user.username}</li>
          <li className="list-group-item">password: {user.address}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">phone: {user.phone}</li>
        </ul>
        <Link className="btn btn-primary mt-3" to="/home">
          back to Home
        </Link>
      </div>
    </div>
  );
};

export default User;
