import React from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Track } from '../types';

interface TrackCardProps {
  track: Track;
  isActive: boolean;
  isPlaying: boolean;
  onPlay: (track: Track) => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({ track, isActive, isPlaying, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ backgroundColor: '#282828' }}
      className={`group relative p-4 bg-[#181818] rounded-lg transition-colors cursor-pointer ${
        isActive ? 'bg-[#282828]' : ''
      }`}
      onClick={() => onPlay(track)}
    >
      <div className="relative aspect-square mb-4">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full h-full object-cover rounded-md shadow-2xl transition-all"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-md" />

        <div className="absolute bottom-2 right-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 active:scale-95 glow-on-hover"
           >
             {isActive && isPlaying ? (
               <Pause className="w-6 h-6 fill-current" />
             ) : (
               <Play className="w-6 h-6 fill-current ml-1" />
             )}
           </motion.button>
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <span className={`font-bold transition-colors truncate mb-1`}>
          {track.title}
        </span>
        <span className="text-zinc-400 text-sm truncate">
          {track.artist}
        </span>
      </div>
    </motion.div>
  );
};
