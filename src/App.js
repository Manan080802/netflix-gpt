import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./app/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
