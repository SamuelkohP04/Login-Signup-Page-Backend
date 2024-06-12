# Login-Signup-Page-Backend

This repository contains the backend code for a login and signup page using MySQL, Node.js, Express and React. It is designed to handle user authentication and storage of user details in a MySQL database. 

## Features

- User Signup: Allows new users to create an account.
- User Login: Authenticates existing users.
- Data Validation: Ensures user input meets specific criteria.

## Technologies Used

- Node.js
- Express
- MySQL
- Axios (for handling HTTP requests)
- React (for the frontend, to be found in a separate repository)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [XAMPP](https://www.apachefriends.org/index.html) (for local MySQL server)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended for code editing)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Login-Signup-Page-Backend.git
    cd Login-Signup-Page-Backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

    - Open XAMPP and start the MySQL module.
    - Create a database named `signup`.
    - Create a table named `login` with the following schema:

        ```sql
        CREATE TABLE `login` (
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `name` varchar(255) NOT NULL,
          `email` varchar(255) NOT NULL,
          `password` varchar(255) NOT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        ```

4. **Configure environment variables:**

    - Create a `.env` file in the root directory and add the following:

        ```env
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=
        DB_NAME=signup
        PORT=7999
        ```

### Running the Application

1. **Start the backend server:**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:7999`.

## API Endpoints

### Signup

- **URL:** `/signup`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**

    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "UserPassword123!"
    }
    ```

### Login

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Authenticates an existing user.
- **Request Body:**

    ```json
    {
      "email": "user@example.com",
      "password": "UserPassword123!"
    }
    ```

## Frontend

For the frontend part of this project, please refer to the [Login-Signup-Page-Frontend](https://github.com/your-username/Login-Signup-Page-Frontend) repository.

## Troubleshooting

If you encounter any issues, please make sure:
- The MySQL server is running.
- The database and table are correctly set up.
- The environment variables in the `.env` file are correctly configured.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## Acknowledgments
- [YouTube Tutorial Video](https://www.youtube.com/watch?v=F53MPHqOmYI&ab_channel=CodeWithYousaf)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [XAMPP](https://www.apachefriends.org/index.html)
- [Visual Studio Code](https://code.visualstudio.com/)

