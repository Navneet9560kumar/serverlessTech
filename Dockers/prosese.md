After installation, you should verify that Docker is installed correctly by running the docker run hello-world command. This command will pull the "hello-world" image from Docker Hub and run it in a new container, which should print a message to the terminal.



# Why Docker?

Docker is a powerful platform that serves several purposes in the development, deployment, and running of applications. Below are the reasons why it is used:

- **Containerization of Applications**: Docker allows you to package your application and its dependencies into a container, which is a lightweight, standalone, and executable software package. This containerization ensures that the application runs consistently across different computing environments, from development to staging to production.
- **Running Other People's Code and Packages**: With Docker, you can easily run software and applications built by others without worrying about setting up the required environment or dependencies. This is because all the necessary components are included within the container.
- **Running Common Software Packages**: Docker provides the ability to run common software packages, such as databases (MongoDB, PostgreSQL, etc.), within containers. This means you can quickly deploy and manage these services without the need to install and configure them directly on your host machine.


# Common Packages

To better understand the use of Docker for running database services, let's consider the MongoDB and PostgreSQL packages. Docker allows you to run these databases in containers, which are isolated environments that contain everything the software needs to run.
docker run -d -p 27017:27017 mongo


PostgreSQL:
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres