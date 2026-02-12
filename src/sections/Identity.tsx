import { motion } from 'framer-motion';
import { Anchor, Cross, ShipWheel, Lightbulb } from 'lucide-react';

export const Identity = () => {
    const cards = [
        {
            title: 'A Âncora',
            icon: <Anchor className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'Representa a esperança firme em Cristo. Mesmo na tempestade, não somos levados, pois estamos presos na rocha.',
        },
        {
            title: 'A Cruz na Vela',
            icon: <Cross className="w-12 h-12 mb-4 text-nav-gold rotate-90" />, // Using Cross rotated or similar, usually Lucide has Cross or Plus
            description: 'É o sacrifício de Jesus que nos impulsiona. O vento do Espírito Santo sopra, mas é a Cruz que nos dá o destino.',
        },
        {
            title: 'O Timão',
            icon: <ShipWheel className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'A direção divina. Não navegamos segundo nossa vontade, mas permitimos que Deus guie o barco da nossa vida.',
        },
        {
            title: 'O Farol',
            icon: <Lightbulb className="w-12 h-12 mb-4 text-nav-gold" />,
            description: 'A luz do mundo. Somos chamados a brilhar e a seguir a luz de Cristo em meio à escuridão do mar do mundo.',
        },
    ];

    return (
        <section id="identidade" className="py-20 bg-nav-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white">Nossa Identidade</h2>
                    <div className="w-24 h-1 bg-nav-gold mx-auto mt-4 rounded"></div>
                    <p className="mt-4 text-gray-400 font-body">Cada detalhe do nosso brasão conta a história da nossa salvação.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass-effect p-6 rounded-xl text-center hover:border-nav-gold transition duration-300 group"
                        >
                            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="font-title text-xl font-bold mb-2 text-white">{card.title}</h3>
                            <p className="text-gray-400 text-sm font-body">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
