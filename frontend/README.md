
# Blog Website Frontend

This is the frontend of a blog website built using **React**, **React Router**, **Material-UI**, and **Yup**. The website allows users to log in, register, post, see others' posts, add and remove friends, and interact with posts by liking them. It also provides user feeds and specific user feeds for better content discovery.

## Features

- **Login & Register**: Users can log in and register to the website using Material-UI forms with form validation provided by Yup.
- **Create and View Posts**: Registered users can create posts, view posts from others, and interact with them.
- **Like Posts**: Users can like posts created by others.
- **Add/Remove Friends**: Users can add friends and remove them at any time.
- **User Feeds**: View a personalized feed of posts made by all users or a specific user.

## Tech Stack

- **React**: The frontend is built using React for creating dynamic user interfaces.
- **React Router**: Handles routing and navigation between login, register, and post pages.
- **Material-UI**: Provides pre-built UI components for faster development and a consistent design system.
- **Yup**: Used for form validation in the login and registration forms.
- **Axios**: Used for HTTP requests to interact with the backend.

## Setup

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

## Flow Chart of the Structure

Below is a flow chart that illustrates how users interact with the system and navigate through different pages:

```plaintext
                       +---------------------+
                       |     Login Page      |
                       +---------------------+
                             |
                             v
                  +-----------------------+
                  |    Register Page      |
                  +-----------------------+
                             |
                             v
                  +-----------------------+                +---------------------+
                  |     Home Feed Page    | <-------------- |     Create Post     |
                  +-----------------------+                +---------------------+
                             |                                      |
                             v                                      v
                  +-----------------------+                +---------------------+
                  |    User Feed Page     | --------------> |      Like Post      |
                  +-----------------------+                +---------------------+
                             |
                             v
                  +-----------------------+
                  |    Add/Remove Friends |
                  +-----------------------+
```

## Development

- **To start the development server**, run `npm start`.
- **To build the production version**, run `npm run build`.

## Contributing

Feel free to fork the project, submit issues, and send pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License.
