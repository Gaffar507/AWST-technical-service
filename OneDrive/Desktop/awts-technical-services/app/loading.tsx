export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner with Brand Color */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#0077B6] rounded-full animate-spin"></div>
        
        <p className="text-gray-600 font-medium text-sm animate-pulse">
          Loading AWTS Technical Services...
        </p>
      </div>
    </div>
  );
}