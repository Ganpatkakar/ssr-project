import React from 'react';
import App from './components/app';
import Items from './components/items/items';
import ItemPage from './components/item/itempage';
import NotFoundPage from './components/notFound';

export default [
  {
    component: App,
    routes: [
      {
        component: ItemPage,
        path: '/item/'
      },
      {
        component: Items,
        path: '/items'
      },
      {
        component: Items,
        path: '/'
      },
      {
        component: NotFoundPage
      }
    ]
  }
];