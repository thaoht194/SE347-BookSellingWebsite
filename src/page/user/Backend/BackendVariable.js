import { createContext, useContext } from "react";

const defaultBackendVariableValue = {
  user: {
    id: "",
    email: "",
    pass: "",
    username: "",
    fullname: "",
    gender: "",
    birthday: "",
    phone: "",
  },
  isLogged: false,
  items: [],
};

const backendVariableContext = createContext(defaultBackendVariableValue);

export const BackendVariableProvider = backendVariableContext.Provider;
export const BackendVariableConsumer = backendVariableContext.Consumer;

export const useBackendVariable = () => useContext(backendVariableContext);
