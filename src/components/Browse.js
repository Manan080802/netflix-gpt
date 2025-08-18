import React, { useEffect } from "react";
import Header from "./navigation/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const userinfo = useSelector((selector) => selector.user.userinfo);
  console.log("userinfo :>> ", userinfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userinfo) {
      navigate("/");
    }
  }, [userinfo, navigate]);
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
