"use client";

import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import { Button } from "./Button";
import { useState } from "react";
import { debounce } from "@/utils/debounce";
import { toast } from "react-toastify";


interface UpdateVoteProps {
  upVote: number;
  downVote: number;
  view: "grid" | "flex";
  emojiId: string
}

export function UpdateVote({ upVote, downVote, view, emojiId }: UpdateVoteProps) {
  
  const [vote, setVote] = useState({
    upVote,
    downVote
  });

  const incrementUpVote = debounce(async () => {
    try {
      const res = await fetch("/api/emoji/vote", {
        method: "POST",
        body: JSON.stringify({
          upVote: true,
          emojiId
        })
      });
      const data = await res.json()
      if (data.success) {
        setVote(pre => ({...pre, upVote: pre.upVote + 1}))
        toast.success("This emoji is getting popular")
      }
      
    } catch (err) {
      toast.error('Something is wrong in upvote')
      console.log("Error incrementing upvote: ", err);
    }
  }, 500)
  
  const incrementDownVote = debounce(async () => {
    try {
      const res = await fetch("/api/emoji/vote", {
        method: "POST",
        body: JSON.stringify({
          downVote: true,
          emojiId
        })
      });
      const data = await res.json()
      if (data.success) {
        setVote(pre => ({ ...pre, downVote: pre.downVote + 1 }))
        toast("This emoji is facing downfall")
      }
      
    } catch (err) {
      toast.error('Something is wrong in downvote')
      console.log("Error incrementing downvote: ", err);
    }
  }, 500);

  return (
    <div className="w-full">
      {/* upVote and downVote button */}
      {view === "grid" && <div className="flex items-center justify-between  px-4">
          <Button onClick={incrementUpVote} variant="plane" className="flex items-center gap-2 text-pink-400 hover:text-green-500 border px-3 text-sm rounded-md">
            <ArrowBigUpDash size={17}/> {vote.upVote}
          </Button>
          <Button onClick={incrementDownVote} variant="plane" className="flex items-center gap-2 text-red-400 hover:text-red-500 border px-3 text-sm rounded-md">
            <ArrowBigDownDash size={17}/> {vote.downVote}
          </Button>
        </div>}
    </div>
  )
}