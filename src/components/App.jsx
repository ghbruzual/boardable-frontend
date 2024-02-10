import * as React from "react";
import SignUpPage from "./SignUpPage";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:5500/")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <SignUpPage />
    </div>
  );
}

export default App;
