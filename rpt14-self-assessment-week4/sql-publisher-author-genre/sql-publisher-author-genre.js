var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Publishers and Authers have many-to-many relationship so it is best to have 3 tables, one for each publisher and auther and a joining table with foreign keys from both

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Publishers and genre has many-to-one relationship so defining the foreign key for genre_id within the publisher table would link specific genre to the all publishers with that genre_id

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Author and Genre have many-to-many relationship and therefore it is best to describe a third table that holds foreign keys from both the tables linking them together
