# Python Flask &amp; ReAct full stack app boilerplate

- Reference
    - [Multiple docker containers for both python flask and react](https://www.youtube.com/watch?v=ByUWienlDDA)
    - [Single docker container for both python flask and react](https://stackoverflow.com/questions/62441899/flask-and-react-app-in-single-docker-container)


- Build an image: `sudo docker build -t api .`
- Build run a container with change detect: `sudo docker run -p 90:5000 -v $(pwd):/app api`