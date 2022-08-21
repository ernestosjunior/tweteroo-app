import { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts";

export const Tweets = () => {
  const [tweet, setTweet] = useState("");
  const { newTweet, tweets } = useAuth();

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return (
    <div className="tweetsPage">
      <h1>tweteroo</h1>
      <div className="form">
        <img src={logo} alt="Tweteroo" />
        <div className="row">
          <input
            value={tweet}
            type="text"
            placeholder="o que está na sua cabeça?"
            id="tweet"
            onChange={(e) => setTweet(e.target.value)}
          />
          <ion-icon
            name="paper-plane-outline"
            onClick={() => newTweet({ tweet })}
          ></ion-icon>
        </div>
      </div>
      <div className="tweets">
        {!!tweets.length &&
          tweets.map((tweet) => (
            <div class="tweet">
              <div class="avatar">{/* <img src={tweet.avatar} /> */}</div>
              <div class="content">
                <div class="user">@{tweet.username}</div>
                <div class="body">{escapeHtml(tweet.tweet)}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
