import { createContext, useContext, useState } from "react";
import {supabase} from "../supabase/supabase.config"

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw new Error("An error has occurred during authentication");
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  async function signout(){
    const {error} = await supabase.auth.signOut()
    if (error) throw new Error("An error occurred during logout");
  }
  return (
    <AuthContext.Provider value={{signInWithGoogle,signout,user}}>
      {children}
    </AuthContext.Provider>
  )
};

export const UserAuth=()=>{
  return useContext (AuthContext)
}
