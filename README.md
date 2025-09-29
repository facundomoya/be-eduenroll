# EduEnroll – Backend Project

## Project Description

EduEnroll is a backend project focused on learning and applying modern Node.js development techniques. It simulates a basic educational management system to demonstrate the creation of RESTful APIs, the use of Sequelize ORM for database operations, and the implementation of backend architectural patterns.

Note: No frontend is included.

---

## Main Features

### RESTful API Development
- Full CRUD operations for all entities
- Consistent and structured API responses
- Proper HTTP status code usage
- Global error-handling middleware

### Database Operations
- Sequelize ORM for data modeling
- Model relationships and associations
- Database migrations and seeders
- Query optimization patterns

### User Management
- Multi-role authentication system
- Support for professors and administrators
- Role-based access control (RBAC)
- Secure password handling

---

## Technologies Used

### Backend Core
- Node.js – Runtime environment
- Express.js – Web framework
- Sequelize ORM – Database abstraction
- MySQL – Relational database

---

## Code Management

The project was developed using a simple Git workflow, where:

- **Single active branch**: `master` (or `main` in modern repositories)

---

## Learning Objectives

This project allows hands-on practice with:

1. Express.js Framework
   - Route handling and middleware
   - Controller structure
   - Request/response lifecycle

2. Sequelize ORM
   - Defining models and associations
   - Running queries and managing data

3. API Design Patterns
   - Separation of concerns
   - RESTful practices

4. Service Layer Architecture
   - Isolated business logic
   - Reusable service functions
   - Scalable and testable structure

---

## Project Structure

```text
eduenroll/
├── src/
│   ├── config         # Config file
│   ├── middleware     # Express middleware for 
│   ├── controllers    # Route handlers
│   ├── services       # Business logic layer
│   ├── models         # Sequelize models
│   ├── utils          # Helper functions
│   ├── database       # DB config and connection
│   ├── validator/     # Contains data validation 
│   └── routes/        # API endpoints
│           
├── package.json       # Project metadata
└── README.md          # Project documentation
```

## API Endpoints

### User Management

```bash
GET    /users                → Get all users  
GET    /users/:id            → Get user by ID  
POST   /users/professor      → Create a professor user 
POST   /users/administrator  → Create an administrator user  
PUT    /users/:id            → Update a user  
DELETE /users/:id            → Delete a user  
```

### Degree Management

```bash
GET    /degrees              → Get all degrees  
GET    /degrees/:id          → Get degree by ID  
POST   /degrees              → Create a degree  
PUT    /degrees/:id          → Update a degree
```

### Student Management

```bash
GET    /student              → Get all students
GET    /student/:id          → Get student by ID   
POST   /student              → Create a student
PUT    /student/:id          → Update a student   
```

### Course Management

```bash
GET    /courses             → Get all courses
GET    /course/:id          → Get course by ID   
POST   /course              → Create a course
PUT    /course/:id          → Update a course   
```

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/facundomoya/eduenroll.git
```

2. Install Dependencies

```bash
npm install
```

3. Environment Configuration

- Create a .env file in the root directory with your database credentials:

```env
DB_NAME=eduenroll
DB_HOST=localhost
DB_PORT=your_port
DB_USER=your_user
DB_PASSWORD=your_password
JWT=your_jwt
ACTIVATE_LOGIN=true
```

4. Run the Development Server

```bash
npm run dev
```

---

## Development Team

This project was developed by Facundo Moya, student of **Information Systems Engineering** at the **Universidad Tecnológica Nacional - Facultad Regional Tucumán (UTN-FRT)**.

---

## Project Status

In progress 🚧

This project is currently under development.
