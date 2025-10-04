import { useEffect, useState } from "react";
import addClass from "../Function/addClass";
import remove from "../Function/removeClass";
import "./borderBox.css";
import ShareOnTwitter from "../Function/twitter";
import twitterimg from "../img/twitter.svg";
import ShareOnTumblr from "../Function/tumblr";
import refreshimg from "../img/refresh.png";

const BorderBox = ({ quotes, randomQuote, refresh }) => {
  const [set, setS] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  useEffect(() => {
    if (set) {
      setTimeout(() => {
        randomQuote();
      }, 500);
      animateQoute();
    }
  }, [set, randomQuote]);

  useEffect(() => {
    if (refreshed) {
      setTimeout(() => {
        refresh();
      }, 500);
      animateQoute();
    }
  }, [refreshed, refresh]);

const animateQoute = () => {
  addClass("quote-animate", "quote-border");
  addClass("button-animate", "button-box");
  setTimeout(() => {
    remove("quote-animate", "quote-border");
    remove("button-animate", "button-box");
  }, 500);
};


  const babi = () => {
    setS(true);
  };

  const ajg = () => {
   setRefreshed(true);
  }

  const twitter = () => {
    ShareOnTwitter(`"${quotes.quote}" - ${quotes.author} -`);
  }

  const tumblr = () => {
    ShareOnTumblr(quotes.quote,quotes.author);
  }
  return (
    <div className="wrap-box no-select">
      <div>
        <div className="quote-border">
          <div>" {quotes.quote}</div>
          <div className="author-box">- {quotes.author} -</div>
        </div>
      </div>
      <div className="buttons-box">
        <div className="item-box button-func">
        <button onClick={ajg} title="Refresh"><img alt="refresh" src={refreshimg} id="refresh-box"/></button>
        </div>
        <div className="item-box">
        <button title="Play Random" onClick={babi} className="button-box">
          ▶
        </button>
        </div>
        <div className="item-box button-func">
          <button onClick={twitter} title="Twitter"><img alt="twitter" src={twitterimg} id="twitter-box"/></button>
          <button onClick={tumblr} title="Tumblr"><img alt="refresh" src="/tumblr.svg" id="tumblr-box"/></button>
        
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
