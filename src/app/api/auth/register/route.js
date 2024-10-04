import connectToDatabase from "@/db/mongoose";
import User from "@/db/models/user";
import bcrypt from 'bcryptjs';


await connectToDatabase();


export async function POST(request) {

    const { name, email, password } = await request.json();

    // Validate user input
    if (!name || !email || !password) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 422 });
    }


    const existingUser = await User.findOne({ email });

    console.log('existingUser ', existingUser);
    if (existingUser) {
        return new Response(JSON.stringify({ error: 'Email already taken!' }), { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ name, email, password: hashedPassword, createdAt: new Date() });
    await newUser.save();


    return new Response(JSON.stringify(newUser), { status: 200 });

}