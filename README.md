# UnlinkedIn

A full-stack social media platform clone, built to showcase skills in modern web development using the MERN stack and a variety of powerful tools. This application allows users to create an account, manage their profiles, post updates, interact with other users' content, and receive real-time notifications.

## 🚀 Live Demo

[Check out the live application here!](https://unlinkediin.netlify.app/login)
(Since the backend is hosted on free Render server, it may take few seconds to start for the first time).

## ✨ Features

- **User Authentication**: Secure signup, login, and session management using JWT and HTTP-only cookies.
- **Profile Management**: Users can create and update their profiles, including a profile picture and bio.
- **Post Interaction**: Create, read, update, and delete posts.
- **Engage with Content**: Like and comment on posts.
- **Real-time Notifications**: Receive instant notifications for likes, comments, and new followers.
- **Media Uploads**: Securely upload and manage images (e.g., profile pictures, post images) to the cloud.

## 🛠️ Tech Stack

This project is a testament to a full-stack approach, utilizing a robust set of technologies for both the frontend and backend.

### **Frontend**

- **Framework**: [**React**](https://reactjs.org/)
- **Styling**: [**Tailwind CSS**](https://tailwindcss.com/)
- **Data Fetching & State Management**: [**TanStack Query**](https://tanstack.com/query/latest)
- **Routing**: [**React Router DOM**](https://reactrouter.com/)
- **Animations**: [**Framer Motion**](https://www.framer.com/motion/)
- **HTTP Client**: **Axios**
- **Other**: **Firebase** (for specific functionality like real-time features)

### **Backend**

- **Runtime Environment**: [**Node.js**](https://nodejs.org/en/)
- **Framework**: [**Express.js**](https://expressjs.com/)
- **Language**: **TypeScript**
- **Database**: **PostgreSQL**
- **ORM**: [**Prisma**](https://www.prisma.io/)
- **Authentication**: [**JSON Web Tokens (JWT)**](https://jwt.io/) and **Bcrypt** for password hashing.
- **Image Uploads**: **Multer** and [**Cloudinary**](https://cloudinary.com/) for cloud storage.
- **Data Validation**: **Zod**
- **Other**: **Cors**, **Dotenv**, **Cookie-parser**.

## 💻 Getting Started

Follow these instructions to set up the project locally on your machine.

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [PostgreSQL](https://www.postgresql.org/)
- A **Cloudinary** account for image uploads.
- A **Mailtrap** account (optional, for email functionality).

### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[your-github-username]/[your-repo-name].git
    cd [your-repo-name]
    ```

2.  **Navigate to the backend directory and install dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory and add your environment variables:
    ```
    # Database
    DATABASE_URL="postgresql://[user]:[password]@localhost:5432/[your_db_name]"

    # JWT Authentication
    JWT_SECRET="your_jwt_secret"
    COOKIE_SECRET="your_cookie_secret"

    # Cloudinary for Image Uploads
    CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

    # Mailtrap (Optional)
    # MAILTRAP_USER="your_mailtrap_user"
    # MAILTRAP_PASS="your_mailtrap_pass"
    ```

4.  **Run database migrations:**
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Navigate to the frontend directory and install dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

6.  **Create a `.env` file** in the `frontend` directory:
    ```
    VITE_BACKEND_URL="http://localhost:8000"
    ```

7.  **Start the development servers:**
    * In the `backend` directory: `npm run dev`
    * In a new terminal, in the `frontend` directory: `npm run dev`

The application should now be running on `http://localhost:5173` (or similar).


