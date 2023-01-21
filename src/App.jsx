import lightThemeImage from "./assets/images/bg-mobile-light.jpg";
import darkThemeImage from "./assets/images/bg-mobile-dark.jpg";
import TodoLayout from "./components/TodoLayout";
import { ThemeStatus } from "./context/ThemeContext";
import { useState } from "react";
import { useContext } from "react";
function App() {
  const [theme, setTheme] = useState(false);
  const status = useContext(ThemeStatus);

  return (
    <ThemeStatus.Provider value={{ theme, setTheme }}>
      <section className="App h-screen w-screen relative  bg-VeryLightGrayishBlue">
        <div className="w-full h-max absolute top-0 right-0 left-0">
          <img
            src={!theme ? lightThemeImage : darkThemeImage}
            className="w-full h-full"
            alt=""
          />
        </div>
        <TodoLayout />
      </section>
    </ThemeStatus.Provider>
  );
}

export default App;
