import * as React from "react";
import SignUpPage from "./SignUpPage";

function App() {
  const [message, setMessage] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:5500/")
      .then((res) => res)
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <SignUpPage />
    </div>
  );
}

export default App;
