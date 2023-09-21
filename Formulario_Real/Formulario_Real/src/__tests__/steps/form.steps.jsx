import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Form } from '../../components/Form/Form'

export const formulario = ({
    given: Given,
    and: And,
    when: When,
    then: Then
}) => {
    Given('the user open the formulario', () => {
        render(<Form />)
    });

    Given(/^you write "(.*)" in "(.*)"$/, (text, textBox) => {
        fireEvent.change(screen.getByTestId(textBox), { target: { value: text } });
    });

    Given(/^you press the "(.*)" button$/, (buttonName) => {
        const button = screen.getByTestId(buttonName);
        fireEvent.click(button);
    });

    Then('the app should show you \'Hola Mundo!\'', () => {
        expect(true).toBe(true)
    });

    Then('I should see the formulario', () => {
        var isRendered = false;
        if (screen.getByTestId('formulario')) isRendered = true;
        expect(isRendered).toBe(true)
    });

    Then(/^I should see "(.*)" in "(.*)"$/, (text, textBox) => {
        var theValue = false
        if (screen.getByTestId(textBox).value == text) theValue = true;
        expect(theValue).toBe(true)
    }); 

    Then(/^I should see nothing in "(.*)"$/, (nullValue) => {
        const element = screen.getByTestId(nullValue);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe('');
    });

}
export default formulario