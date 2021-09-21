import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import TimNav from "./components/TimNav/TimNav";
import AllTeacherPage from "./page/AllTeacherPage/AllTeacherPage";
import CardPage from "./page/CardPage/CardPage";
import Carosel from "./page/Carosel/Carosel";
import Homepage from "./page/Homepage/Homepage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import StudentDetailPage from "./page/StudentDetailPage/StudentDetailPage";
import StudentUploadInfo from "./page/StudentUploadInfo/StudentUploadInfo";
import TeacherDetailPage from "./page/TeacherDetailPage/TeacherDetailPage";
import UploadInfoPage from "./page/UploadInfoPage/UploadInfoPage";

function App() {
  return (
    <Router>
      <TimNav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/TeacherDetailPage/:id"
          component={TeacherDetailPage}
        />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/RegisterPage" component={RegisterPage} />
        <Route exact path="/UploadInfoPage/:id" component={UploadInfoPage} />
        <Route exact path="/StudentDetailPage" component={StudentDetailPage} />
        <Route exact path="/StudentUploadInfo" component={StudentUploadInfo} />
        <Route exact path="/AllTeacherPage" component={AllTeacherPage} />
        <Route exact path="/test" component={Carosel} />
        <Route exact path="/CardPage/:id" component={CardPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
