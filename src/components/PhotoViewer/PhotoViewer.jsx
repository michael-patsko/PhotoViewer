import React, { useState } from "react";
import './PhotoViewer.css';

function PhotoViewer({selectedPhoto}) {
    return (
        <div>
            <img className = 'main-photo' src = {selectedPhoto}></img>
        </div>
    );
}

export {PhotoViewer};