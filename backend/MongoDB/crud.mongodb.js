use("CrudDb");

// console.log(db); shows current db

// creating collection using createCollection
db.createCollection("courses");

// insert data in the collection using insertOne
// db.courses.insertOne({
//   name: "web dev course",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// insert many data in the collection using insertMany
// db.courses.insertMany([
//   { name: "Java", price: 10000, instructor: "Naman" },
//   { name: "JavaScript", price: 8000, instructor: "Naman" },
//   { name: "Python", price: 6000, instructor: "Naman" },
// ]);

// read data from the collection using find
// console.log(db.courses.find());
// find() returns all the documents in the collection that match the query criteria specified in the arguments.
// let priceZero = db.courses.find({ price: 0 });
// console.log(priceZero);
// findOne() returns only one document at a time from the collection that matches the query criteria specified in the arguments.
// { "_id" : ObjectId("63e5b0b5a9b5e0a9e0b9b5e1"), "name" : "web dev course", "price" : 0, "assignments" : 12, "projects" : 45 }
// console.log("count -> ", priceZero.count()); // count ->  1

// update data in the collection using updateOne
// updateOne() updates one document in the collection that matches the query criteria specified in the arguments.
// db.courses.updateOne({ price: 0 }, { $set: { price: 1000 } });
// db.courses.updateOne(
//   { name: "wb dev course" },
//   { $set: { name: "Web Development Course" } }
// );

// update data in the collection using updateMany
// updateMany() updates all documents in the collection that match the query criteria specified in the arguments.
// db.courses.updateMany({ name: "web dev course" }, { $set: { price: 1000 } });

// delete data in the collection using deleteOne
// deleteOne() deletes one document in the collection that matches the query criteria specified in the arguments.
// db.courses.deleteOne({ name: "web dev course" });

// delete data in the collection using deleteMany
// deleteMany() deletes all documents in the collection that match the query criteria specified in the arguments.
// db.courses.deleteMany({ price: 0 });

// drop collection using drop method
// drop use for deleting collection from db and collection from db
// db.courses.drop();

// MongoDB Operator
// https://docs.mongodb.com/manual/reference/operator/
// https://www.mongodb.com/docs/manual/reference/operator
// https://www.mongodb.com/docs/manual/tutorial/query-documents/
// https://www.mongodb.com/docs/manual/tutorial/query-array documents
