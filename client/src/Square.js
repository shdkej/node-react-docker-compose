import React from 'react';

function Square(props) {
    return (
        <button id="square" className={props.className} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;
