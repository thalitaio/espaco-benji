'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Gastronomy = () => {
    return (
        <section id="gastronomia" className="gastronomy">
            <div className="gastronomy-container">
                <motion.h2
                    className="gastronomy-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Gastronomia
                </motion.h2>
                <motion.h3
                    className="gastronomy-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Gastronomia exclusiva assinada pela chef Eskarllet Souza
                </motion.h3>
                <div className="gastronomy-content">
                    <motion.div
                        className="gastronomy-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="gastronomy-description">
                            À frente da cozinha e também uma das sócias do Espaço Benji, a chef Eskarllet Souza
                            assina uma gastronomia personalizada, que une sofisticação, sabor e apresentação impecável.
                        </p>
                        <p className="gastronomy-description">
                            Cada detalhe é pensado para proporcionar uma experiência gastronômica inesquecível para você
                            e seus convidados, combinando alta gastronomia com um serviço de excelência, alinhado à
                            estética e à proposta do espaço e personalizada de acordo com cada cliente.
                        </p>
                        <p className="gastronomy-highlight">
                            Nosso Buffet é realmente inesquecível.
                        </p>
                    </motion.div>
                    <motion.div
                        className="gastronomy-image-grid"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/buffet-1.jpg"
                            alt="Pratos do buffet"
                            width={600}
                            height={400}
                            className="gastronomy-image"
                        />
                        <Image
                            src="/images/buffet-2.jpg"
                            alt="Sobremesas"
                            width={600}
                            height={400}
                            className="gastronomy-image"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gastronomy; 