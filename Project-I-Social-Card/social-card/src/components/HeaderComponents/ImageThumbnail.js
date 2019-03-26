import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
const ImageThumbnail = () => {
    return(
<div className="image-thumbnail">
<h1>This is the Image Thumbnail</h1>
<img src=" https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="logo"/>
</div>
    );
}

export default ImageThumbnail;