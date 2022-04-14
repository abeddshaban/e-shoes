import "./Styles/PageNotFound.css";

// mui
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="PageNotFound_section">
      <Card
        sx={{
          width: "275px",
          padding: "10px",
          boxShadow: "6px 7px 8px 2px rgb(0 0 0 / 26%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Page Not Found!</span>
        <span>
          This page can is not found or it is currently under construction and
          maintenance.
        </span>
        <Button onClick={() => navigate("/")} variant="outlined">
          Back To Home
        </Button>
      </Card>
    </section>
  );
};

export default PageNotFound;
