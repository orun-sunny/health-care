import React, { createContext, useState } from "react";
import useServices from "../hooks/useServices.js";
import useFirebase from "../hooks/useFirebase.js";
export const AuthContext = createContext();
const AuthProvider = (props) => {
  // hooks
  const allContext = useFirebase();
  const [services] = useServices();
  const [selectedService, setSelectedService] = useState([]);
  function addToCart(key) {
    const isHave = selectedService.find((service) => service.key === key);
    if (isHave) {
      alert("Already Added!");
    } else {
      const matchingService = services.find((service) => service.key === key);
      const newSelectedService = [matchingService, ...selectedService];
      setSelectedService(newSelectedService);
    }
  }

  function removeItem(key) {
    const removed = selectedService.filter((service) => service.key !== key);
    setSelectedService(removed);
  }

  const data = {
    contexts: allContext,
    addToCart,
    selectedService,
    removeItem,
    setSelectedService,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
