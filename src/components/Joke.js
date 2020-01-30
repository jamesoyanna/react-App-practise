import React from 'react';

const Joke = (props) => {
    return (
      <div>
        <h3 style={{ display: !props.punchline && "none" }}>
          Question:{props.question}
        </h3>
        <h3 style={{ color: !props.punchline && "orange" }}>
             Answer:{props.punchline}{" "}
        </h3>
      </div>
    );
}

export default Joke;
