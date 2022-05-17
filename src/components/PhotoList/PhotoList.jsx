import React, {useState} from "react";
import './PhotoList.css';

function PhotoList({setSelectedPhoto}) {
    const brokenImages = [1, 24, 32, 36, 44, 47];
    
    function getImageUrls() {
        const urls = [];
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }
    const imageUrls = getImageUrls();

    return (
        <div>
            <ul className = "photo-list">
                {imageUrls.map(url => <li className = "list-item"><img onClick = {() => setSelectedPhoto(url)} className = "grid-photo" src = {url}></img></li>)}
            </ul>
        </div>
    )
}

export {PhotoList};