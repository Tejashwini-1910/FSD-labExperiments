const { MongoClient } = require('mongodb');

// MongoDB connection URL
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'myTestDB';
const collectionName = 'users';

const client = new MongoClient(uri);

async function main() {
  try {

    // Connect to MongoDB
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 1. Insert one document
    console.log("\n1. Inserting one document");

    const insertResult = await collection.insertOne({
      name: "Ada Lovelace",
      age: 205,
      occupation: "Mathematician"
    });

    console.log("Inserted ID:", insertResult.insertedId);

    // 2. Insert multiple documents
    console.log("\n2. Inserting multiple documents");

    const users = [
      { name: "Grace Hopper", age: 85, occupation: "Computer Scientist" },
      { name: "Alan Turing", age: 41, occupation: "Mathematician" }
    ];

    const insertManyResult = await collection.insertMany(users);

    console.log(insertManyResult.insertedCount + " documents inserted");

    // 3. Find all documents
    console.log("\n3. Reading all documents");

    const allUsers = await collection.find({}).toArray();
    console.log(allUsers);

    // 4. Update document
    console.log("\n4. Updating Alan Turing age");

    const updateResult = await collection.updateOne(
      { name: "Alan Turing" },
      { $set: { age: 42 } }
    );

    console.log(updateResult.modifiedCount + " document updated");

    // 5. Delete document
    console.log("\n5. Deleting Grace Hopper");

    const deleteResult = await collection.deleteOne({
      name: "Grace Hopper"
    });

    console.log(deleteResult.deletedCount + " document deleted");

    // 6. List databases
    console.log("\n6. List of databases");

    const databasesList = await client.db().admin().listDatabases();

    databasesList.databases.forEach(db => {
      console.log("-", db.name);
    });

  } catch (error) {
    console.error("Error:", error);
  } finally {

    await client.close();
    console.log("\nMongoDB connection closed");

  }
}

main();