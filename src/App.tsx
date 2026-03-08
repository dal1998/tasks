import React from "react";
// import { Button } from "react-bootstrap";
// import simpsons from "./images/simpsons.jpg";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header>UD CISC275</header>
            {/* <header className="App-header">
                <h1>This is a header.</h1>
                UD CISC275 with React Hooks and TypeScript
                <br />
                Daniel La Mastra
                <br />
                Hello World
                <img src={simpsons} alt="Old man yells at clouds." />
                This is <span style={{ color: "red" }}>colored text</span>.
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </header> */}
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
