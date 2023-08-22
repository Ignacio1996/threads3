import { Thread } from "@/db/models/thread";
import connectDB from "@/db/mongoDbConnect";

// Connect to the database
connectDB();

export default async function handler(req, res) {
  const { method } = req;
  console.log("threads.js 8 | got to route with method", method);

  switch (method) {
    case "GET":
      try {
        const threads = await Thread.find({});
        res.status(200).json({ success: true, data: threads });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const thread = await Thread.create(req.body);
        res.status(201).json({ success: true, data: thread });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
