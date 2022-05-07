import reactDom from "react-dom";
import App from "./components/App";

import '../src/assets/globalStyle.css';
import '../src/assets/reset.css';


reactDom.render(<App/>, document.querySelector(".root"));
