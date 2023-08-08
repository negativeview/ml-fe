import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>ML Frontend</h1>
        <h2>Node Card</h2>
        <p><b>Inputs</b></p>
        <p><b>Outputs</b></p>
        <p><b>Tags?</b></p>
      </div>

      <div class="ml-card">
        <div class="header">ML Card</div>
        <div class="tags">
          <div class="tag">a</div>
          <div class="tag">b</div>
        </div>
        <div class="io">
          <div class="input">
            Input
          </div>
          <div class="output">
            Output
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
