import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./styles/Variables.scss"


function App() {
  
  return (
    <div className="App">
<BrowserRouter>
<AppRouter/>
</BrowserRouter>
    </div>
  );
}

export default App;

      /* <Header/>
      <Line/>
      <Login/>
      <Footer/>
       */