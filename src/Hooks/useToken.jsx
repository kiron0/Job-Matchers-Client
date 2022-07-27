import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (user) {
      (async () => {
        await fetch(`http://localhost:5000/login`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: user?.uid, email: user?.email }),
        })
          .then((res) => res.json())
          .then(({ token }) => {
            localStorage.setItem("accessToken", token);
            setToken(token);
          });
      })();
    }
  }, [user]);
  return [token];
};

export default useToken;
