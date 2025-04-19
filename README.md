# Semester Project: UH Sugar Land Student Center

This project is a full-stack application for the University of Houston Sugar Land Student Center. It includes a responsive frontend website and a backend server to manage application data and logic.

---

## **Frontend**

The frontend is a responsive website built using HTML, CSS, and JavaScript. It provides users with information about the student center, allows them to book rooms, view FAQs, and contact the center.

### **Features**
1. **Dynamic Navigation Menu**
   - Implemented using JavaScript (`menu.js`).
   - Consistent across all pages with links to:
     - Home
     - FAQ
     - Book a Room
     - Contact
   - Responsive design with a hamburger menu for smaller screens.

2. **Pages**
   - **Home Page (`index.html`)**: Welcomes users and includes a virtual campus tour via YouTube.
   - **FAQ Page (`faq.html`)**: Provides answers to frequently asked questions.
   - **Book a Room Page (`booking.html`)**: Allows users to book rooms with a form and dynamic room details.
   - **Contact Page (`contact.html`)**: Includes a contact form for user inquiries.

3. **Styling**
   - Custom CSS (`style.css`) for responsive design and consistent branding.
   - Media queries for smaller screens.

4. **JavaScript Functionality**
   - `menu.js`: Dynamically generates the navigation menu and handles the hamburger menu toggle.
   - `script.js`: Adds functionality to the booking form, such as loading default values.


## Backend Application

This project contains the backend logic for the application. Below is an overview of the functionality provided by the `app.js` file.

### Features

- **Express Server**: The backend is built using Express.js, providing a robust and scalable server framework.
- **Routing**: Handles various API endpoints to manage application data and logic.
- **Middleware**: Includes middleware for parsing JSON, handling CORS, and logging requests.
- **Error Handling**: Implements error-handling mechanisms to ensure smooth operation.
- **Environment Configuration**: Supports environment variables for configuration.

### Getting Started

1. Clone the repository:
    ```
    git clone https://github.com/MEMEBOI98/semester-project.git
    cd semester-project/backend
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the server:
    ```
    node app.js
    ```

4. The server will run on the specified port (default: `3000`).

### API Endpoints

- **GET /api/resource**: Fetches resources.
- **POST /api/resource**: Creates a new resource.
- **PUT /api/resource/:id**: Updates an existing resource.
- **DELETE /api/resource/:id**: Deletes a resource.

### Dependencies

- `express`: Web framework for Node.js.
- `body-parser`: Middleware for parsing request bodies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.


### **How to Use**
1. Clone the repository:
   ```bash
   git clone https://github.com/MEMEBOI98/semester-project.git
   cd semester-project/frontend