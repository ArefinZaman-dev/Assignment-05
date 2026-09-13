# Dev Stack

A modern developer stack builder website where users can explore technologies and create their own personalized development stack.

## Technologies Used

- React.js
- JavaScript
- CSS
- JSON Data
- React Toastify
- Vite


## Features

1. Users can explore different development technologies with details.
2. Users can add technologies to their own stack and remove them anytime.
3. Responsive design for desktop, tablet, and mobile devices.


## React Questions


### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX to create UI components easily.


### 2. What is the difference between props and state?

Props are used to pass data from parent component to child component. State is used to manage data inside a component.


### 3. What does useState do?

useState is a React hook used to create and update component state.

I used useState to manage technologies, loading status, and selected stack.


### 4. What does useEffect do?

useEffect is used to perform side effects in React.

I used useEffect to load technology JSON data when the application starts.


### 5. Why does every item in a map list need a unique key?

A unique key helps React identify which item changed, added, or removed from a list.


### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

Example:
Showing empty stack message when no technology is selected.


### 7. How do you pass data from parent to child?

Data is passed using props from parent component to child component.

Child can send data back by calling a function received through props.