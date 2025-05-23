# FallonBackend

This is the backend for the Fallon project, built with Node.js, Express, and MongoDB. It provides APIs for user authentication, feedback management, and admin functionalities.

---

## Features

- ✅ User authentication with JWT
- ✅ Admin authentication and role-based access control
- ✅ Feedback submission and retrieval
- ✅ Secure environment variable management
- ✅ MongoDB integration with Mongoose

---

## Project Structure

```
Backend/
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.js
├── config/
│   └── db.js
├── controllers/
│   ├── adminController.js
│   └── userController.js
├── middleware/
│   └── authmiddleware.js
├── models/
│   ├── feedbackModel.js
│   └── userModel.js
├── routers/
│   └── userRouter.js
```

---

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/FallonBackend.git
cd FallonBackend/Backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a `.env` file in the Backend directory** and add the following variables:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

4. **Start the server:**
```bash
npm start
```

---

## API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| POST   | `/login`         | Login as admin                  |
| POST   | `/logout`        | Logout admin                    |
| GET    | `/profile`       | Get admin profile (admin-only)  |
| GET    | `/getFeedback`   | Retrieve feedback (admin-only)  |
| POST   | `/postFeedback`  | Submit feedback                 |

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- cookie-parser
- dotenv

---


