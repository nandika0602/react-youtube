import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
          <Header/>
          <Body/>
      </div>
    </Provider>
  )
}

export default App;
