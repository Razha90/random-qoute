function ShareOnTumblr(tumblrText, caption) {
    // Buat tautan Twitter dengan teks yang telah dienkripsi
    const encodedPostText = encodeURIComponent(tumblrText);
    const captioEncoded = encodeURIComponent(caption);
    const twitterURL = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp,razhajs&caption=${captioEncoded}&content=${encodedPostText}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  
    // Buka jendela atau tab browser baru dengan tautan Twitter
    window.open(twitterURL, '_blank');
  }

  export default ShareOnTumblr;