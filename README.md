# TFFWeb

The project uses React.js as frontend and Node.js (Express) as backend. Both are independent servers serving different ports. React.js requests and visualizes data from Node ([REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api)). Node.js will handle the "business logic" and in the near-future communicate with the database.

### Tools needed for project

- Node.js and Node package manager (npm) (install latest [here](https://nodejs.org/en/)).
- [Git](https://git-scm.com/downloads)

### Installing the project for local development

Clone the repository with

```
git clone https://github.com/ProjectTFF/TFFWeb.git {folder}
```

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
