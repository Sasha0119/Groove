import React from 'react';
import { Search, ChevronLeft, ChevronRight, User, Bell, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <div className="h-16 flex items-center justify-between px-6 sticky top-0 z-40 bg-zinc-950/20 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative group ml-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-black transition-colors z-10" />
          <input
            type="text"
            placeholder="Artists, songs, or podcasts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 bg-white text-black text-sm rounded-full py-1.5 pl-10 pr-4 focus:outline-none transition-all placeholder:text-zinc-500 font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ backgroundColor: '#282828' }}
          className="flex items-center space-x-2 bg-black rounded-full p-1 pr-3 transition-colors border border-zinc-800"
        >
          <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
             AR
          </div>
          <span className="text-sm font-semibold text-white">Alex Rivera</span>
        </motion.button>
      </div>
    </div>
  );
};
