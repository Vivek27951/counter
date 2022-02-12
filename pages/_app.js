import "../styles/globals.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "../components";

const store = createStore(allReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
