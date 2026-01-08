Q1. Role of Frontend (FE)
The Frontend (FE) is the part of a web application that users can see and interact with. It runs in the browser and focuses on user experience.
Role of Frontend:
1. User Interface
Frontend designs how the website looks.
It includes layout, colors, buttons, text, images, forms, etc.
Technologies used: HTML, CSS, JavaScript
2. User Interaction
Handles user actions like clicks, typing, scrolling, form submission.
Shows alerts, validations, loading states, and error messages.
Makes the website interactive and responsive.
3. Communication with Backend
Sends requests to backend using APIs (GET, POST, PUT, DELETE).
Receives data from backend and displays it to the user.
Example: fetching user profile data and showing it on the page.
In short:
Frontend = What the user sees + how the user interacts.


Q2. Role of Backend (BE)
The Backend (BE) is the part of a web application that works on the server side. It handles logic, data, and security.
Role of Backend:
1. Server-side Processing
Handles requests sent from frontend.
Executes business rules and calculations.
Sends correct responses back to frontend.
2. Database Handling
Stores, reads, updates, and deletes data.
Manages user data, products, orders, etc.
Uses databases like MySQL, MongoDB, PostgreSQL.
3. Security and Authentication
Manages login and signup.
Verifies users using passwords, tokens, or sessions.
Protects sensitive data and prevents unauthorized access.
In short:
Backend = Logic + Data + Security.


Q3. Business Logic
What is Business Logic?
Business Logic is the set of rules and conditions that decide how an application works according to business requirements.
It controls:
What is allowed
What is not allowed
How data is processed
Real-World Examples of Business Logic:
1. E-commerce Website
Discount applied only if cart value is above ₹1000.
Out-of-stock products cannot be purchased.
Free delivery only for premium users.
2. Banking Application
Withdrawal not allowed if balance is insufficient.
Daily withdrawal limit is enforced.
Interest calculated based on account type.
3. Online Exam System
Timer automatically submits the test when time ends.
Students cannot retake the exam.
Marks calculated based on correct answers.
In short:
Business Logic = Rules that control application behavior.


Q4. Client–Server Model
What is Client–Server Model?
The Client–Server Model is an architecture where:
Client requests services
Server provides services
Components:
1. Client
The user’s device or browser.
Examples: Chrome browser, mobile app.
Sends requests (login, fetch data).
2. Server
A powerful computer that processes requests.
Stores data and applies logic.
Sends responses back to client.
3. Communication Between Them
Happens using HTTP/HTTPS.
Client sends request → Server processes → Server sends response.
Example:
Browser requests login → Server verifies → Response sent.


Q5. Three-Tier Architecture
What is 3-Tier Architecture?
3-Tier Architecture divides a web application into three separate layers for better structure and scalability.
Layers:
1. Presentation Layer
Frontend part (UI).
Displays data to user.
Built using HTML, CSS, JavaScript, React.
2. Application (Business) Layer
Contains business logic.
Processes requests and applies rules.
Built using backend languages.
3. Data Layer
Stores application data.
Includes databases.
Handles data storage and retrieval.
Why This Architecture Is Used:
Better organization
Easy maintenance
High scalability
Improved security


Q6. JavaScript as a Backend Language
Why JavaScript is Used as a Backend Language?
JavaScript can be used on the server using Node.js.
Reasons:
1. Performance
Uses non-blocking and event-driven architecture.
Handles multiple requests efficiently.
2. Ecosystem
Huge collection of packages using npm.
Easy integration with frontend.
3. Popular Backend Frameworks
Express.js
NestJS
Fastify
Advantage:
Same language for frontend and backend.