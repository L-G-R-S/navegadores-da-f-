import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface Track {
    id: number;
    title: string;
    artist: string;
    url: string; // Placeholder or local path
    duration: string;
}

const playlist: Track[] = [
    { id: 1, title: 'V1', artist: 'Navegantes da Fé', url: '/musicas/track1.mp3', duration: '3:45' },
    { id: 2, title: 'V2', artist: 'Navegantes da Fé', url: '/musicas/track2.mp3', duration: '3:45' },
    { id: 3, title: 'V3', artist: 'Navegantes da Fé', url: '/musicas/track3.mp3', duration: '3:45' },
    { id: 4, title: 'V4', artist: 'Navegantes da Fé', url: '/musicas/track4.mp3', duration: '3:45' },
    { id: 5, title: 'V5', artist: 'Navegantes da Fé', url: '/musicas/track5.mp3', duration: '3:45' },
    { id: 6, title: 'V6', artist: 'Navegantes da Fé', url: '/musicas/track6.mp3', duration: '3:45' },
    { id: 7, title: 'V7', artist: 'Navegantes da Fé', url: '/musicas/track7.mp3', duration: '3:45' },
    { id: 8, title: 'V8', artist: 'Navegantes da Fé', url: '/musicas/track8.mp3', duration: '3:45' },
];

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = playlist[currentTrackIndex];

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(error => console.log("Playback failed:", error));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, currentTrackIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            nextTrack();
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const handleTrackSelect = (index: number) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    };

    const formatTime = (seconds: number) => {
        if (!seconds) return "00:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <section id="playlist" className="py-20 bg-nav-dark relative overflow-hidden">
            <audio
                ref={audioRef}
                src={currentTrack.url}
                preload="metadata"
            />
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nav-gold opacity-5 rounded-full blur-[100px]"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white mb-4">Nossa Playlist</h2>
                    <p className="text-gray-400 font-body">Sinta a energia do nosso grupo.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Player Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-effect p-8 rounded-2xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl"
                    >
                        <div className="w-full aspect-square bg-gradient-to-br from-nav-blue to-black rounded-xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden group">
                            <img
                                src="/logos/Colorida.png"
                                alt="Navegantes Logo"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-title text-2xl font-bold text-white mb-1 truncate">{currentTrack.title}</h3>
                            <p className="text-gray-400 font-body text-sm">{currentTrack.artist}</p>
                        </div>

                        {/* Progress Bar (Visual) */}
                        <div className="mb-6 group cursor-pointer" onClick={(e) => {
                            if (audioRef.current) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const width = rect.width;
                                const percentage = x / width;
                                audioRef.current.currentTime = percentage * audioRef.current.duration;
                            }
                        }}>
                            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-nav-gold relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                                <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "00:00"}</span>
                                <span>{audioRef.current ? formatTime(audioRef.current.duration) : "--:--"}</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between px-4">
                            {/* Previous */}
                            <button
                                onClick={prevTrack}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <SkipBack size={24} />
                            </button>

                            {/* Play/Pause */}
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 bg-nav-gold rounded-full flex items-center justify-center text-nav-blue shadow-lg hover:bg-nav-gold/90 hover:scale-105 transition-all transform active:scale-95"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                            </button>

                            {/* Next */}
                            <button
                                onClick={nextTrack}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <SkipForward size={24} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Playlist List */}
                    <div className="space-y-4">
                        <h3 className="font-title text-xl text-white mb-4 pl-2 border-l-4 border-nav-gold">Próximas Músicas</h3>
                        <div className="space-y-2 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {playlist.map((track, index) => (
                                <motion.div
                                    key={track.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleTrackSelect(index)}
                                    className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all border ${currentTrackIndex === index
                                        ? 'bg-nav-gold/10 border-nav-gold/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]'
                                        : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-gray-500 font-mono text-sm w-4">{index + 1}</div>
                                        <div>
                                            <h4 className={`font-bold text-sm ${currentTrackIndex === index ? 'text-nav-gold' : 'text-white'}`}>
                                                {track.title}
                                            </h4>
                                            <p className="text-xs text-gray-400">{track.artist}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {currentTrackIndex === index && isPlaying && (
                                            <div className="flex gap-1 items-end h-4">
                                                <div className="w-1 bg-nav-gold animate-[bounce_1s_infinite] h-2"></div>
                                                <div className="w-1 bg-nav-gold animate-[bounce_1.2s_infinite] h-4"></div>
                                                <div className="w-1 bg-nav-gold animate-[bounce_0.8s_infinite] h-3"></div>
                                            </div>
                                        )}
                                        <span className="text-xs text-gray-500 font-mono">{track.duration}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
