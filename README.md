<!-- Project Heading -->
<h3 align="center">Music Buddies</h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run-the-application">Run the application</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Music Buddies is a virtual music sharing/cohosting full stack web application
built using Django and React. The project builds upon [Django & React Tutorial](https://www.youtube.com/watch?v=JD-age0BPVo&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j) by Tech with Tim as a foundation for learning Django, and it will be extended with additional functionalities.
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->





### Built With

* [![Django][Django]][Django-url]
* [![React][React.js]][React-url]
* [![Material UI][mui]][MUI-url]
* [![Spotify][Spotify]][Spotify-url]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You will need a Spotify Account, and Python3 and npm installed.

### Clone this repository

```
git clone https://github.com/Uye121/YelpCamp.git
```

### Installation

1. Install backend dependencies:
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   pip3 install -r requirements.txt
   ```
2. Install frontend dependencies:
   ```sh
   cd frontend
   npm install
   ```
3. Update Database
   ```sh
   make migration
   make migrate
   ```

### Run the application

1. Start Django backend:
   ```sh
   make start_server
   ```
2. Start React frontend:
   ```sh
   make start_client
   ```



<!-- ROADMAP -->
## Roadmap

- [x] React frontend
- [x] Style frontend
- [x] Routing pages
    - [x] Route to home page
    - [x] Route to joining room page
    - [x] Route to create room page
    - [x] Route to specific room page based on room code
- [x] CRUD operations using database
    - [x] Add room
    - [x] Read room data
    - [x] Edit room
    - [x] Delete room
- [ ] Utilize Spotify API
    - [x] Spotify access
    - [x] Play songs
    - [x] Pause songs
    - [ ] skip songs
    - [ ] Add errors for premium features if not premium user
- [ ] Cache room data
- [ ] Chatroom between users
- [ ] Host web application




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Tech with Tim](https://www.youtube.com/watch?v=JD-age0BPVo&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Django]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green
[Django-url]: https://www.djangoproject.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[mui]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/material-ui/
[Spotify]: https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white
[Spotify-url]: https://developer.spotify.com/
