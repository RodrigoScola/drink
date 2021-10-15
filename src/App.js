import "./App.css";
import { useState } from "react";
import { CreateAccountComponent } from "./Components/pages/createAccountPage/CreateAccountComponent";
import { Profile } from "./Components/pages/ProfilePage/Profile";
import { MainPageComponent } from "./Components/pages/MainPage/MainPageComponent";
import { LoginPageComponent } from "./Components/pages/LoginPage/LoginPageComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterComponent } from "./Components/ReusableComponents/Navbar/footerComponent";
const userInfo = require("./utils/userInfo");

//if the user is in mobile, thats the routing that it gets
const setUserPage = (pageName) => {
  switch (pageName) {
    case "mainPage":
      return <MainPageComponent />;
    case "profilePage":
      return <Profile />;
    case "loginPage":
      return <LoginPageComponent />;
    case "createAccount":
      return <CreateAccountComponent />;
  }
};
// if the user is in the browser, thats the routing that it gets
function App() {
  const inMobile = false;
  const [page, setPage] = useState("mainPage");
  const [userData, setData] = useState(userInfo);
  if (inMobile) {
    return <div>{setUserPage(page)}</div>;
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPageComponent userData={userData} setData={setData} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LoginPageComponent />
          </Route>
          <Route path="/create-Account">
            <CreateAccountComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
