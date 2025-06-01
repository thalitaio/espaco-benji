'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Ceremony = () => {
    return (
        <section id="cerimonia" className="ceremony">
            <div className="ceremony-container">
                <motion.h2
                    className="ceremony-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Cerimônia No Local
                </motion.h2>
                <div className="ceremony-content">
                    <motion.div
                        className="ceremony-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/cerimonia.jpg"
                            alt="Cerimônia ao ar livre"
                            width={800}
                            height={500}
                            className="ceremony-image"
                            priority
                        />
                    </motion.div>
                    <motion.div
                        className="ceremony-description"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        No Espaço Benji, você pode realizar sua cerimônia no próprio espaço, em meio à natureza
                        e com uma estética inspirada na Grécia e no Mediterrâneo. Um cenário sofisticado, elegante
                        e inesquecível para dizer "sim", com toda a praticidade de ter cerimônia e festa no mesmo lugar.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Ceremony; 