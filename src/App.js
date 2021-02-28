import {sources} from "./data";
import './App.css';
import {useState} from "react";
import ImageItem from "./components/ImageItem/ImageItem";
import OpenImg from "./components/OpenImg/OpenImg";

function App() {
    const [imgSrc, setImgSrc] = useState('')
    const [onImgZoom, setOnImgZoom] = useState(false);
    const zoomImg = (src) => {
        setOnImgZoom(!onImgZoom);
        setImgSrc(src)
    }
    const closeImg = () => {
        setOnImgZoom(!onImgZoom);
    }
    return (
        <div className="App">
            <div className="header container">
                <span>Number of elements: {sources.length}</span>
            </div>
            <div className="images-list d-flex flex-wrap justify-content-between">
                {sources.map(source => <ImageItem
                    onImgZoom={onImgZoom}
                    zoomImg={zoomImg}
                    source={source}
                    key={source.id}/>)}
            </div>
            {onImgZoom && <OpenImg
                closeImg={closeImg}
                imgSrc={imgSrc}/>}

        </div>
    );
}

export default App;
