`#react` `#assembler-institute-of-technology` `#master-in-software-engineering` `#ReactEcommerce` `#ReactJS` `#ReactHooks` `#TailwindCSS` `#ReactHookForm` `#CustomHooks` `#StyledComponents` `#TypeScript` `#CSSModules` `#Figma` `#memo` `#UseMemo` `#Memoization` `#UseCallback` `#LazyLoading` `#Suspense` `#SkeletonScreens` `#LoadingPerformance` `#ReactOptimization`

<img src="https://i.ibb.co/p2DbrWk/AIT-2-0-Favicon-Principal.png" alt="AIT Logo" height="40px"/>

# ByteMarket by AIT  

### Welcome to ByteMarket by AIT
ByteMarket by AIT is an exceptional e-commerce platform where you can explore a diverse range of products and make purchases with ease. Browse through an extensive collection of cutting-edge products and indulge in a seamless shopping experience.

### An Exciting Opportunity
This project is an exciting opportunity for you to sharpen your frontend skills while building a feature-rich e-commerce platform. Dive into ByteMarket by AIT and gain hands-on experience implementing new functionalities, enhancing user experience, and optimizing performance, all under the guidance of Assembler Institute of Technology (AIT) expertise.

Bear in mind, that **The UI/UX will be highly valued, and the project will be sanctioned if the recording is longer than the given time or delivered out of time, even if it's just for a second.**

Let's create a seamless shopping experience together! Happy coding!

