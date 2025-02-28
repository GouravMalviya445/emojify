
"use client";
import { Grid2X2, Rows4 } from "lucide-react";
import { Button } from "./Button";
import { toast } from "react-toastify";

interface ChangeViewProps { setView: (value: "grid" | "flex") => void }

export function ChangeView({ setView }: ChangeViewProps ) {
  return (  
    <div className="flex items-center justify-center space-x-2 ">
      <Button
        variant="simple"
        onClick={() => {
          setView("grid")
          toast("View Change to Grid", {hideProgressBar: true, position: "bottom-left"})
        }}
      >
        <Grid2X2/>
      </Button>

      <Button
        variant="simple"
        onClick={() => {
          setView("flex")
          toast("View change to flex", {hideProgressBar: true, position: "bottom-left"})
        }}
      >
        <Rows4/>
      </Button>
    </div>
  )
}