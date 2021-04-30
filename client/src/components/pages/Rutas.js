import React from "react";
import Navbar from "../layout/Navbar";

const Rutas = () => {
  return (
    <>
    <Navbar />
      <div className="container p-5 contenedor">
        <div className="ml-2 mr-2">
          <h1>GESTION DE RUTAS</h1>
          <form>
            <div className="form-row">
              <div className="col">
                <label htmlFor="exampleFormControlSelect1">DE:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>La Paz</option>
                  <option>Cochabamba</option>
                  <option>Santa Cruz</option>
                  <option>Oruro</option>
                  <option>Sucre</option>
                  <option>Pando</option>
                  <option>Tarija</option>
                  <option>Potosi</option>
                  <option>Beni</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="exampleFormControlSelect1">A:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>La Paz</option>
                  <option>Cochabamba</option>
                  <option>Santa Cruz</option>
                  <option>Oruro</option>
                  <option>Sucre</option>
                  <option>Pando</option>
                  <option>Tarija</option>
                  <option>Potosi</option>
                  <option>Beni</option>
                </select>
              </div>
              <div className="col ml-5">
                <label>Tipo de Buss:</label>
                <fieldset className="form-group">
                  <div className="row">
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios1"
                        >
                          Buss Normal
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios2"
                        >
                          Buss Cama
                        </label>
                      </div>
                      <div className="form-check disabled">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios3"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios3"
                        >
                          Buss Leito
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <div className="row pl-2 pr-5">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Capacidad
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        min="1"
                        max="25"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div className="row pl-2 pr-5">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Fecha
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row pl-2 pr-5">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Hora
                      </span>
                    </div>
                    <input
                      type="time"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-secondary">
                  Nuevo
                </button>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4">
                <div className="row pl-2 pr-5">
                  <div className="input-group mb-5">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Precio</span>
                      <span className="input-group-text">Bs</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-primary">
                  AGREGAR RUTA
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rutas;
