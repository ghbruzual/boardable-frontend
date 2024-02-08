import * as React from "react";
import SignUpForm from "./SignUpForm";

const signUpPage = ({ onSignUp }) => {
  const handleSignUp = async (userData) => {
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Si la respuesta es exitosa, ejecutar la función onSignUp proporcionada
      onSignUp();
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
      // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default signUpPage;
