import React from "react";

import { Button } from "semantic-ui-react";

import "./AuthOption.scss";

export default function AuthOption(props) {
  const { setSelectedForm } = props;

  return (
    <div className="auth-options">
      <h2>Inicia Sesion para continuar</h2>
      <Button className="Login" onClick={() => setSelectedForm("login")}>
        Iniciar Sesion
      </Button>
    </div>
  );
}
