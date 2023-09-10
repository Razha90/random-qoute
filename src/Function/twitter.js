function ShareOnTwitter(tweetText) {
    // Buat tautan Twitter dengan teks yang telah dienkripsi
    const encodedTweetText = encodeURIComponent(tweetText);
    const twitterURL = `https://twitter.com/intent/tweet?hashtags=quotes,razhajs&related=indonesia&text=${encodedTweetText}`;
  
    // Buka jendela atau tab browser baru dengan tautan Twitter
    window.open(twitterURL, '_blank');
  }

  export default ShareOnTwitter;