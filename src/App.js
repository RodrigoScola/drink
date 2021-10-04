import "./App.css";
import { CreateAccountComponent } from "./Components/pages/createAccountPage/CreateAccountComponent";
import { Profile } from "./Components/pages/ProfilePage/Profile";
import { MainPageComponent } from "./Components/pages/MainPage/MainPageComponent";
import { FooterComponent } from "./Components/ReusableComponents/footerComponent";
import { LoginPageComponent } from "./Components/pages/LoginPage/LoginPageComponent";

function App() {
  return (
    <div className="App">
      {/* <div> */}
      <LoginPageComponent />

      <FooterComponent />
    </div>
  );
}

export default App;
