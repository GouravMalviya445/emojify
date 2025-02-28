"use client";
import { EmojiCard } from "@/components/EmojiCard";
import { Container } from "@/container/container";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { ChangeView } from "@/components/ChangeView";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from "@/components/Footer";

interface IEmoji {
  _id: string;
  emoji: string;
  emoji_code: string;
  type: string;
  example: string;
  tags: string[];
  bgColor: string;
  upVote: number;
  downVote: number;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "flex">("grid"); 
  const [emojis, setEmojis] = useState<IEmoji[]>([]);

  useEffect(() => { 
      fetch("/api/emoji")
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setEmojis(data.data.emojis)
          }
        })
        .catch(err => {
          toast.error("Something went wrong went fetching emojis")
          console.log("Error fetching emojis: ", err);
        })
  }, [])

  const filteredEmojis = emojis.filter((emoji) => emoji.example.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main>
      <Header/>
      <Container>
        <div className="flex items-center justify-around my-10 px-4">
          {/* search query */}
          <SearchBar
            className="text-white w-2/3 sm:w-1/3"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search commits"
          />
          <ChangeView setView={setView} />
        </div>
        
        <div className="max-w-6xl flex items-center gap-10 flex-wrap mx-16 sm:mx-auto ">
          {!filteredEmojis.length && <div className="h-40 text-white text-2xl">No emojis found for "{searchQuery}"</div>}
          {filteredEmojis.map((emoji) => (
            <EmojiCard key={emoji._id} emojiData={emoji} view={view} />
          ))}
        </div>
      </Container>
      <Footer/>
      <ToastContainer position="top-right" autoClose={1500} theme="dark"/>
    </main>
  );
}
