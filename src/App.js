import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { DarkMode } from "./components/darkmode";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  return (
    <div className="app" style = {{
      backgroundColor: darkMode ? '#151515' : 'white',
    }}>
      <DefaultContext.Provider value={{ handleCreateFan, handleDarkMode, darkMode, fan}}>
        <Header/>
        <DarkMode/>
        <hr />
        <Content/>
        <hr />
        <Footer/>
      </DefaultContext.Provider>
    </div>
  );
}
