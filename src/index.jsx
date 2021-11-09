import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const fakeUser = {
  username: "focault235",
  password: "example123"
};

function App() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

function LoginCard() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passInput, setPassInput] = useState("");

    {/* --------------Estado botón-------------- */}
  const [isLoading, setIsLoading] = useState(false);
    {/* --------------Estado botón-------------- */}

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setUsernameInput(e.target.value)
    if(usernameInput==="username"){
      setIsLoading(true)
    }else{
      setIsLoading(false)
    }
  };

  const handleInputPass = (e) => {
    setPassInput(e.target.value)
  };

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(()=>{
      if(usernameInput===fakeUser.username &&  passInput===fakeUser.password){
        setLoginSuccess(true)
      }
      else if(usernameInput==="username"){
        setLoginSuccess(false)
      }else{
        setLoginSuccess(falase)
      }
      setIsLoading;(false)
    },2000)
  };

  const logout = () => {
    alert("boton presionado")
    setLoginSuccess(false)
    
    
    // Acá debes escribir los pasos necesarios para poder
    //realizar el logout de la cuenta.
  };

  return (
    <div className="flex-container centered">
      <div className="card ">
        <form className="form">
          <div className="inputContainer">
            {/* -----------------------------input USERNAME----------------------------- */}
            <input
              autoComplete="off"
              onChange={handleInput}
              className={loginError ? "error-input" : ""}
              placeholder="username"
              name="username"
              type="text"
              value={usernameInput}
            />
          </div>
          <span className={`${loginSuccess ? "" : "invisible" } "error" `} > Verifica los datos</span>
          {/* -----------------------------input PASSWORD----------------------------- */}
          <div className="inputContainer">
            <input
              placeholder="password"
              className={loginError ? "error-input" : ""}
              name="password"
              type="password"
              onChange={handleInputPass}
              value={passInput}
            />
          </div>
          {/* -----------------------------Boton----------------------------- */}

          {/* -------Operador Ternario /inicio------- */}
          {!loginSuccess ? (
            <button className="btn" onClick={login}>
              {isLoading ? "Username & PassWord validando" : "Login"}
            </button>
          ) : (
            <button className="btn" onClick={logout}>
              Cerrar sesión
            </button>
          )}
          {/* -------Operador Ternario /fin------- */}
          {loginError && (
            <span className="error-message">
              Alguno de los datos ingresados es incorrecto.
            </span>
          )}
          {loginSuccess && (
            <span className="success-message">Login Exitoso!</span>
          )}
        </form>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
