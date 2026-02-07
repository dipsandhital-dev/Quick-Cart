import { Bell, Search, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] border-b border-[#2a2a2a]">
      
      {/* Left: Logo + Mobile Menu */}
      <div className="flex items-center gap-3">
        {/* Mobile menu icon */}
        <Menu className="text-white sm:hidden" size={22} />

        <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">
          Quick<span className="text-blue-500">Chart</span>
        </h1>
      </div>

      {/* Center: Search (hidden on very small screens) */}
      <div className="hidden sm:flex items-center gap-2 bg-[#1f1f1f] rounded-full px-4 py-2 
                      w-[220px] md:w-[320px] lg:w-[420px]
                      focus-within:ring-2 focus-within:ring-blue-500">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-white" size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </div>

        {/* User */}
        <div className="flex items-center gap-2 sm:gap-3 bg-[#1f1f1f] px-2 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:bg-[#2a2a2a] transition">
          
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white">
            D
          </div>

          {/* Name (hidden on mobile) */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm text-white font-medium">Dipsan Dhital</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header
