import { connectToDB } from "@/app/lib/db";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const db = await connectToDB();
    const collection = db.collection("queries");
    await collection.insertOne({ ...data, createdAt: new Date() });

    return new Response(JSON.stringify({ message: "Form submitted successfully" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
