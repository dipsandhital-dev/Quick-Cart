import { House, ClipboardList, Table, MoreHorizontal, Hamburger } from "lucide-react";

const BottomTab = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-16 flex justify-around items-center border-t border-[#333]">

      {/* Home */}
      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <House size={22} />
        <span className="text-xs">Home</span>
      </button>

      {/* Orders */}
      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <ClipboardList size={22} />
        <span className="text-xs">Orders</span>
      </button>

      {/* Floating Action Button (Center) */}
      <button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white rounded-full p-4 
                         flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <Hamburger size={28} />
      </button>

      {/* Tables */}
      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <Table size={22} />
        <span className="text-xs">Tables</span>
      </button>

      {/* More */}
      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <MoreHorizontal size={22} />
        <span className="text-xs">More</span>
      </button>

    </div>
  );
};

export default BottomTab;
