"use client";
import { Button } from "@/components/Button";
import { InputBox } from "@/components/InputBox";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function AddEmoji() {
  const router= useRouter()
  const [formData, setFormData] = useState({
    emoji: "",
    emojiName: "",
    commit: "",
  })
  const [bgColor, setBgColor] = useState("#000000");

  async function addEmoji(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/emoji/add", {
      method: "POST",
      body: JSON.stringify({
        emoji: formData.emoji,
        emoji_code: formData.emojiName,
        example: formData.commit,
        bgColor
      })
    });
    const data = await res.json();
    if (data.success) {
      router.push("/");
    }
  }

  useEffect(() => { document.title = "Add Emoji | Emojify" }, [])
  
  return (
    <div className="h-screen w-screen grid place-content-center">
      <form onSubmit={addEmoji} className="flex flex-col gap-10 border p-10 border-white rounded-lg">
        <label className="flex items-center gap-4 text-white">
          Emoji: <InputBox value={formData.emoji} onChange={(e) => setFormData({...formData, emoji: e.target.value})}  type="text" placeholder="emoji ex: 🐛" className="w-full" />
        </label>

        <label className="flex items-center gap-4 text-white">
          Emoji Name: <InputBox value={formData.emojiName} onChange={(e) => setFormData({...formData, emojiName: e.target.value})}  type="text" placeholder="emoji name ex: bug" className="w-full" />
        </label>

        <label className="flex items-center gap-4 text-white">
          Commit: <InputBox value={formData.commit} onChange={(e) => setFormData({...formData, commit: e.target.value})} type="text" placeholder="🐛 fixed bug." className="w-full" />
        </label>
        <label className="flex gap-4 text-white">Background_Color: <HexColorPicker color={bgColor} onChange={setBgColor} /></label>
        <Button variant="secondary" type="submit">Add Emoji</Button>
      </form>
    </div>
  )
}