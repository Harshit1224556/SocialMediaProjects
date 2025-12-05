🚀 Social Media Backend API

A fully functional Node.js + Express backend for a mini social media platform.
It supports user authentication, creating posts, AI-generated captions using Gemini, and image storage using ImageKit.

This project demonstrates real-world backend engineering practices like JWT authentication, middleware-based route protection, file uploads, and third-party API integrations.

✨ Features
🔐 Authentication

User Registration

User Login (JWT + Cookies)

Logout API

Password hashing

Secure cookie-based session handling

🛡 Route Protection

Custom middleware to verify whether the user is logged in before creating a post

Automatic rejection of unauthorized users

📝 Post Creation

Upload an image

Convert the image into Base64

Send it to Gemini AI for caption generation

Upload the image to ImageKit

Store the post in MongoDB with:

Caption (AI-generated)

Image URL

User ID

🤖 AI Integration

Integrated Gemini API to automatically generate creative or descriptive captions for uploaded images.

☁️ Media Storage

Using ImageKit with folder support for organized storage.

🗂 Tech Stack
Technology	Purpose
Node.js	Runtime environment
Express.js	Web framework
MongoDB + Mongoose	Database
JWT + Cookies	Authentication
Multer	File upload handling
Gemini API	AI caption generator
ImageKit	Image storage
dotenv	Environment management
📁 Project Structure
.
├── controllers
│   └── post.controller.js
├── middleware
│   └── auth.middleware.js
├── models
│   ├── user.model.js
│   └── post.model.js
├── routes
│   ├── auth.routes.js
│   └── post.routes.js
├── service
│   ├── ai.service.js
│   └── storage.service.js
├── app.js
├── server.js
└── README.md

🚀 API Endpoints
🔐 Authentication Routes
POST /register

Register a new user.

POST /login

Login user, returns JWT cookie.

GET /logout

Clears token cookie.

📝 Post Routes
POST /post

Create a new post (Requires login).

Middleware checks:

req.cookies.token → verify → req.user → continue


Body:

image (form-data file field)

Response:

{
  "message": "Post created successfully",
  "post": {...}
}

⚙️ Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_key_here
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL=your_url

🏗 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/yourusername/social-media-backend.git
cd social-media-backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create .env and fill in the required fields.

4️⃣ Run the server
npm start


Server will run on:
👉 http://localhost:5000

🎯 Future Improvements

User profile images

Like and comment system

Follow/unfollow feature

Feed algorithm

Refresh token system

Rate limiting & improved security
