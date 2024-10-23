import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (true) {
      navigate("/login")
    }
  });
  return <div>
    <h2>HOME</h2>
  </div>;
}

export default Home;
