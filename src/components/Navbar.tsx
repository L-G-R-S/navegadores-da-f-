import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Início', href: '#inicio' },
        { name: 'Identidade', href: '#identidade' },
        { name: 'A Tripulação', href: '#equipe' },
        { name: 'Playlist', href: '#playlist' },
    ];

    return (
        <nav className="fixed w-full z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <span className="font-title text-xl font-bold text-nav-gold">Navegantes da Fé</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-nav-gold px-3 py-2 rounded-md text-sm font-medium transition-colors font-body"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-nav-gold p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-nav-blue border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-nav-gold block px-3 py-2 rounded-md text-base font-medium font-body"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};
