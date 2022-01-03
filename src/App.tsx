import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar foes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
