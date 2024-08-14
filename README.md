# ReachInbox Frontend Assignment

## Overview

Welcome to the ReachInbox frontend assignment repository. This project showcases the implementation of a dynamic, responsive outbound marketing system using ReactJS, NextJS, Tailwind CSS, and other modern web technologies. As part of the assignment for the Associate - Frontend Engineer position at ReachInbox.ai, this repository includes features such as dynamic data handling, API integration, Google authentication, and pixel-perfect design.

## Features

- **Dynamic Data**: The application fetches and displays data dynamically from APIs.
- **API Integration**: Seamless integration with backend APIs using Axios for data retrieval and manipulation.
- **Responsive Design**: The UI adapts to various screen sizes and devices.
- **Google Authentication**: Implemented Google login functionality using the provided API.
- **Pixel-Perfect Design**: Adheres to the design specifications provided in Figma.
- **Dark and Light Themes**: Users can switch between dark and light themes for better user experience.

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/reachinbox-frontend-assignment.git
   cd reachinbox-frontend-assignment
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Configure the Redirect URL**

   Open `src/pages/LoginPage.jsx` and update the `redirectUrl` variable to your localhost or domain as follows:

   ```jsx
      const redirect_uri = 'https://reachinbox-assignment-hemantsoni.vercel.app/login'; //change this to your localhost address or deployment link
      window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirect_uri}`;
   ```

4. **Start the Development Server**

   ```bash
   npm start
   ```

   This will start the development server and you can view the application at `http://localhost:3000`.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Build for Production

To create a production build, run:

```bash
npm run build
```

The build artifacts will be placed in the `build/` directory.

## Deployment

For deployment, you can deploy the contents of the `build/` directory to your preferred hosting service.

The project is already deployed you can check that from [Here](https://reachinbox-assignment-hemantsoni.vercel.app/)

## Contact

For any questions or feedback, please contact [sonih5190@gmail.com](mailto:sonih5190@gmail.com).
