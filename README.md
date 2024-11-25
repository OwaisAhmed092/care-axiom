# Care-Axiom

## Introduction

Welcome to the project based on **NestJS**, a powerful framework for building efficient, reliable, and scalable server-side applications in Node.js. This project utilizes the **NestJS** framework along with **TypeORM** for database management and incorporates **microservices architecture** for better scalability and communication.

## Getting Started

To begin with the project, follow the steps below:

- **Clone Repository**: Clone this repository to your local machine.
- **Install Dependencies**: Navigate to the root directory of the project and install the required dependencies using npm. Command: `npm i`
- **Database Setup**: Ensure you have a **PostgreSQL** database set up. Import the provided `database.sql` file located in the `backup` folder of the project's root directory to initialize the database schema.
- **Environment Configuration**: Replace the database credentials in the `.env` files located in the project with your own database credentials.
- **Start RabbitMQ using Docker**: If you don’t already have RabbitMQ running locally, you can start it using Docker by running:  
  `docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management`  
  This will start RabbitMQ with the management plugin enabled, allowing you to manage queues, messages, and other configurations through the web UI at [http://localhost:15672](http://localhost:15672).
- **Start the Project**: Once dependencies are installed and database configuration is updated, you can start the project by running the following command:  
  `npm run start`
- **Explore APIs**: Utilize the provided **Postman collection** to interact with the APIs. The collection is available in the `backup` folder of the project's root directory.

## Technologies Used

- **NestJS Framework**
- **TypeORM**
- **PostgreSQL Database**
- **RabbitMQ** - For messaging and communication between microservices.
- **Microservices Architecture** - To separate concerns and allow for scalable communication between different services.

## Project Structure

The project follows a standard **NestJS** project structure with modules, controllers, services, and DTOs organized for better code maintainability and scalability. Microservices are integrated to ensure efficient communication between services.
