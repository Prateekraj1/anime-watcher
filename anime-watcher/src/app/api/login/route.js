import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(request) {
  await dbConnect();
  const { username, password } = await request.json();

  const user = await User.findOne({ username });
  if (!user) return new Response("User not found", { status: 404 });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return new Response("Invalid password", { status: 401 });

  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });
  return new Response(JSON.stringify({ token }), { status: 200 });
}
