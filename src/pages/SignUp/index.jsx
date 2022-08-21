import logo from "../../assets/logo.png";

export const SignUp = () => {
  return (
    <div className="initialPage">
      <h1>tweteroo</h1>
      <div className="form">
        <img src={logo} alt="Tweteroo" />
        <input type="text" placeholder="digite seu username" id="username" />
        <input
          type="text"
          placeholder="e cole a url da sua linda foto"
          id="picture"
        />
      </div>
      <button onClick={() => null}>enviar</button>
    </div>
  );
};
