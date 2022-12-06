db = db.getSiblingDB(`userdb`);

db.createCollection(`userdbs`);

db.createUser({
  user: `userdb`,
  pwd: `userdb`,
  roles: [
    {
      role: `readWrite`,
      db: `userdb`,
    },
  ],
});

db.userdbs.insertMany([
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