import React from 'react';
import App from './components/app';
import Search  from './components/search/search';
import ItemPage from './components/item/itempage';
import NotFoundPage from './components/notFound';

export default [
  {
    ...App,
    routes: [
      {
        ...ItemPage,
        path: '/item'
      },
      {
        ...Search,
        path: '/search'
      },
      {
        ...Search,
        path: '/'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];