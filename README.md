# Flask and ReAct fullstack app on multiple docker containers

- Reference
    - [Multiple docker containers for both python flask and react](https://www.youtube.com/watch?v=ByUWienlDDA)
    - [Single docker container for both python flask and react](https://stackoverflow.com/questions/62441899/flask-and-react-app-in-single-docker-container)

- Build an image: `sudo docker build -t api .`
- Build run a container with change detect: `sudo docker run -p 90:5000 -v $(pwd):/app api`
- Build run: `sudo docker run -d -p 90:5000 api`
- Build run with bash into the container: `sudo docker run -it <IMG> bash`

___

- [Flask and ReAct fullstack app on a docker container](https://github.com/ThivaV/flask_and_react_fullstack_app_on_a_docker_container)