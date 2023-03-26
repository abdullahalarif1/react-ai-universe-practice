import "./App.css";
import Button from "./components/Button/Button";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button>Sort By date</Button>
      <Cart></Cart>
     
    </div>
  );
}

export default App;
