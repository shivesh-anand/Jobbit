# Jobbit - Job Tracker Application

Jobbit is a powerful MERN (MongoDB, Express, React, Node.js) stack-based job tracker application. It helps users efficiently manage their job search journey by providing a user-friendly interface and various features for organizing and tracking job applications.
Access the deployed application at [Jobbit](https://jobbit.onrender.com/).

## Features

- **User Authentication:** Jobbit implements secure authentication using JSON Web Tokens (JWT) and cookies to ensure only authorized users can access and modify their data. Cookies are used to store the authentication token securely on the client side.

- **Job Application Management:** Users can add, edit, and delete job applications, including details such as position, company, job location, type, status, and submission date.

- **Dashboard and Application Statistics:** The application offers a user-friendly dashboard with different pages providing an overview of the job search journey:

  - **Stats Page:** The Stats page displays the number of pending, interview, and declined applications from the user's list of jobs. It also showcases area chart and bar chart visualizations of monthly applications based on the user's job list for the last/latest six months.

  - **All Jobs Page:** This page presents a list of all job applications submitted by the user, providing easy access to application details and status.

  - **Add Jobs Page:** Users can use this page to add new job applications to their list, entering essential information like position, company, location, type, and status.

  - **Profile Page:** Users can update their profiles with personal details, contact information, and career preferences.

- **Search and Filters:** Jobbit supports searching for job applications based on keywords, status, and job type. Users can also apply filters to display relevant job applications. The search function utilizes a custom debounce function, preventing frequent API calls and enhancing search performance.

- **Pagination:** To manage a large number of applications, Jobbit implements pagination, displaying a limited number of applications per page with navigation buttons.

- **Mock Data Generation:** Mockaroo is used to generate mock data for testing and development purposes. This allows for realistic data representation during development.

## Security Features

Jobbit prioritizes security and includes the following features to safeguard user data:

- **XSS Protection:** The application uses the `xss-clean` middleware to prevent cross-site scripting (XSS) attacks. This ensures that user-generated content is sanitized to prevent the execution of malicious scripts.

- **Express Mongo Sanitize:** Jobbit utilizes the `express-mongo-sanitize` middleware to protect against NoSQL injection attacks. The middleware automatically sanitizes user-supplied data, preventing malicious queries that could compromise the database.

- **Helmet:** The application incorporates the `helmet` middleware to enhance security by setting various HTTP headers. These headers help mitigate common security vulnerabilities, such as Clickjacking and Cross-Site Script Inclusion (XSSI).

## Technologies and Tools Used

The application is built using the following technologies and tools:

**Frontend:**
- React: JavaScript library for building user interfaces with a component-based approach.
- React Icons: Library for using icons in React components, providing a wide range of icons for visual appeal.
- Recharts: Charting library for React, enabling the creation of interactive and visually appealing charts.
- React Router: For handling routing in React applications, enabling navigation and rendering of different components based on URLs.

**Backend:**
- Node.js: JavaScript runtime for building server-side applications, allowing running JavaScript on the server.
- Express.js: Web application framework for Node.js, simplifying the process of building robust APIs.
- MongoDB: NoSQL database for storing application data with flexibility and schema-less storage.
- Mongoose: ODM library for MongoDB, simplifying interactions with the database by providing a schema-based model.
- JSON Web Tokens (JWT): For secure user authentication and authorization through tokens.
- Bcrypt: For password hashing, providing a robust and efficient mechanism to protect user passwords.
- Cookies: For handling user authentication and maintaining user sessions.

**State Management:**
- useContext and useReducer: For managing application state, enabling centralized state management.
