import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
