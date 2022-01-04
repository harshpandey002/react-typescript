import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container
        styles={{ border: "1px solid black", padding: "2rem", display: "none" }}
      />
    </div>
  );
}

export default App;
