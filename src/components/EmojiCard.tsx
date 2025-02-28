"use client";
import { UpdateVote } from "./UpdateVote";
import { toast } from "react-toastify";

interface EmojiCardProps {
  emojiData: {
    _id: string;
    emoji: string;
    emoji_code: string;
    type: string;
    example: string;
    tags: string[];
    bgColor: string;
    upVote: number;
    downVote: number;
  },
  view: "grid" | "flex"
}

export function EmojiCard({ emojiData, view }: EmojiCardProps) {
  console.log(emojiData)
  
  return (
    <div className={`${view === "grid" ? "w-64 flex-col justify-between" : "w-64 h-24 justify-between"} flex hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out items-center overflow-hidden rounded-lg dark:text-white dark:bg-gray-800`}>
      <div
        style={{ backgroundColor: `${emojiData.bgColor}` }}
        className={`${view === "grid" ? "w-64 h-40 text-7xl" : "w-20 h-full text-3xl"} flex justify-center items-center`}
      >
        <button
          onClick={() => {
            navigator.clipboard.writeText(emojiData.emoji)
            toast.success(`Copied "${emojiData.emoji}" to clipboard`, { autoClose: 1000 })
          }}
          className={`hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out`}
        >{emojiData.emoji}</button>
      </div>
      <div className={`${view === "grid" ? "w-64 flex-1/2 flex flex-col justify-center items-center" : "flex items-center justify-center flex-col "} pb-7`}>
        <button

          onClick={() => {
            navigator.clipboard.writeText(emojiData.emoji_code)
            toast.success(`Copied "${emojiData.emoji_code}" to clipboard`, { autoClose: 1000 })
          }}
          
          className={`${view === "grid" ? "text-xl font-semibold  mt-6" : "text-sm font-semibold mt-10"} cursor-pointer active:text-green-500`}>{emojiData.emoji_code}</button>
        <p className={`text-center mb-5 mt-1 ${view == "grid" ? "" : "text-sm"}`}>{emojiData.example}</p>

        <UpdateVote emojiId={emojiData._id} upVote={emojiData.upVote} downVote={emojiData.downVote} view={view}/>
      </div>
    </div>
  )
}