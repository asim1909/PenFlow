<h1 align="center">Welcome to PenFlow Blogging Website ✍️</h1>

**PenFlow** is a powerful blogging platform that gives users the freedom to create, manage, and share their thoughts with the world. Whether you’re an aspiring writer or an experienced blogger, PenFlow provides all the tools you need to craft and publish your stories with ease.

---

## ✨ Key Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens), enabling personalized user sessions.
  
- **Content Management**: Complete control over blog posts with Create, Read, Update, and Delete (CRUD) functionality.

- **Comment System**: Readers can engage with articles by leaving comments, and authors can moderate or delete unwanted feedback.

- **Responsive Design**: Seamless experience across devices, ensuring readability whether on desktop or mobile.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (with Vite for development), HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for storing users, articles, and comments
- **Authentication**: JWT-based authentication for user security

---

## 🌍 Live Demo

Check out PenFlow in action at [https://penflow.com/](https://penflow-s67b.onrender.com/)

---

## 🔧 Installation Guide

Follow these steps to set up PenFlow locally:

### Prerequisites:
- Node.js (v14+)
- npm or yarn
- MongoDB (either locally installed or a remote instance)

### Steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/asim1909/penflow.git
    ```

2. Navigate to the project directory:
    ```bash
    cd penflow
    ```

3. Install dependencies for both frontend and backend:
    ```bash
    npm install
    ```

4. Set up the environment variables:
   - Create a `.env` file in the project root and add the following:

    ```plaintext
    PORT=3000
    DATABASE_URI=your_database_uri
    JWT_SECRET=your_jwt_secret_
    ```

    Make sure to replace `your_database_uri_here` with your actual MongoDB URI and `your_jwt_secret_here` with a secure secret key for JWT.

5. Start the application:

   - **Frontend** (run this in one terminal):
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

   - **Backend** (run this in another terminal):
    ```bash
    cd backend
    npm install
    npm run dev
    ```

    The frontend will be accessible at `http://localhost:5173` and the backend at `http://localhost:3000`.

---

## 🚀 Features Breakdown

### Home Page
- Lists trending articles, user feed, and tags for quick navigation.

### Sign In / Sign Up
- Provides users with the ability to create accounts and sign in securely using JWT.

### Article Editor
- Users can write and edit their blog posts using a rich Markdown editor.

### Article View
- View full articles with comments and author details.

### User Profiles
- Personalized profiles displaying published and favorited articles, with options to follow other users.

---

## 🤝 Contributing

We welcome contributions to PenFlow! Feel free to submit pull requests or report issues. Please check out the [CONTRIBUTING.md] for guidelines.

---

## Show Your Support

Give a ⭐️ if you like PenFlow and want to see more updates!

---

## 📞 Contact

Created by **Asim Rana** – feel free to reach out!
