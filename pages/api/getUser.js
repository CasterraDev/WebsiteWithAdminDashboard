import dbConnect from "../../libs/dbConnect";
import User from "../../models/user";

export default async function POST(req,res) {
    console.log(req.body);
    const email = req.body.email;
    try {
        await dbConnect();
        const user = await User.findOne({email});
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: "User registration failed."});
    }
    
}