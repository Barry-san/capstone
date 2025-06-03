import { createContext, useContext, useState } from "react";
type User = {
  id: string;
  fullname: string;
  token: string;
};

const userContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(userContext);
};
