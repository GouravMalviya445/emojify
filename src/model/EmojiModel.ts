import mongoose, { ObjectId } from "mongoose";

interface IEmoji extends mongoose.Document{
  id: ObjectId;
  emoji: string;
  emoji_code: string;
  type: string;
  example: string;
  tags: string[];
  bgColor: string;
  upVote?: number;
  downVote?: number;
}

const EmojiSchema: mongoose.Schema<IEmoji> = new mongoose.Schema({
  emoji: { type: String, required: [true, "emoji is required"], },
  emoji_code: { type: String, required: [true, "emoji_code is required"], },
  example: { type: String, required: [true, "example is required"], },
  tags: { type: [String] },
  bgColor: { type: String, required: [true, "bgColor is required"], },
  upVote: { type: Number, default: 0 },
  downVote: { type: Number, default: 0 },
})

export const EmojiModel = (mongoose.models.Emoji as mongoose.Model<IEmoji>) || mongoose.model<IEmoji>("Emoji", EmojiSchema);