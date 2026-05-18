/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { TrackCard } from './components/TrackCard';
import { LyricsModal } from './components/LyricsModal';
import { TRACKS, PLAYLISTS } from './constants';
import { Track } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Play, MoreHorizontal, Clock, Heart } from 'lucide-react';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    setCurrentTrack(TRACKS[nextIndex]);
    setIsPlaying(true);
  };

  const handleBack = () => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack?.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    setCurrentTrack(TRACKS[prevIndex]);
    setIsPlaying(true);
  };

  const filteredTracks = useMemo(() => {
    return TRACKS.filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex h-screen bg-black overflow-hidden font-sans select-none">
      <Sidebar />

      <main className="flex-1 bg-gradient-to-b from-[#222222] via-[#121212] to-[#121212] flex flex-col overflow-hidden relative">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          {/* Hero Section */}
          <section className="mb-8 flex-shrink-0">
            <h2 className="text-3xl font-bold mb-6">Good evening</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TRACKS.slice(0, 6).map((track) => (
                <motion.div
                  key={track.id}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  onClick={() => handlePlayTrack(track)}
                  className="flex items-center bg-white/10 transition-colors rounded-md overflow-hidden cursor-pointer group"
                >
                  <div className="w-20 h-20 shadow-lg flex-shrink-0">
                    <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="px-4 font-bold truncate">{track.title}</span>
                  <div className="ml-auto mr-4 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Play className="w-6 h-6 text-black fill-current" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Grid Section */}
          <section className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-2xl font-bold">Made For You</h3>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:underline cursor-pointer">Show All</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {filteredTracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  isActive={currentTrack?.id === track.id}
                  isPlaying={isPlaying}
                  onPlay={handlePlayTrack}
                />
              ))}
            </div>
          </section>

          {/* Another Section */}
          <section className="pb-32">
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-2xl font-bold">Recently Played</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {TRACKS.slice(0, 6).reverse().map((track) => (
                <TrackCard
                  key={track.id + '-recent'}
                  track={track}
                  isActive={currentTrack?.id === track.id}
                  isPlaying={isPlaying}
                  onPlay={handlePlayTrack}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Floating Bottom Section */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onBack={handleBack}
          onShowLyrics={() => setIsLyricsOpen(true)}
        />
      </div>

      <LyricsModal
        track={currentTrack}
        isOpen={isLyricsOpen}
        onClose={() => setIsLyricsOpen(false)}
      />
    </div>
  );
}
