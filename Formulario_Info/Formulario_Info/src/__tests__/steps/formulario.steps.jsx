import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../App.jsx'
export const formulario = ({
    given: Given,
    and: And,
    when: When,
    then: Then
}) => {
    Given('you open the formulario', () => {
        render(<App />)
    })

    When('you write {string} in user', (text) => {
        const userInput = screen.getByLabelText('User') // Asegúrate de tener un label adecuado en tu formulario
        fireEvent.change(userInput, { target: { value: text } })
    })

    When('you press the {string} button', (buttonText) => {
        const button = screen.getByText(buttonText)
        fireEvent.click(button)
    })

    Then('I should see {string} in user', (text) => {
        expect(screen.getByLabelText('User')).toHaveValue(text)
    })

    Then('I should see {string} in name', (text) => {
        expect(screen.getByLabelText('Name')).toHaveValue(text)
    })

    Then('I should see {string} in surname', (text) => {
        expect(screen.getByLabelText('Surname')).toHaveValue(text)
    })

    Then('I should see {string} in DNI', (text) => {
        expect(screen.getByLabelText('DNI')).toHaveValue(text)
    })

    Then('I should see an empty user field', () => {
        expect(screen.getByLabelText('User')).toHaveValue('')
    })

    Then('I should see an empty name field', () => {
        expect(screen.getByLabelText('Name')).toHaveValue('')
    })

    Then('I should see an empty surname field', () => {
        expect(screen.getByLabelText('Surname')).toHaveValue('')
    })

    Then('I should see an empty DNI field', () => {
        expect(screen.getByLabelText('DNI')).toHaveValue('')
    })

    Then('I should see "Form submitted successfully"', () => {
        expect(screen.getByText('Form submitted successfully')).toBeInTheDocument()
    })
}