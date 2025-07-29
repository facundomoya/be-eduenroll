# EduEnroll – Backend Practice Project

## Project Description

EduEnroll is a backend-only practice project focused on learning and applying modern Node.js development techniques. It simulates a basic educational management system to demonstrate the creation of RESTful APIs, the use of Sequelize ORM for database operations, and the implementation of backend architectural patterns.

Note: This project is still in development and intended for backend practice purposes only.  
No frontend is included.

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
- Support for students, professors, and administrators
- Role-based access control (RBAC)
- Secure password handling

### File Upload & Management
- PDF file upload with Multer
- File validation and storage
- Secure file access and download
- Error handling for file operations

---

## Technologies Used

### Backend Core
- Node.js – Runtime environment
- Express.js – Web framework
- Sequelize ORM – Database abstraction
- MySQL / PostgreSQL – Relational database

### File Handling
- Multer – Middleware for file upload
- Native fs and path modules

### Development Tools
- ES6 Modules
- dotenv – Environment configuration
- Git – Version control

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
   - Migrations and seeders

3. API Design Patterns
   - Separation of concerns
   - RESTful practices

4. Service Layer Architecture
   - Isolated business logic
   - Reusable service functions
   - Scalable and testable structure

5. File Operations
   - Secure PDF upload and storage
   - File retrieval endpoints
   - Input validation

---

## Project Structure

```text
eduenroll/
├── src/
│   ├── controllers/     # Route handlers
│   ├── services/        # Business logic layer
│   ├── models/          # Sequelize models
│   ├── utils/           # Helper functions
│   ├── database/        # DB config and connection
│   └── routes/          # API endpoints
├── uploads/             # File storage (PDFs)
├── package.json         # Project metadata
└── README.md            # Project documentation
```

## API Endpoints

### User Management

```bash
GET    /users                → Get all users  
GET    /users/:id            → Get user by ID  
POST   /users/professor      → Create a professor  
POST   /users/admin          → Create an admin  
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

### File Operations

```bash
GET    /users/:id/pdf        → Download a users PDF
POST   /upload               → Upload a PDF file
```

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/username/eduenroll.git
```

2. Install Dependencies

```bash
npm install
```

3. Environment Configuration

- Create a .env file in the root directory with your database credentials:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=eduenroll
```

4. Database Setup (Sequelize)

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. Run the Development Server

```bash
npm run dev
```

---

## Project Status

In progress 🚧

This project is currently under development as a backend learning exercise. Contributions and improvements are welcome.
