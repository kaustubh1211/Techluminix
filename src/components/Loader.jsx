// app/components/Loader.tsx
const Loader = () => (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin h-10 w-10 rounded-full border-4 border-white border-t-blue-500"></div>
    </div>
  )
  
export default Loader
  