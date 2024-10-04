import connectToDatabase from "@/db/mongoose";
import User from "@/db/models/user";
import bcrypt from 'bcryptjs';

await connectToDatabase();


export async function POST(request) {

    const { email, password } = await request.json();


    // Validate user input
    if (!email || !password) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 422 });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });

}
