# Product Inventory Web Application
## Instructions on How to Set Up and Run the Project


Clone the repository:

```
git clone https://github.com/manicharan-12/Bindassdeal.git
cd Bindassdeal
```
## Frontend Setup
```
cd client
```
Install dependencies:
```
npm install
```
Start the development server:

```
npm start
```
## Backend setup:

```
cd Server
```
Install dependencies:
```
npm install
```
Start the backend server:

```
nodemon server.js
```

## Overview of the Application’s Functionality
### Login and Registration:
- Users can sign up by providing a username and password.
- Existing users can log in with their credentials.
- User credentials are securely stored and validated during the login process.

### Session Management:
- User sessions are maintained using cookies to ensure continuous authentication across different pages.
- Users can log out to end their session.

### Landing Page:
- Upon successful login, users are redirected to the landing page.
- The landing page displays a list of products with their details.

### Data Operations:
- Filtering: Users can filter the list of products based on specific criteria.

### CRUD Operations:
- Insert: Users can add a new product to the list.
- Delete: Users can remove a product from the list.

## Assumptions Made During Development

The backend server for handling authentication and CRUD operations is already set up and running at http://localhost:5000.

User credentials are securely stored and verified using appropriate security measures (e.g., hashing passwords).

The application is designed for demonstration purposes and may require additional features and enhancements for production use.
