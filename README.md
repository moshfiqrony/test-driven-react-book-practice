# test-driven-react-book-practice

# Architecture - 
1. [package.json file setup for simple test](https://github.com/jeftarmascarenhas/react-testing-library/blob/master/package.json)
2. [Unit testing VS Integration testing](https://medium.com/@pankaj.itdeveloper/difference-between-unit-testing-and-integration-testing-ac22dc2396b3)

# Topics - 
1. [Axios Mock tutorial](https://www.youtube.com/watch?v=9Yrd4aZkse8)
2. [Axios Mock Example](https://github.com/jeftarmascarenhas/react-testing-library/blob/master/src/__tests__/fetch.test.js)
2. [React Integration Testing Blog by ANTON RUBLEV](https://www.toptal.com/react/react-testing-library-tutorial)


# Tutorial
## 1. If the problem is "mutationObserver is not a constructor" or "regeneratorRuntime is not defined" bug fixed for test
* At first install ```jest-environment-jsdom-sixteen```
```
yarn add --dev jest-environment-jsdom-sixteen
```
* Then your scripts in **package.json** file 
```
"scripts": {
    "test": "jest --env=jest-environment-jsdom-sixteen --watch"
}
````
* Now install ```core-js``` and ```regenerator-runtime```
```
yarn add --dev regenerator-runtime
yarn add --dev core-js
```
* Now create **setupTest.js** file in your root directory and write the following code
```
import 'regenerator-runtime/runtime'
import 'core-js/stable'
```
* Now edit and create a **JEST** entry in your **package.json** like bellow
```
"jest":{
"setupFilesAfterEnv":["./setupTests.js"]
}
```
* Now run the following and it should work fine
```
yarn test
```
