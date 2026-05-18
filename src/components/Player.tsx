import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ListMusic, MonitorSpeaker, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Track } from '../types';

interface PlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onBack: () => void;
  onShowLyrics: () => void;
}

export const Player = ({ currentTrack, isPlaying, onTogglePlay, onNext, onBack, onShowLyrics }: PlayerProps) => {
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(35);

  if (!currentTrack) return null;

  return (
    <footer className="h-24 bg-black border-t border-[#282828] px-4 flex items-center justify-between z-10">
      {/* Track Info */}
      <div className="flex items-center w-[30%] min-w-[200px]">
        <motion.div
          key={currentTrack.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative flex-shrink-0"
        >
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-14 h-14 rounded shadow-lg object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="ml-4 flex flex-col min-w-0">
          <span className="text-sm font-bold text-white truncate hover:underline cursor-pointer">{currentTrack.title}</span>
          <span className="text-xs text-zinc-400 truncate hover:underline cursor-pointer transition-colors">
            {currentTrack.artist} • {currentTrack.album}
          </span>
        </div>
        <button className="ml-6 text-zinc-400 hover:text-spotify-green transition-colors">
           <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Main Controls */}
      <div className="flex flex-col items-center w-[40%]">
        <div className="flex items-center space-x-6 mb-2">
          <button className="text-zinc-400 hover:text-white transition-colors"><Shuffle className="w-5 h-5" /></button>
          <button onClick={onBack} className="text-zinc-400 hover:text-white transition-colors"><SkipBack className="w-5 h-5 fill-current" /></button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTogglePlay}
            className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </motion.button>
          <button onClick={onNext} className="text-zinc-400 hover:text-white transition-colors"><SkipForward className="w-5 h-5 fill-current" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><Repeat className="w-5 h-5" /></button>
        </div>

        <div className="flex items-center space-x-2 w-full max-w-md">
          <span className="text-[10px] text-zinc-400 font-medium">1:24</span>
          <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full relative group cursor-pointer overflow-hidden">
            <div
              className="absolute h-full bg-white group-hover:bg-spotify-green rounded-full transition-colors"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-zinc-400 font-medium">3:45</span>
        </div>
      </div>

      {/* Side Controls */}
      <div className="flex items-center justify-end space-x-4 w-[30%]">
        <button onClick={onShowLyrics} className="text-zinc-400 hover:text-white transition-colors"><Mic2 className="w-5 h-5" /></button>
        <button className="text-zinc-400 hover:text-white transition-colors"><ListMusic className="w-5 h-5" /></button>
        <div className="flex items-center space-x-2 w-24 group">
          <Volume2 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full relative cursor-pointer overflow-hidden">
            <div
              className="absolute h-full bg-white group-hover:bg-spotify-green transition-colors"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
