import React from 'react';
import Joke from "../src/components/Joke.js"; 
import "./App.css";

const App = () => {
  return (
    <div>
      <Joke question="What is the website of Nscdc ?" punchline="The website is www,ncsdc.org" />
      <Joke question="What is PH" punchline="Its is negative log to base 10" />
      <Joke />
      <Joke question="What is a noun" punchline="A nounis a name of any person"/>
      <Joke question="Who is the mother of Jesus ?" punchline="Mary Magdalene"/>
    </div>
  );
}

export default App;
