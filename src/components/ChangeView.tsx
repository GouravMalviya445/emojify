
"use client";
import { Grid2X2, Rows4 } from "lucide-react";
import { Button } from "./Button";

interface ChangeViewProps { setView: (value: "grid" | "flex") => void }

export function ChangeView({ setView }: ChangeViewProps ) {
  return (  
    <div className="flex items-center justify-center space-x-2 ">
      <Button
        variant="simple"
        onClick={() => setView("grid")}
      >
        <Grid2X2/>
      </Button>

      <Button
        variant="simple"
        onClick={() => setView("flex")}
      >
        <Rows4/>
      </Button>
    </div>
  )
}