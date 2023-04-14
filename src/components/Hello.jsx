import React from "react";

const Hello = () => {
    return React.createElement(
        'div', 
        {
            id: 'hello', 
            className: 'DummyClass'
        },
        React.createElement('h1', null, 'Hello World'))
}

export default Hello