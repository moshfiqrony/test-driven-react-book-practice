import React from 'react';

function Slide(props) {
    return (
        <figure>
            <img alt={props.description} data-testid='image-test' src={props.imgUrl} />
            <figcaption data-testid='figcaption-test'><strong>{props.description}</strong></figcaption>
        </figure>
    );
}

export default Slide;