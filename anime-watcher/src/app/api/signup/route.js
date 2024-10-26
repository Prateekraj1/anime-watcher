import dbConnect from "@/lib/mongodb";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await dbConnect();
  const { username, password } = await request.json();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return new Response("User created successfully", { status: 201 });
  } catch (error) {
    return new Response("Error creating user", { status: 400 });
  }
}
