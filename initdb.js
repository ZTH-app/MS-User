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
    birthday: "1995-12-12T03:20:51.995Z",
    mail: 'test@gmail.com',
  },
  {
    firstname: 'gerard',
    lastname: 'dupont',
    birthday: "2003-12-12T03:20:51.995Z",
    mail: 'gerard@gmail.com',
  },
]);