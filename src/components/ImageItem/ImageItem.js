import React from 'react';
import './ImageItem.scss'

const ImageItem = (props) => {
    const {source, zoomImg} = props;
    return (
        <div
            onClick={() => zoomImg(source.img)}
            className='image-item'>
            <img src={source.img} alt="image"/>
        </div>
    );
};

export default ImageItem;