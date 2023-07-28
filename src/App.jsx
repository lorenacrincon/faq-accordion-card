import "./App.css";
import FaqCard from "./components/FaqCard";
import "./components/accordion.css";

function App() {
  return (
    <>
      <FaqCard />
      <div class="attribution mt-9 text-white">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {" "}
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/lorenacrincon" target="_blank">
          {" "}
          Lorena Rincón
        </a>
        .
      </div>
    </>
  );
}

export default App;
