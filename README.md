🎵 Spotify Clone (Backend)

A Node.js + Express backend project inspired by Spotify.
This project focuses on building a professional backend architecture with authentication, role-based authorization, and media handling.

It was built as my first structured backend project while learning the MERN stack, where I implemented real-world backend concepts like controllers, middleware, database integration, and cloud media storage.

⸻

🚀 Features

👤 Authentication

User authentication system with JWT.

Endpoints:
	•	POST /api/auth/register
	•	POST /api/auth/login
	•	POST /api/auth/logout

Users receive a JWT token stored in cookies for secure authentication.

⸻

🎭 Role Based Authorization

Two roles are implemented:

User
	•	Can browse albums
	•	Can listen to music

Artist
	•	Can create music
	•	Can create albums
	•	Can manage their content

Role based protection is implemented using custom middlewares.

⸻

🎵 Music & Album APIs

Artist routes:
	•	POST /api/music/create
	•	POST /api/music/create-album

Public routes:
	•	GET /api/music/albums
	•	GET /api/music/album/:albumId

⸻

🛠 Tech Stack

Backend Technologies:
	•	Node.js
	•	Express.js
	•	MongoDB
	•	JWT Authentication

Other Tools:
	•	ImageKit (for media storage)
	•	Cookie based authentication
	•	REST APIs

⸻

📂 Project Architecture

This project follows a professional backend folder structure.


src
│
├── controllers
│   ├── auth.controller.js
│   ├── music.controller.js
│
├── middlewares
│   ├── auth.middleware.js
│
├── models
│   ├── user.model.js
│   ├── music.model.js
│   ├── album.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── music.routes.js
│
├── services
│   ├── storage.service.js
│
├── config
│   ├── db.js
│
└── server.js


🔐 Middlewares

Two authentication middlewares are implemented:

userAuth

Allows access to logged-in users and artists.

adminAuth

Allows access only to artists for creating music and albums.

Example:

userAuth → user + artist allowed

adminAuth → only artist allowed

☁️ Media Storage

Music cover images are uploaded using:

ImageKit

This keeps the server lightweight and scalable while storing media in the cloud.

⸻

📌 What I Learned

While building this project I learned:
	•	Professional backend folder structure
	•	MVC pattern
	•	Authentication with JWT
	•	Role based authorization
	•	Middleware architecture
	•	File uploads
	•	Cloud storage integration
	•	REST API design

⸻

⚡ Future Improvements
	•	Music streaming endpoint
	•	Like / favorite songs
	•	Playlist system
	•	Admin dashboard
	•	Pagination for albums

⸻

👨‍💻 Author

Ritesh Sharma

Phone: 9736900011
Email: riteshsharma140803@gmail.com
LinkedIn:
https://www.linkedin.com/in/ritesh-sharma-14s6/

⸻
