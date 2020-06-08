import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../App';

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

describe("App's architecture test", () => {
    test('is the previous button are rendering properly', () => {
        const {getByText} = render(<App/>)
        expect(getByText('Previous').type).toBe('button')
    })

    test('is the next button are rendering properly', () => {
        const {getByText} = render(<App/>)
        expect(getByText('Next').type).toBe('button')
    })

    test('are the Figure -> image and figcaption rendered correctly?', () => {
        const {container} = render(<App/>)
        expect(container.querySelector('figure')).toMatchSnapshot();
    })
})

describe("initial image description test rendered properly", () => {
    test('is the image has url props', () => {
        const {getByTestId} = render(<App/>)
        expect(getByTestId('image-test').src).toBe(images[0].url)
    })

    test('is the image has description props', () => {
        const {getByTestId} = render(<App/>)
        expect(getByTestId('image-test').alt).toBe(images[0].description)
    })
})

describe("click event for next and prev button test", () => {
    test('next button click event test', () => {
        const {getByTestId} = render(<App/>)
        const button = getByTestId('next')
        expect(getByTestId('image-test').src).toBe(images[0].url)
        expect(getByTestId('image-test').alt).toBe(images[0].description)
        fireEvent.click(button)
        expect(getByTestId('image-test').src).toBe(images[1].url)
        expect(getByTestId('image-test').alt).toBe(images[1].description)
        fireEvent.click(button)
        expect(getByTestId('image-test').src).toBe(images[2].url)
        expect(getByTestId('image-test').alt).toBe(images[2].description)
    })
    test('previous button click event test', () => {
        const {getByTestId} = render(<App/>)
        const btnNext = getByTestId('next')
        const btnPrevious = getByTestId('previous')
        expect(getByTestId('image-test').src).toBe(images[0].url)
        expect(getByTestId('image-test').alt).toBe(images[0].description)
        fireEvent.click(btnNext)
        expect(getByTestId('image-test').src).toBe(images[1].url)
        expect(getByTestId('image-test').alt).toBe(images[1].description)
        fireEvent.click(btnPrevious)
        expect(getByTestId('image-test').src).toBe(images[0].url)
        expect(getByTestId('image-test').alt).toBe(images[0].description)
    })
})

describe("Button click validation for first and last image", () => {
    test('previous button click event test when in first image', () => {
        const {getByTestId} = render(<App/>)
        const btnPrevious = getByTestId('previous')
        fireEvent.click(btnPrevious)
        expect(getByTestId('image-test').src).toBe(images[images.length-1].url)
        expect(getByTestId('image-test').alt).toBe(images[images.length-1].description)
    })

    test('next button click event test when in last image', () => {
        const {getByTestId} = render(<App/>)
        const btnNext = getByTestId('next')
        for(let i = 0 ; i <= images.length-1; i++){
            fireEvent.click(btnNext)
        } 
        expect(getByTestId('image-test').src).toBe(images[0].url)
        expect(getByTestId('image-test').alt).toBe(images[0].description)
    })
})