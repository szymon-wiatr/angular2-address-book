// src/app/routes.ts
import {Home} from './components/home';     // ./components/home/index.ts

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/add', loader: () => require('./components/add')('Add'), name: 'Add'},
    {path: '/edit', loader: () => require('./components/edit')('Edit'), name: 'Edit' }
];
