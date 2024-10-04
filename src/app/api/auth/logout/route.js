// pages/api/auth/logout.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Clear the session cookie
        res.setHeader('Set-Cookie', cookie.serialize('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: -1, // Expire the cookie
            path: '/',
        }));

        res.status(200).json({ message: 'Logout successful' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
export async function POST(request) {

    request.setHeader('Set-Cookie', cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: -1, // Expire the cookie
        path: '/',
    }));

    res.status(200).json({ message: 'Logout successful' });

}