import './App.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { SwatchColumnLegend } from "./components/SwatchColumnLegend";
import { SwatchColumnWeights } from "./components/SwatchColumnWeights";
import { SwatchColumn } from "./components/SwatchColumn";
import { SwatchColumnsRandom } from "./components/testing/SwatchColumnsRandom";


import { SwatchModel } from './../src/models/SwatchModel'

function App() {

    const [focusedSwatch, setFocusedSwatch] = useState<SwatchModel | undefined>(undefined)
    const [focusedHex, setFocusedHex] = useState<string | undefined>(undefined)

    localStorage.clear();
    console.log("All localStorage cleared")

    // const controlDown = (event: KeyboardEvent) => {
    //     if (event.repeat) return;
    //     event.preventDefault();
    //     if (event.key === "3") {
    //         console.log("I SEE THREE!!!")
    //         dispatchEvent(new CustomEvent("SHOW31ContrastPass", { detail: focusedHex }));

    //         // if (focusedSwatch !== undefined) {
    //         //     dispatchEvent(new CustomEvent("SHOW31ContrastPass", { detail: focusedSwatch }));
    //         // } else {
    //         //     console.log("NOTHING THERE BOSS")
    //         // }
    //     }
    // };

    // const controlUp = (event: KeyboardEvent) => {
    //     if (event.repeat) return;
    //     event.preventDefault();
    //     dispatchEvent(new CustomEvent("NORMAL", { detail: focusedSwatch }));
    // };

    // window.addEventListener('keydown', controlDown)
    // window.addEventListener('keyup', controlUp)
    // window.addEventListener("SETFOCUSEDSQWASKDF", ((e: CustomEvent) => {
    //     setFocusedHex(e.detail)
    //     e.preventDefault();
    // }) as EventListener);

    return (
        <div className="App">
            <NavBar />
            {/* <SwatchColumnsRandom/> */}

            <SwatchColumnLegend />

            {/* WSJ  */}
            <SwatchColumn model={{ hexString: "#0274B6", semantic: "primary" }} />
            <SwatchColumn model={{ hexString: "#8856CB", semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: "#816D4D", semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: "#0A8200", semantic: "positive" }} />
            <SwatchColumn model={{ hexString: "#E10000", semantic: "negative" }} />
            <SwatchColumn model={{ hexString: "#FFCF3D", semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: "#F57C13", semantic: "attention" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "info" }} />
            <SwatchColumn model={{ hexString: "#007AFF", semantic: "system" }} />
            <SwatchColumn model={{ hexString: "#6F6F6F", semantic: "neutral" }} />

            <SwatchColumnWeights />

            {/* Bootstrap
            <SwatchColumn model={{ hexString: "#007BFF", semantic: "primary" }} />
            <SwatchColumn model={{ hexString: "#6C757D", semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: "#6C757D", semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: "#28A745", semantic: "positive" }} />
            <SwatchColumn model={{ hexString: "#DC3545", semantic: "negative" }} />
            <SwatchColumn model={{ hexString: "#FFC107", semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: "#17A2B8", semantic: "info" }} />
            <SwatchColumn model={{ hexString: "#007BFF", semantic: "system" }} />
            <SwatchColumn model={{ hexString: "#343A40", semantic: "neutral" }} /> */}

            {/* IBM Carbon
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "primary" }} />
            <SwatchColumn model={{ hexString: "#8a3ffc", semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: "#0072c3", semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: "#198038", semantic: "positive" }} />
            <SwatchColumn model={{ hexString: "#da1e28", semantic: "negative" }} />
            <SwatchColumn model={{ hexString: "#f1c21b", semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "info" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "system" }} />
            <SwatchColumn model={{ hexString: "#343A40", semantic: "neutral" }} /> */}

            {/* Salesforce Lightning */}
            {/* <SwatchColumn model={{ hexString: "#0176d3", semantic: "primary" }} />
            <SwatchColumn model={{ hexString: "#0176d3", semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: "#0176d3", semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: "#2e844a", semantic: "positive" }} /> 
            <SwatchColumn model={{ hexString: "#ea001e", semantic: "negative" }} /> 
            <SwatchColumn model={{ hexString: "#fe9339", semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "info" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "system" }} />
            <SwatchColumn model={{ hexString: "#747474", semantic: "neutral" }} /> */}

            {/* <SwatchColumn model={{ hexString: "#0176d3", semantic: "primary" }} />
            <SwatchColumn model={{ hexString: "#0176d3", semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: "#0176d3", semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: "#2e844a", semantic: "positive" }} />
            <SwatchColumn model={{ hexString: "#ea001e", semantic: "negative" }} />
            <SwatchColumn model={{ hexString: "#fe9339", semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "info" }} />
            <SwatchColumn model={{ hexString: "#0f62fe", semantic: "system" }} />
            <SwatchColumn model={{ hexString: "#747474", semantic: "neutral" }} />  */}

            <Footer />
        </div>
    );
}

export default App;