import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import TimNav from "./components/TimNav/TimNav";
import Homepage from "./page/Homepage/Homepage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import TeacherDetailPage from "./page/TeacherDetailPage/TeacherDetailPage";
import UploadInfoPage from "./page/UploadInfoPage/UploadInfoPage";

function App() {
  return (
    <Router>
      <TimNav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/TeacherDetailPage" component={TeacherDetailPage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/RegisterPage" component={RegisterPage} />
        <Route exact path="/UploadInfoPage" component={UploadInfoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
