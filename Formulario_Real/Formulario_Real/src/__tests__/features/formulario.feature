Feature: Form

    Background:
        Given the user open the formulario

    Scenario: Check Formulario
        Then I should see the formulario

    Scenario: Text User Area
        Given you write "dani" in "user"
        Then I should see "DANI" in "user"

    Scenario: Text Name Area
        Given you write "joel" in "name"
        Then I should see "JOEL" in "name"

    Scenario: Text Surname Area
        Given you write "iuga" in "surname"
        Then I should see "IUGA" in "surname"

    Scenario: Text DNI Area
        Given you write "49270614z" in "dni"
        Then I should see "49270614Z" in "dni"

    Scenario: press button 'clear' in user
        Given you press the "clearButton" button
        Then I should see nothing in "user"

    Scenario: press button 'clear' in name
        Given you press the "clearButton" button
        Then I should see nothing in "name"

    Scenario: press button 'clear' in surname
        Given you press the "clearButton" button
        Then I should see nothing in "surname"

    Scenario: press button 'clear' in DNI
        Given you press the "clearButton" button
        Then I should see nothing in "dni"

    Scenario: Validación de DNI
        Given you write "12345678A" in "dni"
        When you press the "submitButton" button
        Then I should see "12345678A" in "dni"

    Scenario: select the 'España' option
        Given you press the "countryButton" button
        And select the 'España' option
        Then I should see 'España' in "countryButton"

    Scenario: select the 'country' option
        Given you press the "countryButton" button
        Then I should see 'Choose a country' in "countryButton"

    Scenario: Manage user text area errors
        Given you press the "submitButton" button
        Then I should see a 'Required' in "user"

    Scenario: Manage name text area errors
        Given you press the "submitButton" button
        Then I should see a 'Required' in "name"

    Scenario: Manage surname text area errors
        Given you press the "submitButton" button
        Then I should see a 'Required' in "surname"

    Scenario: Manage country text area errors
        Given you press the "submitButton" button
        Then I should see a 'Required' in "countryButton"

    Scenario: Manage dni text area errors
        Given you press the "submitButton" button
        Then I should see a 'Required' in "dni"

# Errores

# Scenario: validate the dni in Dni text Area
#     Given you press the "submitButton" button
#     Then I should see "11111111H" in "dni"

# Form submitted

# Scenario: Send form submitted successfully
#     Given you press the "submitButton" button
#     Then I should see "Form submitted successfully" in the console

# Scenario: Intentar Enviar el Formulario sin Seleccionar un País
#     Given you write "Dani" in "user"
#     And you write "Joel" in "name"
#     And you write "Iuga" in "surname"
#     And you write "49270614z" in "dni"
#     When you press the "submitButton" button
#     Then I should see an error message in "country" indicating it's a required field

# Scenario: Cambiar la Selección de País
#     Given you select "España" in the "country" dropdown
#     And you write "49270614z" in "dni"
#     When you press the "submitButton" button
#     Then I should see "Formulario enviado exitosamente" in the console










