import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // get user from redux toolkit slice

  useEffect(() => {
    axios("https://4437y2tox5.execute-api.us-east-1.amazonaws.com/").then(
      console.log
    );
    axios("https://4437y2tox5.execute-api.us-east-1.amazonaws.com/two").then(
      console.log
    );
  }, []);

  return (
    // basic react router dom routing for pages
    <div></div>
  );
}

export default App;
