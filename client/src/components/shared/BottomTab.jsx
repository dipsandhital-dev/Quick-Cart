import { House, ClipboardList, Table, MoreHorizontal } from "lucide-react";

const BottomTab = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#262626] h-16 
                    flex justify-around items-center 
                    border-t border-[#333]"
    >
      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <House size={22} />
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <ClipboardList size={22} />
        <span className="text-xs">Orders</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <Table size={22} />
        <span className="text-xs">Tables</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100">
        <MoreHorizontal size={22} />
        <span className="text-xs">More</span>
      </button>
    </div>
  );
};

export default BottomTab;
