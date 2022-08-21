import classnames from "classnames";
import logo from "../../assets/logo.png";

export const Tweets = () => {
  return (
    <div className="tweetsPage">
      <h1>tweteroo</h1>
      <div className="form">
        <img src={logo} alt="Tweteroo" />
        <div className="row">
          <input
            type="text"
            placeholder="o que está na sua cabeça?"
            id="tweet"
          />
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
      <div className="tweets"></div>
    </div>
  );
};
