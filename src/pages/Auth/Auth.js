import React, { useState } from "react";
import AuthOptions from "../../components/Auth/AuthOption";
import Loginform from "../../components/Auth/LoginForm";
import RegisterFrom from "../../components/Auth/RegisterForm";
import "./Auth.scss";
import AuthIMG from "../../assets/img/bg.jpg";

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handlerForm = () => {
    switch (selectedForm) {
      case "login":
        return <Loginform setSelectedForm={setSelectedForm} />;
      case "register":
        return <RegisterFrom setSelectedForm={setSelectedForm} />;

      default:
        return <AuthOptions setSelectedForm={setSelectedForm} />;
    }
  };

  return (
    <div className="auth" style={{ backgroundImage: `url(${AuthIMG})` }}>
      <div className="auth__dark" />
      <div className="auth__box">{handlerForm()}</div>
    </div>
  );
}
