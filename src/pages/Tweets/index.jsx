import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts";
import { toast } from "react-hot-toast";
import { loadTweets } from "../../services/api";

export const Tweets = () => {
  const [tweet, setTweet] = useState("");
  const { newTweet, tweets, setTweets } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tweets.length) loadTweets(toast, setTweets);
  }, []);

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function handleLogout() {
    window.localStorage.removeItem("user");
    navigate("/sign-up");
  }

  return (
    <div className="tweetsPage">
      <button class="logoutIcon" onClick={() => handleLogout()}>
        sair
      </button>
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
          tweets.map(({ user, tweet }) => (
            <div class="tweet">
              <div class="avatar">
                <img src={user.avatar} />
              </div>
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
