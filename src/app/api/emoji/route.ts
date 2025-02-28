import { EmojiModel } from "@/model/EmojiModel";
import { connectDB } from "@/db";
import { ApiResponse } from "@/utils/ApiResponse";


// get all the Emojis
export async function GET() {
  await connectDB();
  try {
    const emojis = await EmojiModel.find();
    if (!emojis) {
      return ApiResponse(400, "No Emojis found");
    }

    return ApiResponse(200, "Emojis successfully fetched", { emojis })
  } catch (err) {
    return ApiResponse(500, "Something went wrong", null, {err})
  }
}