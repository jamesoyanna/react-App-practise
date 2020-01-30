import React from 'react';

const Joke = (props) => {
    return (
      <div>
        <h3 style={{ display: props.punchline ? "block" : "none" }}>
          Question:{props.question}
        </h3>
        <h3>Answer:{props.punchline} </h3>
      </div>
    );
}

export default Joke;
