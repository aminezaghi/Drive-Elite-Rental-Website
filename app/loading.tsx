export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-amber-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
