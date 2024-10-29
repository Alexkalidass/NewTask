import React from "react";
import "./Dashboard.css";
import { Container } from "@mui/material";
import Firstcompo from "../../components/Firstcompo/Firstcompo";
import Secondcompo from "../../components/Secondcompo/Secondcompo";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container>
        <Firstcompo />
      </Container>
      <Secondcompo />
    </div>
  );
};

export default Dashboard;
