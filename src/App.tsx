import React from "react";

import "./App.css";
import Feedback from "./componets/feedback/Feedback";
import { PhoneBook } from "./componets/phoneBook/PhoneBook";

function App() {
    return (
        <div className="App">
            <PhoneBook></PhoneBook>
            <Feedback></Feedback>
        </div>
    );
}

export default App;
