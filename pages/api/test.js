import dbConnect from "../../libs/dbConnect";

dbConnect();

export default async (req, res) => {
    res.json({ test: "Test" });
}