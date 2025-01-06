import Navbar from "./components/Navbar.jsx";
import "./index.css"
import ChallengesPagefinal from "./pages/ChallengesPagefinal.jsx";
import ChallengesPage from "./pages/ChallengesPagefinal.jsx";
import Firstpage from './pages/Firstpage.jsx'
import Loginpage from "./pages/Loginpage.jsx";
import UserPage from "./pages/UserPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Firstpage />
      <Loginpage/>
      <UserPage/>
      <ChallengesPagefinal/>
    </>
  );
};

export default App;
