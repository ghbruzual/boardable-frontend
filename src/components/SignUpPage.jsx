import * as React from "react";
import SignUpForm from "./SignUpForm";

const SignUpPage = ({ onSignUp }) => {
  const [error, setError] = React.useState(null);

  const handleSignUp = async (userData) => {
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        onSignUp();
      } else {
        const errorMessage = await response.text();
        console.error("Error al registrar usuario:", errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError("Error al realizar la solicitud");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>Error al registrar usuario: {error}</p>}
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
