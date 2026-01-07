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
- Role-based access control
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
│   ├── middleware     # Express middleware functions 
│   ├── controllers    # Route handlers
│   ├── services       # Business logic layer
│   ├── models         # Sequelize models
│   ├── utils          # Helper functions
│   ├── helpers        # Utility functions for validation and processing
│   ├── lib            # Reusable libraries and modules
│   ├── database       # DB config and connection
│   ├── validators     # Contains data validation 
│   ├── routes/        # API endpoints
│   └── index.js       # App entry point
│
├── .gitignore         # Files and folders to ignore in Git           
├── package.json       # Project metadata
├── package-lock.json  # Exact dependency versions (auto-generated)
└── README.md          # Project documentation
```

## API Endpoints

### Auth Management

```bash
POST    /auth/login            → Login  
```

### User Management

```bash
GET    /users                  → Get all users  
GET    /user/:id               → Get user by ID  
POST   /user/professor         → Create a professor user 
POST   /user/administrator     → Create an administrator user  
PUT    /user/password/:id      → Update user password  
DELETE /user/:id               → Delete a user  
```

### Degree Management

```bash
GET    /degrees                → Get all degrees  
GET    /degree/:id             → Get degree by ID  
POST   /degree                 → Create a degree  
PUT    /degree/:id             → Update a degree
```

### Student Management

```bash
GET    /students               → Get all students
GET    /student/:id            → Get student by ID   
POST   /student                → Create a student
PUT    /student/:id            → Update a student   
```

### Course Management

```bash
GET    /courses                → Get all courses
GET    /course/:id             → Get course by ID   
POST   /course                 → Create a course
PUT    /course/:id             → Update a course
```

### Professor_Degree Management

```bash
GET    /professors/degree      → Get all professor_degree associations
GET    /professor/degree/:id   → Get professor_degree by ID
POST   /professor/degree       → Assign a degree to a professor
PUT    /professor/degree/:id   → Update a professor_course relationship
```
### Course_Degree Management

```bash
GET    /courses/degree         → Get all courses_degree associations
GET    /course/degree/:id      → Get course_degree by ID
POST   /course/degree          → Assign a course to a degree
```

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/facundomoya/be-eduenroll.git
```

2. Install Dependencies

```bash
npm install
```

3. Environment Configuration

- Create a .env file in the root directory with your database credentials:

```env
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=eduenroll # this is an example of database name that you can use.
DB_PORT=your_port

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
JWT_ALGORITHM=HS256

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
