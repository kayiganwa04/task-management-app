import clientPromise from "./mongodbconnection"

const DB_NAME = "tasks"
const DB_COLLECTION = "tasks"
export async function getTasks() {
  try {
    const client = await clientPromise;
    const db = await client.db(DB_NAME);
    const data = await db.collection(DB_COLLECTION).find({}).toArray();
    return {result: data}
  } catch(error) {
    console.error("Get Tasks Error:", error.message);
    return { error: error.message };
  }
}

export async function addTask(task) {
  try {
    const client = await clientPromise;
    const db = await client.db(DB_NAME);
    const collection = await db.collection(DB_COLLECTION)
    await collection.insertOne(task);

    return true
  } catch(error) {
    console.error("Error while creating task:", error.message);
    return false;
  }
}