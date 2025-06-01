'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Spaces = () => {
    return (
        <section id="espacos" className="spaces">
            <div className="spaces-container">
                <motion.h2
                    className="spaces-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Nossos Espaços
                </motion.h2>
                <div className="spaces-content">
                    <motion.div
                        className="spaces-image-grid"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/espaco-1.jpg"
                            alt="Espaço para cerimônia"
                            width={600}
                            height={400}
                            className="spaces-image"
                        />
                        <Image
                            src="/images/espaco-2.jpg"
                            alt="Área de festas"
                            width={600}
                            height={400}
                            className="spaces-image"
                        />
                    </motion.div>
                    <motion.div
                        className="spaces-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="spaces-subtitle">
                            Espaço Benji Festas — Casamentos Inesquecíveis no Rio de Janeiro
                        </h3>
                        <p className="spaces-description">
                            Localizado no coração da natureza em Vargem Pequena com uma estética única inspirada na Grécia e no Mediterrâneo,
                            o Espaço Benji oferece sofisticação, modernidade e exclusividade para que seu grande dia seja exatamente como você sempre sonhou.
                        </p>
                        <p className="spaces-description">
                            Somos especialistas em realizar casamentos completos, proporcionando uma experiência memorável do início ao fim.
                            Contamos com ambientes internos e externos, cerimônia no local, buffet de alto padrão, decoração personalizada
                            e uma equipe dedicada a transformar sonhos em realidade.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Spaces; 