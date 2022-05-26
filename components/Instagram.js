import React, { useEffect } from 'react';

const Instagram = () => {

  useEffect(() => {
    (function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"))
  }, []);

  return (
    <section>
      <div className="container " data-aos="fade-left">
        <div className="embedsocial-hashtag" data-ref="c7d71d18bc1a875e7d3c681868323afb96430e77"></div>
      </div>
    </section>
  );
}

export default Instagram;
