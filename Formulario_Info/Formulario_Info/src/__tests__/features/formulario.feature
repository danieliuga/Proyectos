Feature: Formulario

Scenario 1: Check Formulario
Given you open the formulario
Then I should see the "formulario"

Scenario 2: Input User
Given you open de formulario 
When you write 'dani' in user
Then I should see 'dani' in user

Scenario 3: Input Name
Given you open de formulario 
When you write 'joel' in user
Then I should see 'joel' in user

Scenario 4: Input Surname
Given you open de formulario 
When you write 'iuga' in user
Then I should see 'iuga' in user

Scenario 5: Input DNI
Given you open de formulario 
When you write '49270614Z' in user
Then I should see '49270614Z' in user

Scenario 6: press button 'clear' in user
Given you open de formulario 
When you press the 'clear' button
Then I should see ' ' in user

Scenario 7: press button 'clear' in name
Given you open de formulario 
When you press the 'clear' button
Then I should see ' ' in name 

Scenario 8: press button 'clear' in surname
Given you open de formulario 
When you press the 'clear' button
Then I should see ' ' in surname 

Scenario 9: press button 'clear' in DNI
Given you open de formulario 
When you press the 'clear' button
Then I should see ' ' in DNI 

Scenario 10: press the button 'submit'
Given you open de formulario 
When you press the button 'submit'
Then I shoud see 'Form submitted successfully'
