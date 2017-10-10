// this is where the database information will go

const knex = require('knex');
const config = require('./knexfile');

const pg = knex(config.development);
//initializes knex inside of the project to create queries ,the object development is present inside of the
//knexfile.js

pg.select('*').from('lightsabers')
.then(data =>{
  console.log(data);
})
.catch(err => {
  console.log(err);
});


//you can change the parameters of the query// this code selects from color within the lightsaber db
//using the id that is 2
//pg is an object, select is the method, from is a function calling the db, where is a method of psql passing in the arguments of id and position.

//pg.select('color'). from('lighsabers').where('id', 2)


module.exports =pg;
