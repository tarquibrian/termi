import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {

  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  

  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    const resultado = users.find(user => user.name == email)
    console.log(resultado)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Validar que no haya campos vacios
    // if(email.trim() === '' || password.trim() === '') {
    //     mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
    // }

    // Pasarlo al action
    // iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario back-color">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
