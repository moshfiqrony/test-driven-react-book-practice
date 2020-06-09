import { render, fireEvent, waitFor, screen, wait } from '@testing-library/react'
import React from 'react'
import Profile from '../components/Profile';
import 'babel-polyfill'

const flushPromises = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    })
  }

describe('Profile form test', () => {
    test('form is rendered properly?', () => {
        const { container } = render(<Profile />)
        expect(container).toMatchSnapshot();
    })


    test('onChange event and (type, name) is working properly for firstName?', () => {
        const { getByTestId } = render(<Profile />)
        const firstName = getByTestId('firstName');
        expect(firstName.name).toBe('firstName')
        expect(firstName.name).not.toBe('')
        expect(firstName.type).toBe('text')
        fireEvent.change(firstName, {target: {value: 'Moshfiq'}})
        expect(firstName.value).toBe('Moshfiq')
    })

    test('onChange event and (type, name) is working properly for lastName?', () => {
        const { getByTestId } = render(<Profile />)
        const lastName = getByTestId('lastName');
        expect(lastName.name).toBe('lastName')
        expect(lastName.name).not.toBe('')
        expect(lastName.type).toBe('text')
        fireEvent.change(lastName, {target: {value: 'Rony'}})
        expect(lastName.value).toBe('Rony')
    })

    test('onChange event and (type, name) is working properly for title?', () => {
        const { getByTestId } = render(<Profile />)
        const title = getByTestId('title');
        expect(title.name).toBe('title')
        expect(title.name).not.toBe('')
        expect(title.type).toBe('text')
        fireEvent.change(title, {target: {value: 'Software Engineer'}})
        expect(title.value).toBe('Software Engineer')
    })

    test('onChange event and (type, name) is working properly for department?', () => {
        const { getByTestId } = render(<Profile />)
        const department = getByTestId('department');
        expect(department.name).toBe('department')
        expect(department.name).not.toBe('')
        expect(department.type).toBe('text')
        fireEvent.change(department, {target: {value: 'Software Engineer'}})
        expect(department.value).toBe('Software Engineer')
    })

    test('onChange event and (type, name) is working properly for pronoun?', () => {
        const { getByTestId } = render(<Profile />)
        const pronoun = getByTestId('pronoun');
        expect(pronoun.name).toBe('pronoun')
        expect(pronoun.name).not.toBe('')
        expect(pronoun.type).toBe('select-one')
        fireEvent.change(pronoun, {target: {value: 'Software Engineer'}})
        expect(pronoun.value).toBe('MALE')
        fireEvent.change(pronoun, {target: {value: 'FEMALE'}})
        expect(pronoun.value).toBe('FEMALE')
    })

    test('onChange event and (type, name) is working properly for manager?', async() => {
        const {getByTestId} = render(<Profile />)
        fireEvent.mouseDown(screen.getAllByText('Select One')[0])
        fireEvent.click(screen.getByText('User 1'))
        expect(getByTestId('manager').querySelector('input').value).toBe('user1')
    })

    test('onChange event and (type, name) is working properly for timeZone?', () => {
        const {getByTestId} = render(<Profile />)
        fireEvent.mouseDown(screen.getAllByText('Select One')[1])
        fireEvent.click(screen.getByText('Asia/Dhaka'))
        expect(getByTestId('timeZone').querySelector('input').value).toBe('asia/dhaka')
    })
})
