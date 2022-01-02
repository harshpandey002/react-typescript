import "./App.css";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar foes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
