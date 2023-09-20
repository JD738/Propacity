import AMENITIES from "./AMENITIES/AMENITIES";
import Appart from "./Appartment/Appart";
import Contact from "./Contact/Contact";
import Last from "./Last/Last";
import Navbar from "./Navbar/Navbar";
import Near from "./Near/Near";
import Service from "./Services/Service";
import Search from "./searchbar/Search";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Appart/>
      <Service/>
      <AMENITIES/>
      <Near/>
      <Contact/>
      <Last/>
    </div>
  );
}

export default App;