![ByteMarket AIT](https://res.cloudinary.com/dtvp3u4ql/image/upload/f_auto,q_auto/hjp1smphal2hawfvk8mc)

## Table of Contents <!-- omit in toc -->

- [🔧 Instructions](#-instructions)
- [🗃️ Data Model](#️-data-model)
    - [📦 Products](#-products)
    - [👤 Users](#-users)
- [🚀 Phase 0: Figma and Clickup](#-phase-0-figma-and-clickup)
- [⚙ Phase 1: Prop-drilling, useState, useEffect, Conditionals, and Error Handling](#-phase-1-prop-drilling-usestate-useeffect-conditionals-and-error-handling)
- [📚 Phase 2: React Router, useContext, Inputs, and Forms](#-phase-2-react-router-usecontext-inputs-and-forms)
- [🔄 Phase 3: Async/Await, React Router with dynamic and private Routes, and searchParams](#-phase-3-asyncawait-react-router-with-dynamic-and-private-routes-and-searchparams)
- [🎨 Phase 4: CSS Modules and Styled Components](#-phase-4-css-modules-and-styled-components)
- [🧠 Extra Phase 5: Memoization Techniques](#-extra-phase-5-memoization-techniques)
- [🛌 Extra Phase 6: Custom Hooks, Lazy Loading, and startTransition](#-extra-phase-6-custom-hooks-lazy-loading-and-starttransition)
- [🛍️ Extra Phase 7: Add-ons](#️-extra-phase-7-add-ons)
- [👩‍🎓👨‍🎓 Evaluation](#-evaluation)
- [📝 Learn More](#-learn-more)
- [👾 Installation Tips](#-installation-tips)
- [📃 License](#-license)

# Project Name

# 🔧 Instructions

Throughout this project, you will create the dashboard of your e-commerce platform. We will start with the contents covered during the classes and gradually escalate as we deepen our knowledge.

The main branch of the repository will have the favorite class solution of the previous project so that you can refer to it if you get stuck at any stage.

### 🗃️ Data Model

In this project, we will mainly work with a product list that is stored in a file named as `products.ts`, or as you wish, which you should use to render the products to the screen dynamically using a JavaScript loop `map`. We will have a single file with two main entities: `Products`and `Users`.

### 📦 Products

- The "products" array contains information about different products available in the e-commerce platform.
- Each product has an "id," "name," "price," "stock," "image" URLs, "description," "category," "brand," "rating," and an array of "reviews" (with review "id," "userId," "rating," "comment," and "date").
- The "filters" array provides additional categorization for the products.

```bash
{
  "products": [
    {
      "id": "64c9faed738507dddfc7c73c",
      "name": "Product_1",
      "price": 10,
      "stock": 50,
      "image": [
        "/src/assets/images/productsSmall/product_1.webp",
        "/src/assets/images/productsMedium/product_1.webp"
      ],
      "description": "This is Product 1. It's a great product for your needs.",
      "category": "Electronics",
      "brand": "Brand_XYZ",
      "rating": 4.5,
      "reviews": [
        {
          "id": 1,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
        },
        {
          "id": 2,
          "userId": 2,
          "rating": 4,
          "comment": "Good product. Recommended.",
          "date": "2023-08-02"
        }
      ],
      "filters": [
        "topsales",
        "ait premium"
      ]
    },
    {
      "id": "f91eb86a8f36c973d5e80a7c",
      "name": "Product_2",
      "price": 15,
      "stock": 30,
      "image": [
        "/src/assets/images/productsSmall/product_2.webp",
        "/src/assets/images/productsMedium/product_2.webp"
      ],
      "description": "Product 2 is a high-quality product with great features.",
      "category": "Home & Kitchen",
      "brand": "Brand_ABC",
      "rating": 4.0,
      "reviews": [
        {
          "id": 3,
          "userId": 1,
          "rating": 4,
          "comment": "Nice product. Worth the price.",
          "date": "2023-08-03"
        }
      ],
      "filters": [
        "topsales",
        "discounts"
      ]
    }
  ]
}

```

### 👤 Users

```bash
{
  "users": [
    {
      "id": 1,
      "name": "random_user_123",
      "password": "RandomPassword123!",
      "email": "random_user_123@example.com",
      "cart": [],
      "wishlist": [
        {
          "id": "64c9faed738507dddfc7c73c",
          "name": "Product_1",
          "price": 10,
          "stock": 50,
          "image": [
            "/src/assets/images/productsSmall/product_1.webp",
            "/src/assets/images/productsMedium/product_1.webp"
          ],
          "description": "This is Product 1. It's a great product for your needs.",
          "category": "Electronics",
          "brand": "Brand_XYZ",
          "rating": 4.5,
          "reviews": [
            {
              "id": 1,
              "userId": 1,
              "rating": 5,
              "comment": "Great product! I love it.",
              "date": "2023-08-01"
            },
            {
              "id": 2,
              "userId": 2,
              "rating": 4,
              "comment": "Good product. Recommended.",
              "date": "2023-08-02"
            }
          ],
          "filters": [
            "topsales",
            "ait premium"
          ]
        },
        {
          "id": "f91eb86a8f36c973d5e80a7c",
          "name": "Product_2",
          "price": 15,
          "stock": 30,
          "image": [
            "/src/assets/images/productsSmall/product_2.webp",
            "/src/assets/images/productsMedium/product_2.webp"
          ],
          "description": "Product 2 is a high-quality product with great features.",
          "category": "Home & Kitchen",
          "brand": "Brand_ABC",
          "rating": 4.0,
          "reviews": [
            {
              "id": 3,
              "userId": 1,
              "rating": 4,
              "comment": "Nice product. Worth the price.",
              "date": "2023-08-03"
            }
          ],
          "filters": [
            "topsales",
            "organic"
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "john_doe",
      "password": "JohnDoe123!",
      "email": "john@example.com",
      "cart": [
        {
          "id": "64c9faed738507dddfc7c73c",
          "name": "Product_1",
          "price": 10,
          "stock": 50,
          "image": [
            "/src/assets/images/productsSmall/product_1.webp",
            "/src/assets/images/productsMedium/product_1.webp"
          ],
          "description": "This is Product 1. It's a great product for your needs.",
          "category": "Electronics",
          "brand": "Brand_XYZ",
          "rating": 4.5,
          "reviews": [
            {
              "id": 1,
              "userId": 1,
              "rating": 5,
              "comment": "Great product! I love it.",
              "date": "2023-08-01"
            },
            {
              "id": 2,
              "userId": 2,
              "rating": 4,
              "comment": "Good product. Recommended.",
              "date": "2023-08-02"
            }
          ],
          "filters": [
            "topsales",
            "ait premium"
          ],
          "quantity": 2
        }
      ],
      "wishlist": [
        {
          "id": "f91eb86a8f36c973d5e80a7c",
          "name": "Product_2",
          "price": 15,
          "stock": 30,
          "image": [
            "/src/assets/images/productsSmall/product_2.webp",
            "/src/assets/images/productsMedium/product_2.webp"
          ],
          "description": "Product 2 is a high-quality product with great features.",
          "category": "Home & Kitchen",
          "brand": "Brand_ABC",
          "rating": 4.0,
          "reviews": [
            {
              "id": 3,
              "userId": 1,
              "rating": 4,
              "comment": "Nice product. Worth the price.",
              "date": "2023-08-03"
            }
          ],
          "filters": [
            "topsales",
            "organic"
          ]
        }
      ]
    }
  ]
}
```

- The "users" array contains information about different users registered on the e-commerce platform.
- Each user has an "id," "name," "password," and "email."
- Users have a "cart" array containing products added to their shopping cart with a "quantity" field, and a "wishlist" array containing products they wish to purchase later.
- The product information in "cart" and "wishlist" is similar to the "products" array but only includes the relevant product details for each user.

### 🚀 Phase 0: Figma and Clickup

In Phase 0, we will use two essential tools: Figma and Clickup.

- Figma: A powerful design tool that will help you improve the web design and architecture of your e-commerce platform. With Figma, you can visualize the user interface and plan for reusable components.
- Clickup: A project management tool that will aid you in organizing your tasks efficiently. You can track progress, manage tasks, and collaborate effectively with your team.

🚨 Requirements:

Familiarity with web design concepts and user interface (UI) design.
Basic knowledge of project management and task organization.

### ⚙ Phase 1: Prop-drilling, useState, useEffect, Conditionals, and Error Handling

In Phase 1, we will dive into the fundamentals of React development.

- Prop-drilling: Learn how to pass data from one component to another using props.
- useState: Understand how to manage state in functional components using the useState hook.
- useEffect: Learn how to perform side effects, such as data fetching and subscriptions, with the useEffect hook.
- Conditionals: Implement conditional rendering to display different UI components based on certain conditions.
- Error Handling: Learn error handling techniques to gracefully manage and display errors in your app.

- You should check if the cart item has already been added to the cart to only update the quantity instead of adding it again. You should stablish a quantity limit for each product that could depend upon the stock you stablish on your `products.js` data.
- Store the items in local storage and load them if the page is reloaded so that the cart items are not lost of page refresh
- Each time the page is refreshed you should load the cart items from local storage to save them in the React state so that the app renders with the contents from local storage if there are any of them. Otherwise, the cart should display the default message of “Your cart is empty”

As we go along the first lessons, each product should have the event listeners and methods needed to handle the UI interactions needed such as adding the product to the cart.

#### Add to cart

During the first stage, you will be required to have a counter for the quantity of products you would like to have directly on each product. Clicking the `Add to Cart` button should add the product that was clicked to the shopping cart.

By default, the shopping cart will be empty.

The items in the cart should be able to render in the shopping cart when the `Add to Cart` button is clicked to add products to the cart. You can set any default items at the start.

#### Shopping cart

Once a product has been added to the cart you should be able to:

- Edit the product quantity using the select element which will update the cart’s total price
- Remove items from the cart which will update the cart’s total price
- The cart total price should always be updated so that it represents the total cost of all the items in the cart
- When the cart is empty you should conditionally render a message inside the cart saying that the cart is empty. Then, when the cart has had items added, you should instead render the cart items and remove the default message.

### State management

You should use React to handle the state management in the app. You cannot use a state management library.

⚛️ By the end of Phase 1, you will be able to create a basic home page and a side checkout component. Additionally, you will use useEffect to work with local storage or cookies to manage data efficiently.

🚨 Requirements:

Basic understanding of JavaScript and React concepts.

### 📚 Phase 2: React Router, useContext, Inputs, and Forms

In Phase 2, we will level up our React skills by introducing more advanced concepts.

- React Router: Learn how to implement client-side routing and navigation using React Router. This will enable you to create different pages and handle user interactions effectively.
- useContext: Understand how to use the useContext hook to share state across components without prop drilling.
- Inputs and Forms: Implement forms and handle user input to create functionalities such as login, register, and logout pages.

⚛️ By the end of Phase 2, you will be able to implement a login, register page and logout functionality. You will also implement a checkout cart feature in your e-commerce platform.

🚨 Requirements:

Familiarity with basic React concepts covered in Phase 1.

### 🔄 Phase 3: useReducer, Async/Await, React Router with dynamic and private Routes, and searchParams

In Phase 3, we will further enhance our e-commerce platform by introducing asynchronous programming.

- useReducer: Learn how to manage complex state logic using the useReducer hook.
- Async/Await: Learn how to work with asynchronous code using Async/Await. This will allow you to make API requests and handle data asynchronously.
- React Router with dynamic and private Routes: Implement dynamic and private routes to handle different user interactions and protect sensitive pages that require authentication.
- searchParams: Use searchParams to interact with URL query parameters and create detailed product pages.

⚛️ By the end of Phase 3, you will have a fully functional e-commerce platform with complex state management, dynamic and private routes and detailed product pages.

🚨 Requirements:

Familiarity with complex state management, asynchronous programming concepts and handling API requests.

### 🧠 Extra Phase 4: Memoization Techniques

In this optional Extra Phase, we will explore memoization techniques.

- Memoization: Learn how to optimize performance by caching the results of expensive function calls. Memoization can significantly improve the speed of your app, especially when dealing with large datasets or complex computations.

🚨 Requirements:

Solid understanding of JavaScript and React concepts.

### 🛌 Extra Phase 5: Custom Hooks, Lazy Loading, startTransition, and React Hook Form

In this optional Extra Phase, we will dive into custom hooks, lazy loading, startTransition, and react hook form.

- Custom Hooks: Learn how to create custom hooks to encapsulate and share logic across components. Custom hooks make your code more modular and reusable.
- Lazy Loading: Implement lazy loading to load non-critical resources only when they are needed. This can significantly improve the speed and performance of your app.
- startTransition: Use startTransition to improve the user experience during state transitions, making the app feel more responsive and smooth.
- React Hook Form: Moving away from uncontrolled to controlled forms. 

🚨 Requirements:

Advanced understanding of React hooks and their use cases.

### 🎨 Extra Phase 6: CSS Modules and Styled Components

In Phase 6, we will focus on improving the styling of our e-commerce platform.

- CSS Modules: Learn how to use CSS Modules to encapsulate styles and avoid class name collisions. This will improve the maintainability of your CSS code.
- Styled Components: Explore Styled Components, a library that allows you to write CSS directly within your JavaScript code. This will enable better organization and reusability of styles.

⚛️ By the end of Phase 6, your e-commerce platform will have a polished and well-structured user interface.

🚨 Requirements:

Familiarity with React components and their styling.

### 🛍️ Extra Phase 7: Add-ons

In this optional Extra Phase, we will add more advanced features to our e-commerce platform.

- Wishlist with useReducer: Implement a wishlist feature using the useReducer hook to manage wishlist items.
- .env: Use environment variables to handle sensitive data or configuration settings securely.
- React Helmet for SEO: Improve search engine optimization by using React Helmet to manage meta tags and page titles.
- Admin Login: Implement an admin login functionality to secure administrative actions.
- Cross-selling: Introduce cross-selling techniques to recommend related products to users.
- Shipping/Product Discounts at Checkout: Apply shipping or product discounts at checkout to enhance the user experience.
- Discounts for New Users: Offer special discounts to new users to encourage sign-ups.
- Shopping History: Implement a shopping history feature for users to track their past purchases.
- Promotions: Introduce promotional offers or coupon codes to attract customers.

🚨 Requirements:

Proficiency in React and state management concepts.

## 👩‍🎓👨‍🎓 Evaluation

The final evaluation for the e-commerce platform project will be based on the completion of different phases:
- Phase 0, 1, and 2 will account for 75% of the total evaluation.
- Phase 3 will account for the remaining 25% of the total evaluation.
- Phases 4, 5, 6 and 7 will contribute towards extra points. There is an extra 25% that can be earned based on how many aspects of these phases the student successfully meets. This grading system aims to encourage students to focus on mastering the foundational concepts in the earlier phases while providing opportunities to earn additional credit by tackling more advanced features in the optional Phase 7.

## 📝 Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## 👾 Installation Tips

1. Create your own GitHub repository and create your own folder:
```bash
$ mkdir ait-ecommerce-vite-project
$ cd ait-ecommerce-vite-project
$ git clone https://yourgithubprojectrepository.com
```
Install the dependencies:

If you are using npm, run:
```bash
$ npm create vite@latest
```
#### If you are using pnpm, which we highly recommend, run:
```bash
$ pnpm create vite
```
If you are using yarn, run:
```bash
$ yarn create vite
```

#### Start the development server:

If you are using npm, run:
```bash
$ npm run dev
```

If you are using pnpm, run:
```bash
$ pnpm dev
```
If you are using yarn, run:
```bash
$ yarn dev
```

The app will be available at http://localhost:3000/

## 📃 License

Licensed under the [MIT License](./LICENSE).
