//component to display a photo
import React from 'react';


const thumbnailFolder = './assets/thumbnails/';
const fullSizeFolder = './assets/fullSize/';





function Photo(props) {

const {src, alt, title} = props;
    return (
        <div className="photo">
            <img src={props.src} alt={props.alt} title={props.title} />
        </div>
    );
}

export default Photo;
