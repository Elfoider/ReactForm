import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { validateEmail } from "../../../utils/Validations";

import "./RegisterForm.scss";

export default function RegisterFrom(props) {
  const { setSelectedForm } = props;

  const [formData, setFormData] = useState(defaultFormData());

  const [ShowPassword, setShowPassword] = useState(false);

  const [FormError, setFormError] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    setFormError({});
    let errors = {};
    let formOk = true;

    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOk = false;
    }
    if (formData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }
    if (!formData.username) {
      errors.username = true;
      formOk = false;
    }

    setFormError(errors);
  };

  const handlerShowPassword = () => {
    setShowPassword(!ShowPassword);
  };

  return (
    <div className="register-form">
      <h1>
        Empieza a escuchar tu musica favorita con una cuenta gratis de Elfotify
      </h1>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo Electronico"
            icon="mail outline"
            error={FormError.email}
          />
          {FormError.email && (
            <span className="error-text">
              Por favor, Ingrese un correo electronico valido
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type={ShowPassword ? "text" : "password"}
            name="password"
            placeholder="Ingrese Contraseña"
            icon={
              ShowPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={handlerShowPassword}
                />
              ) : (
                <Icon name="eye" link onClick={handlerShowPassword} />
              )
            }
            error={FormError.password}
          />
          {FormError.password && (
            <span className="error-text">Ingrese una contraseña valida</span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Como deberiamos llamarte?"
            icon="user outline"
            error={FormError.username}
          />
          {FormError.username && (
            <span className="error-text">
              Ingrese un nombre de usuario valido
            </span>
          )}
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>

      <div className="register-form__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          ¿Ya tienes Cuenta?{" "}
          <span onClick={() => setSelectedForm("login")}>Inicia Sesion</span>
        </p>
      </div>
    </div>
  );
}

function defaultFormData() {
  return {
    email: "",
    password: "",
    username: "",
  };
}
