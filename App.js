import React from "react";
import ReactDOM from 'react-dom/client';

// React Element
const Title = () =>  (
<h1 id="heading" tabIndex="5" >
    Namaste React using JSX
</h1>
);

// Functional Components - NEW

const HeadingComponent = () => ( 
    <div id="container"> 
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)