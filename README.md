# Petshop Selector

This project consists of a web application that helps users find the best pet shop for bathing their dogs. The application is composed of a React frontend and a Node.js backend with Express.

## Project Structure

The project is organized as follows:

petshop-project/
├── backend/
│ ├── node_modules/
│ ├── app.js
│ ├── src/
│ │ ├── controllers/
│ │ │ └── petshopController.js
│ │ ├── routes/
│ │ │ └── petshopRoutes.js
│ │ └── services/
│ │ └── petshopService.js
│ ├── package-lock.json
│ └── package.json
├── frontend/
│ ├── node_modules/
│ ├── public/
│ │ ├── img/
│ │ │ └──  logo-petshop.png
│ │ ├── index.html
│ ├── src/
│ │ ├── components/
│ │ │ └── PetshopForm.js
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── index.js
│ │ └── index.css
│ ├── package-lock.json
│ ├── package.json
├── vercel.json
└── README.md



## Installation

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

The backend server will be running at `http://localhost:3000`.

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

The frontend application will be available at `http://localhost:3001`.

## Testing

### Backend

Automated backend tests use Jest and Supertest.

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Run the tests:
    ```sh
    npm test
    ```

### Frontend

Automated frontend tests use Jest and React Testing Library.

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Run the tests:
    ```sh
    npm test
    ```

## Code Structure

### Backend

- **app.js**: Configures and starts the Express server.
- **src/controllers/petshopController.js**: Controller that handles requests related to pet shops.
- **src/routes/petshopRoutes.js**: Defines the API routes.
- **src/services/petshopService.js**: Contains the business logic for finding the best pet shop.

### Frontend

- **public/index.html**: Main HTML file.
- **public/img/logo-petshop.png**: Pet shop logo.
- **src/components/PetshopForm.js**: Form component for inputting pet shop search criteria.
- **src/App.js**: Main component of the React application.
- **src/App.css**: Styles specific to the App component.
- **src/index.js**: Entry point of the React application.
- **src/index.css**: Global styles for the application.

## Features

- **Date Selection**: Allows selecting the date for the bath.
- **Dog Quantity**: Allows inputting the number of small and large dogs.
- **Find Best Petshop**: Sends the data to the backend and displays the best pet shop based on the provided criteria.

## Developer

- **Bernardo Ferreira Santos Rodrigues**
