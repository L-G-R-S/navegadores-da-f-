import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const teamMembers = [
    { name: 'Jesus', image: '/equipe/Jesus.png', role: 'Capitão' },
    { name: 'Andreza', image: '/equipe/Andreza.png', role: 'Navegante' },
    { name: 'Arnaldo', image: '/equipe/Arnaldo.png', role: 'Navegante' },
    { name: 'Camila', image: '/equipe/Camila.png', role: 'Navegante' },
    { name: 'David', image: '/equipe/David.png', role: 'Navegante' },
    { name: 'Gabriel', image: '/equipe/Gabriel.png', role: 'Navegante' },
    { name: 'Geovana', image: '/equipe/Geovana.png', role: 'Navegante' },
    { name: 'Helena', image: '/equipe/Helena.png', role: 'Navegante' },
    { name: 'Luana', image: '/equipe/Luana.png', role: 'Navegante' },
    { name: 'Luis', image: '/equipe/Luis.png', role: 'Navegante' },
    { name: 'Matheus', image: '/equipe/Matheus.png', role: 'Navegante' },
    { name: 'Rebeca', image: '/equipe/Rebeca.png', role: 'Navegante' },
    { name: 'Thalita', image: '/equipe/Thalita.png', role: 'Navegante' },
    { name: 'Uallas', image: '/equipe/Uallas.png', role: 'Navegante' },
    { name: 'Elson', image: '/equipe/elson.png', role: 'Navegante' },
];

export const TeamCarousel = () => {
    return (
        <section id="equipe" className="py-20 bg-nav-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nav-gold opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-0"
                >
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-white mb-2">A Tripulação</h2>
                    <p className="mt-2 text-nav-gold font-body">
                        Unidos pelo mesmo propósito.
                    </p>
                </motion.div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="w-full -mt-8 pb-24"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.name} className="w-[280px] sm:w-[320px]">
                            <div className="flex flex-col items-center group cursor-grab active:cursor-grabbing pb-8">
                                <div className="relative w-full aspect-[3/4] mb-0 transition-all duration-500 transform group-hover:-translate-y-4 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Foto+Indispon%C3%ADvel';
                                        }}
                                    />
                                </div>
                                <div className="text-center transform transition-all duration-300 group-hover:scale-110 -mt-24 md:-mt-32 relative z-10 mb-8">
                                    <h3 className="font-title text-3xl font-bold text-white mb-1 text-shadow-lg">{member.name}</h3>
                                    <p className="text-nav-gold font-bold tracking-widest uppercase text-sm border-t-2 border-nav-gold/30 pt-2 inline-block px-4 font-body">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
