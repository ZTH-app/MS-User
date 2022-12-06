db = db.getSiblingDB(`user`);

db.createCollection(`user`);

db.course.insertMany([
  {
    firstname: 'jean',
    lastname: 'lamotte',
    birthday: '',
    mail: 'test@gmail.com',
  },
  {
    firstname: 'gerard',
    lastname: 'dupont',
    birthday: '',
    mail: 'gerard@gmail.com',
  },
]);
