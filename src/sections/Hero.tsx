import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';

export const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-nav-dark">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500417148159-68083bd7333a?q=80&w=2070&auto=format&fit=crop"
                    alt="Ocean Navigation Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Star Field Effect */}
            <StarField />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <img
                        src="/logos/Colorida.png"
                        alt="Navegantes da Fé Logo"
                        className="w-48 md:w-64 animate-float drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-title text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider"
                >
                    Guiados pela <span className="text-nav-gold">Fé</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl mb-8 font-light font-body"
                >
                    "A esperança que temos como âncora da alma, segura e firme." <br />
                    <span className="text-sm text-nav-gold font-semibold">- Hebreus 6:19</span>
                </motion.p>

                <motion.a
                    href="#identidade"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="inline-block bg-nav-gold text-nav-dark font-bold py-3 px-8 rounded-full hover:bg-white transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20 font-body mb-20 md:mb-32"
                >
                    Conheça Nossa Bandeira
                </motion.a>
            </div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-nav-gold rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
