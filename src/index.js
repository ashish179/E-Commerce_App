import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./css//index.css"
import { StateProvider } from "./StateProvider";
import reducer,{initialState}  from "./reducer";


ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>

    
<App/>
</StateProvider>
,document.getElementById("root"))