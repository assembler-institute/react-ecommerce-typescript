`#react-basics` `#assembler-institute-of-technology` `#master-in-software-engineering`

# React E-commerce <!-- omit in toc -->

A demo app to learn the basics of React and to create a shopping cart using hooks.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Instructions](#instructions)
- [Extra steps 💯](#extra-steps-)
- [Technical Requirements](#technical-requirements)
- [Extra Technical Requerimients](#extra-technical-requirements)
- [Available Scripts](#available-scripts)
- [Support Resources](#support-resources)
- [License](#license)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run `npm i` or `yarn` in the terminal to install the dependencies.

Then, run `npm run start` or `yarn start` to start up the app.

The app will be run by default in the following url: `http://localhost:3000/`

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-institute/react-ecommerce-typescript.git
```

## Instructions

Throughout this week you will start creating the dashboard of your e-commerce. We will start this pill with the contents given during the class, and scalate as we get deepen into the information.

The `main` branch of the future repos will have the favourite class solution of the previous pill so that you can get started with it, should you get stucked at any stage.

### Instructions

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/blob/main/src/img/repo/react-basics-classes-initial.png?raw=true' width='600'>

Once you have installed the dependencies of the pill you will need to start using components in a way that is as reusable and modularized as possible.

Each UI element should be a React component, for example, buttons are UI elements that are reused in multiple places in the app so they should be extracted to React components.

### App features

Once you have modularized the app in components you will have to implement to logic so that you can create an ecommerce app.

#### Rendering the products

The products are stored in the `products.ts` file which you should use to render the products to the screen dynamically using a JavaScript loop `map`.

As we go along the first lessons, each product should have the event listeners and methods needed to handle the UI interactions needed such as adding the product to the cart.

#### Add to cart

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

During the first stage, you will be required to have a counter for the quantity of products you would like to have directly on each product. Clicking the `Add to Cart` button should add the product that was clicked to the shopping cart.

By default, the shopping cart will be empty.

The items in the cart should be able to render in the shopping cart when the `Add to Cart` button is clicked to add products to the cart. You can set any default items at the start.

#### Shopping cart

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

Once a product has been added to the cart you should be able to:

- Edit the product quantity using the select element which will update the cart’s total price
- Remove items from the cart which will update the cart’s total price
- The cart total price should always be updated so that it represents the total cost of all the items in the cart
- When the cart is empty you should conditionally render a message inside the cart saying that the cart is empty. Then, when the cart has had items added, you should instead render the cart items and remove the default message.

### State management

You should use React to handle the state management in the app. You cannot use a state management library.

## Extra steps 💯

Once you have finished the initial part of the pill you should implement the following steps to improve your skills:

<img src='https://github.com/assembler-institute/react-basics-hooks-shopping-cart/raw/main/src/img/repo/react-basics-classes-add-to-cart.png' width='600'>

- You should check if the cart item has already been added to the cart to only update the quantity instead of adding it again. You should stablish a quantity limit for each product that could depend upon the stock you stablish on your `products.ts` data.
- Store the items in local storage and load them if the page is reloaded so that the cart items are not lost on page refresh
- Each time the page is refreshed you should load the cart items from local storage to save them in the React state so that the app renders with the contents from local storage if there are any of them. Otherwise, the cart should display the default message of “Your cart is empty”

## Technical Requirements

### Next we leave you a series of technical requirements that will be evaluated:

- **Figma**: Or a similar platform, where you plan ahead of starting to code the look and feel of your application. As a frontender it is important that you visualize what you need ahead of time. It will ease the next steps when building your web application.

-  **useState**: Utilize the `useState` hook to manage component state and store data such as the shopping cart, user information, etc.
    
-  **useEffect**: Employ the `useEffect` hook to perform asynchronous operations, such as fetching data from an API, managing side effects, and updating the application state.
    
-  **useContext**: Use the `useContext` hook to access globally shared data between components without the need to manually pass properties. This can include user information, global configuration, etc.
    
-  **Routes**: Implement routing using library like `react-router-dom` . Define the necessary routes for different sections of the application, such as the home page, product page, shopping cart, etc.

-  **Protected Routes**: Implement protected routes to restrict access to certain pages or features that require authentication. For example, only allow authenticated users to access the user profile or the checkout process. Redirect unauthorized users to a login page.
    
-  **.map**: Use the `map` method to iterate over data lists, such as the product list, and dynamically render elements.
    
- **Architecture (folder structure)**: Organize your project following a coherent and scalable folder structure. For example:
    -   `/src`
        -   `/components`: Contains reusable components used in various parts of the application.
        -   `/pages`: Contains page-specific components for each page of the application.
        -   `/services`: Contains modules for interacting with external APIs or other services.
        -   `/utils`: Contains utilities and helper functions.
        -   `/styles`: Contains global style files or custom themes.
        
-  **Reusable components**: Create reusable components that can be used in different parts of the application. This promotes consistency and facilitates project maintenance and scalability.
    
-  **Static typing and use of interfaces and custom types**: Take advantage of TypeScript to add static typing to your application. Define interfaces and custom types to improve code readability, prevent errors, and enhance maintainability.

### Summary

- You should extract and modularize all the UI elements to React components
- The products must be rendered dynamically using JavaScript loops
- The products should be rendered as React components
- You cannot use external state management libraries
- All the components that require state should be created using React
- Use interfaces or custom types to define the data structures and properties of the components.
- Use `functional components` and `setState` methods to update the state of the application
- Take advantage of TypeScript to detect errors and improve code quality during development.


## [EXTRA] Technical Requirements

- **Responsiveness**: Check whether the website is responsive and works well across different devices and screen sizes.
-  **useReducer**: Utilize the `useReducer` hook to manage more complex states where actions and updates need to be performed. This can be useful for managing the shopping cart, authentication state, etc.
- **`.env` File**: Create a `.env` file to securely store sensitive information such as API keys, payment gateway configurations, and other environment-specific settings. This ensures that confidential data is not exposed in the source code.
- **Lazy Loading**: React Lazy and Suspense are built-in React features that allow you to lazily load components, improving the initial page load performance. By splitting your code into smaller chunks and loading them on-demand, you can provide faster load times for users and potentially improve SEO rankings.
- **React Helmet**: Allows you to dynamically update the document head of your React components. It helps you add important metadata such as title tags, meta descriptions, and canonical URLs to improve SEO and provide better control over how your pages appear in search engine results.
- **User Experience (UX)**: Evaluate the overall user experience by considering the website's layout, navigation, and design. Ensure that the interface is intuitive, user-friendly, and visually appealing. Focus on elements such as clear calls-to-action, easy-to-find product information, and smooth transitions between elements.
- **Performance**: Assess the performance of the website, paying attention to factors such as page load times, server response times, and overall responsiveness. Slow-loading pages can negatively impact user experience and lead to higher bounce rates.
- **Accessibility**: Ensure that the website meets accessibility standards to cater to users with disabilities. Pay attention to factors like proper semantic markup, keyboard navigation support, alternative text for images, and sufficient color contrast.
- **Error Handling**: Assess how well errors and exceptions are handled throughout the website. Verify that appropriate error messages are displayed when something goes wrong, and ensure that the website gracefully handles unexpected scenarios.
- **Documentation**: Review the documentation provided to start the project, including code comments, API documentation (if applicable), and any technical or design specifications. Well-documented projects are easier to understand and maintain in the long run.

## Available Scripts

In the project directory, you can run:

### `yarn start`  `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Support Resources

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

Licensed under the [MIT License](./LICENSE).
