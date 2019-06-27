# Contacts Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

## Project Setup

* clone the Project - `git clone https://github.com/udacity/reactnd-contacts-complete.git`
* install the dependencies - `npm install`

#### Setup the server
* clone the project - `git clone https://github.com/udacity/reactnd-contacts-server2.git`
* `cd reactnd-contacts-server2`
* install its dependencies - `npm install`
* start the server - `node server.js`

## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program, we will not be accepting pull requests.

If you feel like there's a major problem, please open an issue to discuss the problem and potential resolution.

## Contributing

MIT

## DOC
 ### To set State :
    1 - Passing as an Object
    eg: this.setState({
        userName: 'Bob'
        })
    2 - Passing as a function
    eg: this.setState((prevCount) => ({
        count: prevCount + 2
        })
 ### [Link](https://reacttraining.com/react-router/web/api/Link) 
    eg: <Link to={{
         pathname: '/courses',
         search: '?sort=name',
         hash: '#the-hash',
         state: { fromDashboard: true }
        }}>
         Courses
        </Link>
        
 ### Used libs 
    escape-string-regexp : 
    sort-by : 
    react-router-dom : 
    form-serialize
    
### Ref
 - [build-your-own-react-router](https://tylermcginnis.com/build-your-own-react-router-v4/)
 - [React Router v4](https://tylermcginnis.com/courses/react-router/)
