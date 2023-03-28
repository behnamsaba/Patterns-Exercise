import { BrowserRouter ,Routes , Route, Navigate } from "react-router-dom"
import { useState } from "react";
// part1
import AllDogs from "./AllDogs";
import NavBar from "./NavBar";
import Dogs from "./Dogs";
import DogData from "./DogData";

// part2
import Colors from "./Colors";
import FormColor from "./FormColor";
import Color from "./Color";



function App() {
  const [color,setColor] = useState([]);

  const handler = (newColor) => {
    setColor((data) => [...color,newColor])
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar AllDogs={AllDogs}/>
      <Routes>
        <Route path="dogs" element={<Dogs AllDogs={AllDogs}/>}/>
        <Route path="dogs/:namePar" element={<DogData AllDogs={AllDogs}/>}/>
        <Route path="*" element={<Navigate to="/dogs" replace />} />


        <Route path="colors" element={<Colors colors={color}/>}/>
        <Route path="/colors/new" element={<FormColor handler={handler}/>}/>
        <Route path="/colors/:name" element={<Color />}/>


      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
