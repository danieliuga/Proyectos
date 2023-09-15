Feature: Form

Background: 
    Given the user open the formulario

Scenario: Hello World
Then the app should show you 'Hola Mundo!'

Scenario: Check Formulario
Then I should see the formulario

Scenario: Input User
Given you write "Dani" in "user"
Then I should see "DANI" in "user"

Scenario: Input Name
Given you write "joel" in "user"
Then I should see "JOEL" in "user"

Scenario: Input Surname
Given you write "iuga" in "user"
Then I should see "IUGA" in "user"

Scenario: Input DNI
Given you write "49270614z" in "user"
Then I should see "49270614Z" in "user"

Scenario: press button 'clear' in user
Given you press the "clearButton" button
Then I should see nothing in "user"

Scenario: press button 'clear' in name
Given you press the "clearButton" button
Then I should see nothing in "name"

Scenario: press button 'clear' in surname
Given you press the "clearButton" button
Then I should see nothing in "surname" 

Scenario: press button 'clearButton' in DNI
Given you press the "clearButton" button
Then I should see nothing in "dni"

# Scenario: press the button 'submit'
# Given you press the "submitButton" button
# Then I should see "Hola" in "formSubmitted"

# Scenario: error in the dni
# Given you press the "submitButton" button 
# Then I should see "11111111H" in "dni"