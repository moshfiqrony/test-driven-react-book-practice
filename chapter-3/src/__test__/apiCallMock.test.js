import React from 'react'
import { render, waitFor } from '@testing-library/react';
import ApiCallMock from '../components/ApiCallMock';
import { act } from 'react-dom/test-utils';
import axios from 'axios'

describe('API Call axios mock testing', () => {

    test('Component rendered successfully', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({
            status: 200,
            data: {
                name: 'Rony',
                email: 'rony@getd2.com'
            }
        }))

        const { container, getByTestId } = render(<ApiCallMock />);
        expect(container.textContent).toMatch('Loading Data..')
        await waitFor(() => expect(getByTestId('name').textContent).toMatch('Rony'))

    })
})

describe('API Call axios mock testing', () => {

    test('Component rendered successfully', async () => {
        axios.get
        .mockImplementationOnce(() => Promise.resolve({
            status: 200,
            data: {
                name: 'Rony',
                email: 'rony@example.com'
            }
        }))
        .mockImplementationOnce(() => Promise.resolve({
            status: 202,
            data: {
                name: 'Rony',
                email: 'rony@mock.com'
            }
        }))
        .mockImplementationOnce(() => Promise.resolve({
            status: 400,
            data: null
        }))
        
    })
})