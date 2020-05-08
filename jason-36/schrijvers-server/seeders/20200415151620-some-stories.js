"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          title: "Eerste Lorem Ipsum",
          type: 'Originele fictie',
          genre: 'Mysterie',
          wordCount: 1500,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 5,
          pg: 12, 
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Tweede Lorem Ipsum",
          type: 'Fan fictie',
          genre: 'Fantasie',
          wordCount: 1400,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 5,
          pg: 12,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Derde Lorem Ipsum",
          type: 'Waargebeurd',
          genre: 'Romantiek',
          wordCount: 1450,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 8,
          pg: 18,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Vierde Lorem Ipsum",
          type: 'Originele fictie',
          genre: 'Spanning',
          wordCount: 1300,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 16,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Vijfe Lorem Ipsum",
          type: 'Waargebeurd',
          genre: 'Horror',
          wordCount: 1500,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 16,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Zesde Lorem Ipsum",
          type: 'Originele fictie',
          genre: 'Mysterie',
          wordCount: 1500,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 16,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Zevende Lorem Ipsum",
          type: 'Fan fictie',
          genre: 'Science-fiction',
          wordCount: 1222,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 12,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Achtste Lorem Ipsum",
          type: 'Waargebeurd',
          genre: 'Coming-of-age',
          wordCount: 1150,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 12,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Negende Lorem Ipsum",
          type: 'Originele fictie',
          genre: 'Misdaad',
          wordCount: 1500,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 12,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
        {
          title: "Tiende Lorem Ipsum",
          type: 'Waargebeurd',
          genre: 'Misdaad',
          wordCount: 999,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          titleClicked: 0,
          pg: 16,
          imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80'
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  },
};
