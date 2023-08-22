import { Thread } from "@/db/models/thread";
import connectDB from "@/db/mongoDbConnect";

export default async function handler(req, res) {
  console.log("thread.js 1 | req.body", req.body);

  await connectDB();
  if (req.body.type === "like") {
    await Thread.findByIdAndUpdate(req.body.threadId, { $inc: { likes: 1 } });
  } else {
    await Thread.create({ content: req.body.thread, date: Date.now() });
    console.log("thread.js 10 | created thread successfully");
    return res.json({ success: "thread created!" });
  }

  res.status(200).json({ name: "John Doe" });
}
