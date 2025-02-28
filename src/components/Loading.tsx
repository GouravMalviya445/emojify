export function Loading({ height = 20, width = 20, className }: { height?: number; width?: number; className?: string; }) {
  return (
    <div style={{ height, width }} className={`border-t-2 border-b-2 rounded-full border-gray-400 animate-spin ${className}`}></div>
  )
}