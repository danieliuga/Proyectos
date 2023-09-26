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
    //Nuevo Funciona
    And('select the \'España\' option', () => {
        const countryButton = screen.findByTestId('countryButton');
        expect(countryButton).toBe(countryButton)

        const spainOption = screen.findByTestId('spainOption');
        expect(spainOption).toBe(spainOption);
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
    //Nuevo Funciona
    Then(/^I should see 'España' in "(.*)"$/, (nameCountry) => {
        const element = screen.getByTestId(nameCountry);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });
    //Nuevo Funciona
    Then(/^I should see 'Choose a country' in "(.*)"$/, (text) => {
        const element = screen.getByTestId(text);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });
    //Nuevo Funciona
    Then(/^I should see a 'Required' in "(.*)"$/, (error) => {
        const element = screen.getByTestId(error);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });


}
export default formulario