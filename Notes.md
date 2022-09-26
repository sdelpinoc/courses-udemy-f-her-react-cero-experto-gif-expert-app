# Notes - Gif Expert App

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
    - git add .
    - git commit -m "Initial commit"