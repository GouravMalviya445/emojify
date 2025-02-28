import { connectDB } from "@/db";
import { EmojiModel } from "@/model/EmojiModel";
import { ApiResponse } from "@/utils/ApiResponse";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const { emoji, emoji_code, bgColor, example } = await req.json();
  try {
    const createdEmoji = new EmojiModel({
      emoji,
      emoji_code: `:${emoji_code}:`,
      example,
      bgColor: bgColor.toUpperCase() || "#FFFFFF"
    });
    await createdEmoji.save();
    return ApiResponse(200, "Emoji successfully added", { emoji });
  } catch (err) {
    return ApiResponse(500, "Something went wrong", null, { err });
  }
}