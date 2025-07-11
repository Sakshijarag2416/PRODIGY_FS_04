# PRODIGY_FS_04
Real-Time Chat Application
🔹 Internship Task: PRODIGY_FS_04
🔹 Internship Provider: Prodigy Infotech
🔹 Task Title: Real-Time Chat Application
1. Project Overview
This project is a real-time chat application developed as part of the internship task assigned by Prodigy Infotech. The objective of this task is to implement a messaging platform that allows users to communicate instantly using WebSocket technology.

The application is structured using a modular approach, with a clean separation between frontend and backend components. The backend is built with Node.js and Socket.IO, while the frontend is designed using HTML, CSS, and JavaScript to ensure a responsive and modern user interface.

2. Features Implemented
2.1 Core Functionality
Real-time message exchange using Socket.IO

Fully responsive chat interface with modern UI

Live message broadcast to all connected clients

Automatic scrolling to the latest messages

2.2 Chatbot Auto-Reply (Bonus Feature)
Basic chatbot logic for user interaction

Bot automatically replies when specific keywords are detected (e.g., hi, help, bye)

3. Optional Features (Future Scope)
User authentication (login/register)

Support for private messages and chat rooms

Chat history with persistent storage

File sharing (images, documents, etc.)

Online/offline user status indicators

Message typing indicators

4. Technologies Used
Component	Technology
Frontend	HTML5, CSS3, JavaScript (ES6)
Backend	Node.js, Express.js
WebSocket Layer	Socket.IO
Storage	In-memory (localStorage or live session), extendable to database

5. Project Folder Structure
bash
Copy
Edit
realtime-chat-app/
├── frontend/
│   ├── index.html       # Chat interface
│   ├── style.css        # Styling
│   └── client.js        # Frontend logic
├── backend/
│   └── server.js        # Express server + Socket.IO integration
6. How to Run the Project Locally
Step 1: Prerequisites
Ensure Node.js is installed on your system
Download from: https://nodejs.org

Step 2: Setup
bash
Copy
Edit
cd backend
npm install
node server.js
Step 3: Open in Browser
Open the following URL in your browser:

arduino
Copy
Edit
http://localhost:3000
You can open multiple tabs to test real-time chat interactions.

7. Conclusion
This project fulfills the requirements of Task-04 of the internship by successfully implementing a real-time messaging platform using WebSocket technology. The addition of a simple chatbot and responsive user interface enhances the user experience, and the application can be extended further with advanced chat features.
