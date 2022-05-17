import React from "react";
import './PhotoViewer.css';

function PhotoViewer(props) {
    if (!props.src) {
        return (
            <div>
                <img className = 'landscape-photo' src = "https://picsum.photos/id/947/1600/900.jpg"></img>
            </div>
        );
    } else {
        return (
            <div>
                <img className = 'landscape-photo' src = {props.src}></img>
            </div>
        );
    }
}

export {PhotoViewer};