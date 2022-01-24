import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { validateEmail } from "../../../utils/Validations";

import "./LoginForm.scss";

export default function LoginForm(props) {
  const { setSelectedForm } = props;

  const [ShowPassword, setShowPassword] = useState(false);

  const [LoginData, setLoginData] = useState(defaultValueForm());

  const [FormError, setFormError] = useState({});

  const [IsLoading, setIsLoading] = useState(false);

  const [UserActive, setUserActive] = useState(true);

  const [User, setUser] = useState(null);

  const onSubmit = () => {
    setFormError({});
    let errors = {},
      formOk = true;

    if (!validateEmail(LoginData.email)) {
      errors.email = true;
      formOk = false;
    }
    if (LoginData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }

    setFormError(errors);

    console.log(LoginData);
  };

  const ShowPasswordHandler = () => {
    setShowPassword(!ShowPassword);
  };

  const onChange = (e) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-form">
      {UserActive && (
        <>
          <h1>ANALITICS</h1>
          <Form onChange={onChange} onSubmit={onSubmit}>
            <Form.Field>
              <Input
                type="text"
                name="email"
                placeholder="Ingrese Correo..."
                icon="mail"
                error={FormError.email}
              />
              {FormError.email && (
                <span className="error-text">Correo no valido.</span>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                type={ShowPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                icon={
                  ShowPassword ? (
                    <Icon
                      name="eye slash outline"
                      link
                      onClick={ShowPasswordHandler}
                    />
                  ) : (
                    <Icon name="eye" link onClick={ShowPasswordHandler} />
                  )
                }
                error={FormError.password}
              />
              {FormError.password && (
                <span className="error-text">Contraseña no valida</span>
              )}
            </Form.Field>
            <Button type="submit">iniciar sesion</Button>
          </Form>

          <div className="login-form__options">
            <p onClick={() => setSelectedForm(null)}>Volver</p>
          </div>
        </>
      )}
    </div>
  );
}

function defaultValueForm() {
  return {
    email: "",
    password: "",
  };
}
