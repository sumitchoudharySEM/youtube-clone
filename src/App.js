import {Header, Main, Sidebar} from "./components";

function App() {
  return (
    <div className="home">
      <Header/>
      <div className="app">
      <Sidebar/>
      <Main/>
      </div>
      
    </div>
  );
}

export default App;
