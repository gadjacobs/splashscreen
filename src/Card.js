import React from "react";
import "tachyons";

const Card = ({name, description, imageUrl}) => {
  return (
    <div>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <img
            src={imageUrl}
            alt="card"
            class="br-100 h3 w3 dib"
            title="Photo of a kitty staring at you"
          />
          <h1 class="f4">{name}</h1>
          <hr class="mw3 bb bw1 b--black-10" />
        </div>
        <p class="lh-copy measure center f6 black-70">
          {description}
        </p>
      </article>
    </div>
  );
};

export default Card;
