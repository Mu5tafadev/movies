
import "./App.css";
import Header from "./header/Header";
import List from "./movies-list/List";
import Maincards from "./carousel/Maincards";
import List1 from "./movies-list/List1";

function App() {
 

  return (
    <>
      <Header />

      <div>
      
          <Maincards />         
          <List />
     <List1/>
      </div>
    </>
  );
}

export default App;
