import React, { useState } from 'react';
import Button from './components/Button';
import Slide from './components/Slide';

function App(props) {
    const [current, setCurrent] = useState(0)

    const images = [
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYmn-AewAIxk9ATJC3VOb26sVuSDkdqzDNieX9pov466JFno1k&usqp=CAU",
            description: "AI Image Enlarger - Image Enlarger Online Tool Free"
        },
        {
            url: "https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg",
            description: "Seeing the unseeable: that 'black hole image' explained - The ..."
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJU95RxhFxeMd3gCBva9O6b2-ByPOwe9q__TweIor_uLtrB6jr&usqp=CAU",
            description: "Color palette generator | Canva Colors"
        },

    ]

    

    return (
        <div>
            <Slide imgUrl={images[current].url} description={images[current].description}/>
            <Button data-testid='previous' onClick={() => setCurrent(prevCurrent => prevCurrent === 0 ? images.length-1 : prevCurrent-1 )} type='button'>Previous</Button>
            <Button data-testid='next' onClick={() => setCurrent(prevCurrent => prevCurrent === images.length-1 ? 0 : prevCurrent+1 )} type='button'>Next</Button>
        </div>
    );
}

export default App;