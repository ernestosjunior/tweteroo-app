import logo from "../../assets/logo.png";
import styles from "./index.module.css";

export const SignUp = () => {
  return (
    <div class={styles.paginaInicial}>
      <h1>tweteroo</h1>
      <div class={styles.form}>
        <img src={logo} alt="Tweteroo" />
        <input type="text" placeholder="digite seu username" id="username" />
        <input
          type="text"
          placeholder="e cole a url da sua linda foto"
          id="picture"
        />
      </div>
      <button onclick="signUp()">enviar</button>
    </div>
  );
};
