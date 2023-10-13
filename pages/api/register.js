import dbConnect from "../../libs/dbConnect";
import User from "../../models/user";
import bcrypt from "bcryptjs"

export default async function POST(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    const rawEmail = req.body.email;
    const email = rawEmail.toLowerCase();
    try {
        await dbConnect();
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, password: hashedPassword, email});
        res.status(200).json({message: "User Registered"});
    } catch (error) {
        res.status(500).json({message: "User registration failed."});
    }
    
}