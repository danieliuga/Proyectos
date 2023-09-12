Feature: Formulario

Scenario 1: Check Formulario
Given Formulario
Then I should see "mock data"

Scenario 2: Input User
Given you write 'dani' in user
Then I should see 'dani' in user

Scenario 3: Input Name
Given you write 'joel' in user
Then I should see 'joel' in user

Scenario 4: Input Surname
Given you write 'iuga' in user
Then I should see 'iuga' in user

Scenario 5: Input DNI
Given you write '49270614Z' in user
Then I should see '49270614Z' in user

Scenario 6: press button 'clear' in user
Given you press the 'clear' button
Then I should see ' ' in user

Scenario 7: press button 'clear' in name
Given you press the 'clear' button
Then I should see ' ' in name 

Scenario 8: press button 'clear' in surname
Given you press the 'clear' button
Then I should see ' ' in surname 

Scenario 9: press button 'clear' in DNI
Given you press the 'clear' button
Then I should see ' ' in DNI 

Scenario 10: press the button 'submit'
Given you press the button 'submit'
Then I shoud see 'Form submitted successfully'
