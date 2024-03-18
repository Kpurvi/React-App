import { Link } from "react-router-dom";
import { ALL_ROUTES } from "./index.js";
// import CalculatorPage from "./pages/CalculatorPage.js";


function App() {
  return <ProjectList />;
}

export default App;

const ProjectList = () => {
  return (
    <ul>
      {APP_PAGES_PATH.map((item) => {
        return (
          <li>
            <a href={item.path}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

const APP_PAGES_PATH = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Calculator",
    path: "/calculator",
  },
  {
    name: "Todo",
    path: "/todo",
  },
  {
    name: "PDF",
    path: "/pdf",
  },
  {
    name: "Popup",
    path: "/popup",
  },
  {
    name: "Carousel",
    path: "/carousel",
  },
  {
    name: "GitSearch",
    path: "/gitsearch",
  },
  {
    name: "GitSearchwithJS",
    path: "/gitsearchwithjs",
  },
  {
    name: "TodoFakeAPIreact",
    path: "/todofakeapireact",
  },
  {
    name: "ContactUsForm",
    path: "/contactform",
  },
];
