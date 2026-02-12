import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

export const MissionVisionValues = () => {
    const cards = [
        {
            title: 'Missão',
            icon: <Target className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'Levar a palavra de Deus e o amor ao próximo por onde passamos, navegando com fé e propósito.',
        },
        {
            title: 'Visão',
            icon: <Eye className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'Ser um farol de esperança e referência em fé cristã, guiando vidas para um porto seguro.',
        },
        {
            title: 'Valores',
            icon: <Heart className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'Amor, Fé, Esperança, Unidade, Serviço e Excelência em tudo que fazemos para o Reino.',
        },
    ];

    return (
        <section id="mvv" className="py-20 bg-nav-dark relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497290756760-23ac55edf36f?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white">Nosso Norte</h2>
                    <div className="w-24 h-1 bg-nav-gold mx-auto mt-4 rounded"></div>
                    <p className="mt-4 text-gray-400 font-body">Os princípios que guiam nossa navegação.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass-effect p-8 rounded-xl text-center hover:border-nav-gold transition duration-300 group border-t-4 border-t-nav-gold/20"
                        >
                            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 bg-nav-blue/50 w-20 h-20 rounded-full items-center mx-auto mb-6 border border-white/10">
                                {card.icon}
                            </div>
                            <h3 className="font-title text-2xl font-bold mb-4 text-white">{card.title}</h3>
                            <p className="text-gray-300 font-body leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
