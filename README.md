# TFFWeb

The project uses React.js as frontend and Node.js (Express) as backend. Both are independent servers serving different ports. React.js requests and visualizes data from Node ([REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api)). Node.js will handle the "business logic" and in the near-future communicate with the database.

### Tools needed for project

- Node.js and Node package manager (npm) (install latest [here](https://nodejs.org/en/)).
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/)

### Cloning the project files

Clone the repository with

```
git clone https://github.com/ProjectTFF/TFFWeb.git {folder}
```

# Running the application with Docker

The docker-compose.yml hold the information for building the three servers into three separate containers. Build and start the containers with a single command:

```
docker-compose up --build
```

Then the containers can be shutdown with

```
docker-compose down
```

# Running the servers separately

### Starting the React.js frontend server

Navigate into the folder client/ and install the packages:
```
npm install
```
and then start the react server by calling the start-script:
```
npm start
```
Then the interface can be found at [localhost:3000](http://localhost:3000).

### Starting the Node.js backend server

Navigate into the folder server/ and install the packages:
```
npm install
```
and then start the node server by calling the start-script:
```
npm start
```
Then the interface can be found at [localhost:3001](http://localhost:3001).