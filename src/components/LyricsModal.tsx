import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic2 } from 'lucide-react';
import { Track } from '../types';

interface LyricsModalProps {
  track: Track | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LyricsModal = ({ track, isOpen, onClose }: LyricsModalProps) => {
  if (!track) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="w-full max-w-4xl h-[80vh] glass-morphism rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
          >
            {/* Background Atmosphere */}
            <div
              className="absolute inset-0 -z-10 opacity-30 blur-[100px]"
              style={{ background: `radial-gradient(circle at center, ${track.color || '#1DB954'} 0%, transparent 70%)` }}
            />

            {/* Sidebar with Image */}
            <div className="w-full md:w-1/3 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
              <motion.img
                layoutId={`cover-${track.id}`}
                src={track.coverUrl}
                alt={track.title}
                className="w-48 h-48 md:w-full aspect-square rounded-2xl shadow-2xl mb-6 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                 <h2 className="text-2xl font-bold text-white mb-2">{track.title}</h2>
                 <p className="text-zinc-400 font-medium">{track.artist}</p>
                 <div className="mt-8 px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                   <Mic2 className="w-3 h-3" /> Now Singing along
                 </div>
              </div>
            </div>

            {/* Lyrics View */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto lyric-viewport relative">
               <button
                 onClick={onClose}
                 className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-20"
               >
                 <X className="w-6 h-6" />
               </button>

               <div className="space-y-8 pb-32">
                 {track.lyrics ? (
                   track.lyrics.map((line, i) => (
                     <motion.p
                       key={i}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: i === 1 ? 1 : 0.4, x: 0 }}
                       whileHover={{ opacity: 1 }}
                       transition={{ delay: i * 0.1 }}
                       className={`text-2xl md:text-4xl font-bold transition-all cursor-pointer ${
                         i === 1 ? 'text-white scale-105 origin-left' : 'text-white/40'
                       }`}
                     >
                       {line}
                     </motion.p>
                   ))
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                     <Mic2 className="w-12 h-12 opacity-20" />
                     <p className="text-xl font-medium">Lyrics not available for this track</p>
                   </div>
                 )}
               </div>

               {/* Fade out at bottom */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <div
            className="absolute inset-0 -z-20 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
