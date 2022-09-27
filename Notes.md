# Notes - Gif Expert App

## Setup
- Create the project
- `yarn create vite`
    - react
    - javascript

- Delete all files from src directory, except main.jsx
- Create a file in src directory, with the name of GifExpertApp.jsx, and then create a functional component with the
name of GifExpertApp and export it

- In main.jsx delete:
~~~
import App from './App'
import './index.css'
~~~
Add:
~~~
import { GifExpertApp } from './GifExpertApp';
~~~
And call the component with:
~~~
<GifExpertApp />
~~~

## Instalation:

- Install node_modules with yarn:
- `yarn`

- To run the application:
- `yarn dev`

## Create production build
- Netyfly
    - `yarn build`
    - Use http-server package (already installed globally)

    - Upload the dist directory to build in netifly.com

- Github pages
    - git init
    - git checkout -b main
    - git add .
    - git commit -m "Initial commit"
    - git remote add origin [github_url]
    - git push -u origin main

## Testing

- `yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react` 
- `yarn add --dev @testing-library/react @types/jest jest-environment-jsdom`

- If we use FetchAPI (react < 18)
    - `yarn add --dev whatwg-fetch`

- In package.json, ins script add:
    - "test": "jest --watchAll"

- In the root directory create the file babel.config.json:
~~~
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
~~~

- Also create the file jest.config.json:
~~~
{
    "testEnvironment": "jest-environment-jsdom",
    "setupFile": ["./jest.setup.js"]
}
~~~
- And create the file jest.setup.js:
~~~
import 'whatwg-fetch';
~~~

## Tips:
- Trace the critical trace(the main function of the application)
- Start with the components with less dependency

- pro-types
- `yarn add prop-types`

- If fetch is undefined:
    - `yarn add --dev cross-fetch`
    - Add:
    ~~~
    import fetch from 'cross-fetch';
    ~~~
    - In the file witch the fetch call