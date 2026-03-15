# Factory Management System

A full-stack web application built with Python (Django), React.js, and MySQL.  
Allows CRUD operations for factories and employees with role-based access.

## Features
- Add, update, view, and delete factories
- Manage employees within each factory
- Role-based access and authentication
- Responsive UI using React.js
- REST API integration with Django backend

## Tech Stack
- **Backend:** Python, Django, Django REST Framework
- **Frontend:** React.js, HTML, CSS, Bootstrap
- **Database:** MySQL

## Project Structure
factory-management-system/
├─ manage.py
├─ webApp3/          # Django project
│  ├─ settings.py
│  ├─ urls.py
│  └─ ...
├─ Factory/          # Django app
│  ├─ models.py
│  ├─ views.py
│  ├─ serializers.py
│  └─ ...
├─ webapp_frontend_three/  # React frontend
│  ├─ src/
│  │  ├─ components/
│  │  └─ App.jsx
│  └─ package.json
└─ README.md

## Installation
1. Clone the repo: `git clone https://github.com/Sharif2610/factory-management-system.git`
2. Navigate to backend: `cd factory-management-system`
3. Install backend dependencies: `pip install -r requirements.txt`
4. Run migrations: `python manage.py migrate`
5. Start backend server: `python manage.py runserver`
6. Navigate to frontend: `cd webapp_frontend_three`
7. Install frontend dependencies: `npm install`
8. Start frontend: `npm start`
