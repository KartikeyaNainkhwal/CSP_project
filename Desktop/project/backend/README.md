# Socialytic Backend README

## Overview

**Socialytic** is the backend for a blog website that provides user authentication, post management, and user interactions. Users can register, log in, create posts, view and interact with posts, and manage friendships.

---

## Features

1. **Authentication**
   - Secure user registration and login with password hashing (bcrypt).
   - JWT-based token authentication.

2. **Post Management**
   - Create and share posts.
   - View all posts in a global feed.
   - View posts by a specific user.

3. **Friendship Management**
   - Add friends.
   - Remove friends.

4. **Post Interactions**
   - Like/unlike posts for engagement.

---

## Directory Structure

```plaintext
Socialytic/
│
├── routes/
│   ├── auth.js         # Handles user authentication
│   ├── posts.js        # Routes for post-related operations
│   ├── users.js        # Routes for user-related operations
│
├── models/
│   ├── post.js         # Schema for posts
│   ├── user.js         # Schema for users
│
├── controllers/
│   ├── post.js         # Handles post-related logic
│   ├── user.js         # Handles user-related logic
│
├── middleware/
│   ├── auth.js         # Verifies JWT for protected routes
│
├── .env                # Environment variable configuration
├── index.js            # Main server entry point
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Workflow Diagram

```plaintext
                   +---------------------+
                   |   Authentication    |
                   +---------------------+
                   | - Register User     |
                   | - Login User        |
                   | - JWT Token Handling|
                   +----------+----------+
                              |
           +------------------v-------------------+
           |                                      |
+------------------------+            +------------------------+
|       Friend Mgmt      |            |         Posts          |
+------------------------+            +------------------------+
| - Add Friend           |            | - Create Posts         |
| - Remove Friend        |            | - View All Posts       |
+------------+-----------+            | - View User Posts      |
             |                        +-----------+------------+
             |                                    |
+------------v-----------+            +-----------v------------+
|   Post Interactions    |            |        Output           |
+------------------------+            +------------------------+
| - Like Post            |            | - Feed / Posts Display  |
| - Unlike Post          |            +------------------------+
+------------------------+
```

---

## Technologies Used

- **Backend Framework:** Node.js (Express.js)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Password Hashing:** bcrypt

---

## API Endpoints

### **Authentication**
- **POST** `/auth/register` - Register a new user.
- **POST** `/auth/login` - Log in an existing user.

### **Posts**
- **POST** `/posts` - Create a new post.
- **GET** `/posts` - Get all posts (global feed).
- **GET** `/posts/:userId` - Get posts from a specific user.

### **Users**
- **GET** `/users/:id` - Get user details.
- **PATCH** `/users/add-friend/:friendId` - Add a friend.
- **PATCH** `/users/remove-friend/:friendId` - Remove a friend.

---

## Prerequisites

1. **Node.js**  
   Install Node.js (v14 or higher).

2. **Dependencies**  
   Install the required npm packages by running:  
   ```bash
   npm install
   ```
---

## Future Enhancements

1. Add comment functionality for posts.
2. Introduce notifications for friend requests and post interactions.
3. Enable profile picture uploads for users.
4. Implement search functionality for posts and users.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
