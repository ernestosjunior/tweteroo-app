import { useState } from "react";
import { faker } from "@faker-js/faker";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts";

export const SignUp = () => {
  const [{ username, avatar }, setFields] = useState({
    username: "",
    avatar: "",
  });
  const { signUp } = useAuth();

  const handleFields = (field, value) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="initialPage">
      <h1>tweteroo</h1>
      <div className="form">
        <img src={logo} alt="Tweteroo" />
        <input
          value={username}
          type="text"
          placeholder="digite seu username"
          id="username"
          onChange={(e) => handleFields("username", e.target.value)}
        />
        <input
          value={avatar}
          type="text"
          placeholder="e cole a url da sua linda foto"
          id="picture"
          onChange={(e) => handleFields("avatar", e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          handleFields(
            "username",
            `@${faker.internet.userName().toLowerCase()}`
          )
        }
      >
        gerar username aleatório
      </button>
      <button onClick={() => signUp({ username, avatar })}>enviar</button>
    </div>
  );
};
