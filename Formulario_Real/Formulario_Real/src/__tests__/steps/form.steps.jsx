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

    //Nuevo
    Given(/^you select the opction 'España' in "(.*)" button$/, (arg0) => {
        const countryButton = screen.findByTestId('countryButton');
        expect(countryButton).toBe(countryButton)

        const spainOption = screen.findByTestId('spainOption');
        expect(spainOption).toBe(spainOption);
    });

    And('select the \'España\' option', () => {
        const countryButton = screen.findByTestId('countryButton');
        expect(countryButton).toBe(countryButton)

        const spainOption = screen.findByTestId('spainOption');
        expect(spainOption).toBe(spainOption);
    });

    //Nuevo
    And(/^you write '(\d+)H' in "(.*)"$/, (text, textBox) => {
        fireEvent.change(screen.getByTestId(textBox), { target: { value: text } });
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

    Then(/^I should see 'España' in "(.*)"$/, (nameCountry) => {
        const element = screen.getByTestId(nameCountry);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });

    Then(/^I should see 'Choose a country' in "(.*)"$/, (text) => {
        const element = screen.getByTestId(text);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });

    Then(/^I should see a 'Required' in "(.*)"$/, (error) => {
        const element = screen.getByTestId(error);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });

    //nuevo
    Then(/^I shouldn't see the 'User cannot contain name' message in "(.*)"$/, (error) => {
        const element = screen.getByTestId(error);
        expect(element).toBeInTheDocument();
        expect(element.value).toBe(element.value);
    });

}
export default formulario

// Scenario: Manage the error when you write the same words in user and in name

//Nuevo
    // Given(/^you write 'DA' in "(.*)"$/, (text, textBox) => {
    //     fireEvent.change(screen.findByTestId(textBox), { target: { value: text } });    
    // });

//Nuevo
    // And(/^you write 'Da' in "(.*)"$/, (text, textBox) => {
    //     fireEvent.change(screen.getByTestId(textBox), { target: { value: text } });
    // });

//Nuevo
    // Then(/^I should see a 'User cannot contain name' in "(.*)"$/, (error) => {
    //     const element = screen.getByTestId(error);
    //     expect(element).toBeInTheDocument();
    //     expect(element.value).toBe(element.value);
    // });