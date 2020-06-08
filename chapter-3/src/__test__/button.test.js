import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import Button from '../components/Button';
import Slide from '../components/Slide';


describe('button testing', () => {
    test('renders a button component', () => {
        const container = document.createElement('div')
        const buttonName = 'my button';
        ReactDOM.render(<Button type='button'/>, container);
        
        const button = container.querySelector('button')
        expect(button.type).toBe('button')
    })

    test('Children passed', () => {
        const container = document.createElement('div')
        const buttonName = 'my button';
        ReactDOM.render(<Button type='button'>{buttonName}</Button>, container);
        
        const button = container.querySelector('button')
        expect(button.textContent).toBe(buttonName)
    })

    test('figure rendered properly', () =>{
        const imgUrl = 'https://www.example.com/image.png'
        const description = 'this is a example image'
        const {container, getByTestId} = render(<Slide/>)
        expect(container).toMatchSnapshot();
    })

    test('image url passed using props', () =>{
        const imgUrl = 'https://www.example.com/image.png'
        const {container, getByTestId} = render(<Slide imgUrl={imgUrl} />)
        expect(getByTestId('image-test').src).toBe(imgUrl)
    })

    test('image description passed using props', () =>{
        const description = 'this is a example image'
        const {container, getByTestId} = render(<Slide description={description}/>)
        expect(getByTestId('figcaption-test').textContent).toBe(description)
    })
})


describe('stateful component testing', () => {
    test('state', () => {
        
    })
})