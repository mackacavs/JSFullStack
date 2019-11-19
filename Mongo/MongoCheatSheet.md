The following is a cheat sheet for different commands in Mongo DB

Create Database
=================
use newDatabase

Show Databases
=================
show dbs

Move into Database
=================
use database

Show collections within database
=================
use database
show collections

Delete database
=================
use database
db.dropDatabase()

Create collection
=================
use database
db.createCollection('posts')

Insert into Database
=================
db.posts.insert({
  title: "Title",
  likes: 13
})

Insert more than one item into a Database
=================
db.posts.insertMany([{
  title: "Title",
  likes: 13
},
{
  title: "Title2",
  likes: 9
}
])

Find data
=================
db.posts.find()

Find data and read it easier
=================
db.posts.find().pretty()

Find data
=================
db.posts.find({title: Title})

Sort data
=================
db.posts.find().sort({title: 1}) **Add 1 for by ascending and -1 for descending**

To find one specific row
=================
db.posts.findOne({title: "Title})

To update the entire row
=================
db.posts.update({title: "Title"},
  {
    title: 'New Title',
    likes: 15
  }
)

Replace only certain fields from a row
=================
db.posts.update({title: "Title"},
  {
    $set: {
      title: 'New Title'
    }
  }
)

Increment a field
=================
db.posts.update({title: "Title", { $inc: {likes: "increment value" }})

Delete a post
=================
db.posts.remove({title: "Title"})

Connecting databases
=================
db.posts.update({title: "Title"},
  {
    $set: {
      comments: [
        {
          user: "Mary Williams"
          body: "Main Comment"
        }
      ]
    }
  }
)

Find by Element in Array
=================
db.posts.find({
  comments: {
     $elemMatch: {
       author: 'Mary Williams'
       }
    }
  }
)

Greater Than
=================
db.posts.find({ likes: {$gt: 3}})

Less Than
=================
db.posts.find({ likes: {$lt: 3}})

Greater Than or equal
=================
db.posts.find({ likes: {$gte: 3}})

Less Than or equal
=================
db.posts.find({ likes: {$lte: 3}})








