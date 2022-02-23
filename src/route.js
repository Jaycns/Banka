import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./form";
import SignIn from "./signin";
import App from "./App";
import Forgot from "./forgot";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
