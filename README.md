# Clinic Management System

## Overview

The Clinic Management System is a web-based application designed to streamline communication and data management between doctors and receptionists in a clinic setting. It allows doctors to manage patient information and prescriptions, while receptionists handle token generation and billing.

## Features

- **Doctor Login:** Secure login for doctors to access their dashboard.
- **Receptionist Login:** Secure login for receptionists to access their dashboard.
- **Patient Management:** Doctors can view patient details and manage prescriptions.
- **Token Generation:** Receptionists can generate tokens for new patients.
- **Billing:** Generation and management of bills for patients.
- **Patient History:** Access to detailed patient medical history.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Firebase (for authentication, database storage)



Node.js (for local development, if required)
- Firebase Account (for database and authentication)

### Step 1: Clone the Repository

```bash
git clone https://github.com/muskanshaha04/clinic-management-system.git
cd clinic-management-system
Step 2: Setup Firebase
Go to Firebase Console.
Create a new project.
Go to Project Settings and add a new web app.
Copy the Firebase configuration object and update the firebaseConfig.js file with your Firebase credentials.
Step 3: Update Firebase Rules
Ensure that your Firebase database rules are set to allow read and write operations during development.
Example rules for development:
json
Copy code
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
Step 4: Open the Project
Open the project folder in your code editor.
Open index.html in your browser to start.
Step 5: Start Developing
For HTML/CSS/JavaScript Changes: Edit the respective files in the /css, /js, and root directory.
For Firebase Integration: Ensure Firebase settings are correctly updated in firebaseConfig.js.
Usage
Index Page:

Navigate to index.html to choose the role (Doctor or Receptionist) and proceed to the respective login page.
Login Pages:

Use doctor-login.html for doctors and receptionist-login.html for receptionists to log in.
Dashboards:

Doctor Dashboard (doctor-dashboard.html): Manage patients and add prescriptions.
Receptionist Dashboard (receptionist-dashboard.html): Generate tokens and manage records.
Patient History Page:

Navigate to patient-history.html to search and view patient medical history.
Billing Page:

Use billing.html to generate and manage patient bills.
Contributing
Fork the repository and create a new branch for your changes.
Submit a pull request with a clear description of the changes you have made.
License
This project is licensed under the MIT License.

Contact
For any questions or issues, please contact:

Name: Muskan Shah
Email: [muskanshah.developer@gmail.com]
GitHub: muskanshah04
