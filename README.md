# ConnectUp

# Project Description

**ConnectUp** is social media application, where users can share their posts, like those posts and connect with other users. The app allows users to stay anonymous with randomly generated profile pictures, and update or delete their posts with ease.

# Screenshots

![ss1](https://user-images.githubusercontent.com/78133928/125120401-0b491f80-e110-11eb-949d-6f54c731e74b.jpg)

![ss2](https://user-images.githubusercontent.com/78133928/125120500-1d2ac280-e110-11eb-9477-3b52fa3a135d.jpg)

![ss3](https://user-images.githubusercontent.com/78133928/125120525-287dee00-e110-11eb-9f2c-ef8e83a7a617.jpg)

![ss4](https://user-images.githubusercontent.com/78133928/125120552-33388300-e110-11eb-83a2-1e42091dcfad.jpg)

![ss5](https://user-images.githubusercontent.com/78133928/125120575-3e8bae80-e110-11eb-9bc7-0cdff73f44bd.jpg)

![ss6](https://user-images.githubusercontent.com/78133928/125120603-4a777080-e110-11eb-9051-2b628a8cdd37.jpg)

![ss7](https://user-images.githubusercontent.com/78133928/125120626-5400d880-e110-11eb-96de-84ac79235572.jpg)

![ss8](https://user-images.githubusercontent.com/78133928/125120681-6c70f300-e110-11eb-9e5c-fa521448f952.jpg)

![ss9](https://user-images.githubusercontent.com/78133928/125120704-785cb500-e110-11eb-86d3-6a7d9d7abf3a.jpg)

![ss10](https://user-images.githubusercontent.com/78133928/125120726-814d8680-e110-11eb-90bd-700c3ad3d71d.jpg)

# Hosted URL

https://connectup.netlify.app/

# Test Credentials

Email: test2@gmail.com

Password: test2web

# Features Implemented

## 1. Frontend

- Each user has a profile page where they can see their individual posts, and a feed page where they can see the posts of other users as well.
- An interesting feature is the randomly generated profile pictures assigned to each user at sign up.
- The user can create posts with images and captions.
- The user can like posts of other users and like their own posts as well.
- Updation and deletion of posts can be done too.
- The user can log out from any page and get redirected to the landing page.

## 2. Backend

1. Auth Routes

- Sign up
- Log in
- Get User for user details
- Verification using JWT token

2. Posts Routes

- Create post
- Get posts of user
- Get all posts of users
- Update posts
- Delete posts
- Like posts

# Technologies/Libraries/Packages Used

## 1. Frontend

- HTML
- CSS
- JavaScript

## 2. Backend

- Node
- Express
- Cloudinary
- Formidable
- PostgreSQL
- JWT
- Bcrypt

# Local Setup

## 1. Frontend

1. Fork the repository and clone it using git clone URL.
2. Open the folder containing the cloned repository and run "npm install".
3. Create a .env file with the same contents as the given .env file.
4. You can either deploy the backend separately and use the hosted link or run locally and use that link after setting up the backend (see below).
5. After you successfully add the backend url to your .env file you can run npm start and start working locally.

## 2. Backend

1. Fork the repository and clone it using git clone URL.
2. Open the folder which contains the cloned repository and run "npm install".
3. Create a .env file same as the given env file (.example.env).
4. Set up a PostgreSQL database and put the URL into the .env file.
5. Add a secret value to .env file.
6. Run "npm run dev".

# Team Members

- Arushi Agrawal (2020IMT-017)
- Disha Singh (2020IMT-030)
- Mounica Sruthi Kakkirala (2020IMT-061)
