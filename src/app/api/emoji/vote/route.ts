import { connectDB } from "@/db";
import { EmojiModel } from "@/model/EmojiModel";
import { ApiResponse } from "@/utils/ApiResponse";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  await connectDB();
  const { upVote, downVote, emojiId } = await req.json();
  
  try {
    if (upVote) {
      await EmojiModel.findByIdAndUpdate(emojiId, { $inc: { upVote: 1 } });
    } 
    if (downVote) {
      await EmojiModel.findByIdAndUpdate(emojiId, { $inc: { downVote: 1 } });
    }

    return ApiResponse(200, "Emojis successfully fetched")
  } catch (err) {
    return ApiResponse(500, "Something went wrong", null, {err})
  }

}