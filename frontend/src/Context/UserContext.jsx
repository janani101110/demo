import React, { createContext, useEffect, useState } from "react";
export const UserContext=createContext({
})


export function UserContextProvider({children}){
  
  const [user, setUser] = useState(null);


  useEffect(() => {
    // Fetch authentication status
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login/success', {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          }
        });

        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
        } else {
          throw new Error("Authentication has failed");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAuthenticationStatus();
  }, []); // Fetch authentication status on component mount

  console.log(user);
  return (
    <UserContext.Provider value={user}>
      {children}
      <profile/>
    </UserContext.Provider>
  );
}

export default UserContext;