// Firebase tutorial
// https://www.youtube.com/watch?v=zQyrwxMPm88

// Dexie Database
// https://dexie.org/docs/Typescript


// https://codetain.com/blog/dictionary-in-typescript


// https://www.fullstacklabs.co/blog/overload-typescript-react-component-interfaces-prop-values

// https://www.codegrepper.com/code-examples/javascript/frameworks/express/typescript+local+database

// https://github.com/pouchdb/pouchdb

// https://programmingwithmosh.com/react/localstorage-react/

// https://github.com/marcuswestin/store.js/

// https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5

import './App.css';
import { NavBar } from "./NavBar"
import { SwatchColumnLegend } from "./SwatchColumnLegend"
import { SwatchColumn }  from "./SwatchColumn";

function App() {

    // localStorage.clear();
    // https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/products

    return (
        <div className="App">
            <NavBar/>
            <SwatchColumnLegend/>

            {/* IBM */}
            <SwatchColumn model={{hex:"#082B9F", semantic: "primary"}} />
            <SwatchColumn model={{hex:"#1057F7", semantic: "secondary"}}/>
            <SwatchColumn model={{hex:"#198038", semantic: "success"}}/>
            <SwatchColumn model={{hex:"#8a3ffc", semantic: "info"}}/>
            <SwatchColumn model={{hex:"#FFB000", semantic: "warning"}}/>
            <SwatchColumn model={{hex:"#da1e28", semantic: "danger"}}/>
            <SwatchColumn model={{hex:"#6f6f6f", semantic: "neutral"}}/>


            {/* // GREENS */}
            {/* <SwatchColumn model={{hex:"#179937", semantic: "primary"}} />
            <SwatchColumn model={{hex:"#009925", semantic: "secondary"}}/>
            <SwatchColumn model={{hex:"#0e9931", semantic: "info"}}/>
            <SwatchColumn model={{hex:"#118236", semantic: "success"}}/>
            <SwatchColumn model={{hex:"#00704A", semantic: "warning"}}/>
            <SwatchColumn model={{hex:"#D90303", semantic: "danger"}}/>
            <SwatchColumn model={{hex:"#6E6E6E", semantic: "neutral"}}/> */}

            {/* GENOME */}
            {/* <SwatchColumn model={{hex:"#9C1DEB", semantic: "primary"}} />
            <SwatchColumn model={{hex:"#009925", semantic: "secondary"}}/>
            <SwatchColumn model={{hex:"#118236", semantic: "success"}}/>
            <SwatchColumn model={{hex:"#1369D0", semantic: "info"}}/>
            <SwatchColumn model={{hex:"#FFC107", semantic: "warning"}}/>
            <SwatchColumn model={{hex:"#D90303", semantic: "danger"}}/>
            <SwatchColumn model={{hex:"#6E6E6E", semantic: "neutral"}}/> */}
        </div>
    );
}

// 179937

export default App;