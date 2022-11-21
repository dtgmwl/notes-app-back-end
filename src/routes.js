const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    path: '/notes',
    method: 'GET',
    handler: getAllNotesHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
