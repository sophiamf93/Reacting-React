import React, { useState } from "react";
import Greeter from "./Greeter";

const App = () => {
  const [username, setUser] = useState("");
  const [loaded, setloaded] = useState(false);
  const handleButtonClick = () => {
    setloaded(!loaded);
  };

  if (loaded) {
    return (
      <>
        <Greeter phrase="Hello there, " name="Sophia" />
        <Greeter phrase="Whats up, " name="Doc" />
        <Greeter phrase="Greetings, " name="Human" />
        <input value={username} onChange={(e) => setUser(e.target.value)} />
        <p>You are logging in as: {username}</p>
      </>
    );
  } else {
    return (
      <>
        <input value="load page" onChange={(e) => setloaded(true)} />
        <p>Website Loading...: {loaded} </p>
        <button onClick={handleButtonClick}>toggle</button>
      </>
    );
  }
};

export default App;
