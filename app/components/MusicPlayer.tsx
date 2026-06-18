"use client";

import { useState, useEffect, useRef } from "react";

interface Track {
  title: string;
  artist: string;
  duration: string; // "MM:SS"
  durationSeconds: number;
}

const TRACKS: Track[] = [
  {
    title: "Uning-Uningan Vol. 4",
    artist: "STG Enterprise",
    duration: "4:32",
    durationSeconds: 272,
  },
  {
    title: "Gondang Batak Modern",
    artist: "STG Enterprise",
    duration: "3:45",
    durationSeconds: 225,
  },
  {
    title: "Sardam & Hasiapi Duet",
    artist: "STG Enterprise",
    duration: "5:10",
    durationSeconds: 310,
  },
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Simulating play timer
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.durationSeconds) {
            // Loop or stop
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTime(0);
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const handlePrev = () => {
    setCurrentTime(0);
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = (currentTime / currentTrack.durationSeconds) * 100;

  // Handle clicking on progress bar to scrub time
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercent = clickX / width;
    const newTime = Math.floor(newPercent * currentTrack.durationSeconds);
    setCurrentTime(newTime);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-50 h-24 bg-[#f8f9fa] flex items-center justify-between px-6 md:px-[64px] shadow-lg border-t border-[#757682]/20">
      {/* Track Info */}
      <div className="flex items-center space-x-4 min-w-[150px] md:min-w-[200px]">
        <div className="w-12 h-12 bg-[#e1e3e4] rounded border border-[#757682]/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#444651]">
            music_note
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="font-sans text-[14px] font-semibold text-[#00236f] truncate">
            {currentTrack.title}
          </div>
          <div className="font-sans text-[12px] font-medium text-[#444651] truncate">
            {currentTrack.artist}
          </div>
        </div>
      </div>

      {/* Playback Controls & Progress Bar */}
      <div className="flex-1 max-w-md mx-4 md:mx-8 flex flex-col items-center">
        <div className="flex items-center space-x-6 mb-2">
          <button
            onClick={handlePrev}
            className="text-[#444651] hover:text-[#00236f] transition-colors cursor-pointer"
            title="Previous track"
          >
            <span className="material-symbols-outlined">skip_previous</span>
          </button>
          <button
            onClick={togglePlay}
            className="text-[#00236f] hover:scale-105 transition-transform cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}
            >
              {isPlaying ? "pause_circle" : "play_circle"}
            </span>
          </button>
          <button
            onClick={handleNext}
            className="text-[#444651] hover:text-[#00236f] transition-colors cursor-pointer"
            title="Next track"
          >
            <span className="material-symbols-outlined">skip_next</span>
          </button>
        </div>

        <div className="w-full flex items-center space-x-3 font-sans text-[12px] font-medium text-[#444651]">
          <span className="w-8 text-right">{formatTime(currentTime)}</span>
          <div
            onClick={handleProgressClick}
            className="flex-1 h-2 bg-[#e1e3e4] rounded-full overflow-hidden cursor-pointer relative"
          >
            <div
              className="h-full bg-[#00236f] transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="w-8 text-left">{currentTrack.duration}</span>
        </div>
      </div>

      {/* Extra settings (Volume/Mute) */}
      <div className="flex items-center space-x-4 min-w-[50px] justify-end">
        <button
          onClick={toggleMute}
          className="text-[#444651] hover:text-[#00236f] transition-colors cursor-pointer"
          title={isMuted ? "Unmute" : "Mute"}
        >
          <span className="material-symbols-outlined">
            {isMuted ? "volume_off" : "volume_up"}
          </span>
        </button>
      </div>
    </nav>
  );
}
