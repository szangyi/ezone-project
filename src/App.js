import "./App.scss";
import { Quiz } from "./form_steps/quiz.js";
import { Background } from "./background/background.js";
import { FrontPage } from "./frontpage/frontpage.js";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      {/* <FrontPage /> */}
      <Quiz />
      <Background />
    </div>
  );
}

export default App;
