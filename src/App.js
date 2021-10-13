import "./App.css";
import { CreateAccountComponent } from "./Components/pages/createAccountPage/CreateAccountComponent";
import { Profile } from "./Components/pages/ProfilePage/Profile";
import { MainPageComponent } from "./Components/pages/MainPage/MainPageComponent";
import { FooterComponent } from "./Components/ReusableComponents/footerComponent";
import { LoginPageComponent } from "./Components/pages/LoginPage/LoginPageComponent";

function App() {
  const copos = 5;
  const coposEmMl = copos * 250;
  return (
    <div className="App">
      <MainPageComponent copos={copos} coposEmMl={coposEmMl} />

      <FooterComponent />
    </div>
  );
}

export default App;
