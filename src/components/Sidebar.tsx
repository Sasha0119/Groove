import React from 'react';
import { Home, Search, Library, PlusCircle, Heart, Download } from 'lucide-react';
import { motion } from 'motion/react';

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors duration-200 rounded-lg group ${
      active ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`}
  >
    <Icon className={`w-6 h-6 ${active ? 'text-white' : 'group-hover:text-white'}`} />
    <span className="font-semibold">{label}</span>
  </motion.div>
);

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-black flex flex-col p-6 space-y-8 flex-shrink-0">
      <div className="flex items-center space-x-2 text-2xl font-bold tracking-tighter">
        <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <span>Groove</span>
      </div>

      <nav className="space-y-4">
        <SidebarItem icon={Home} label="Home" active />
        <SidebarItem icon={Search} label="Search" />
        <SidebarItem icon={Library} label="Your Library" />
      </nav>

      <div className="flex flex-col space-y-4 pt-4 border-t border-zinc-800">
        <button className="flex items-center space-x-4 text-zinc-400 hover:text-white transition-colors group">
          <div className="w-6 h-6 bg-zinc-400 group-hover:bg-white rounded-sm flex items-center justify-center text-black font-bold transition-colors">+</div>
          <span className="font-semibold text-sm">Create Playlist</span>
        </button>
        <button className="flex items-center space-x-4 text-zinc-400 hover:text-white transition-colors">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-700 to-blue-300 rounded-sm flex items-center justify-center text-white text-[10px]">♥</div>
          <span className="font-semibold text-sm">Liked Songs</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mt-4 space-y-3 text-sm text-zinc-400 scrollbar-hide">
        {['Late Night Jazz', 'Lo-Fi Coding Beats', 'Weekly Discovery', 'Rainy Day Acoustics', 'Techno Bunker', 'Chill Vibes', 'Driving Home', 'Focus Now'].map((playlist) => (
          <p key={playlist} className="hover:text-white cursor-default transition-colors truncate font-medium">
            {playlist}
          </p>
        ))}
      </div>
    </div>
  );
};
