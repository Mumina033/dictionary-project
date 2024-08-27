import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="Header">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Rain" />
        </main>
        <footer className="App-footer">
          <small>Coded by Mumina Mohamed</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
