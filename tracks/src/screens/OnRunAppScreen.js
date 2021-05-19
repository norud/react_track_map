import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const OnRunAppScreen = () => {
  const { autoSigninIfHaveToken } = useContext(AuthContext);

  //to make sure our app just make one call to the function
  useEffect(() => {
    autoSigninIfHaveToken();
  }, []);
  return null;
};

export default OnRunAppScreen;
