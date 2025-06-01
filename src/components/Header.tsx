'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <Link href="/" className="logo">
                    <Image
                        src="/logo-benji.png"
                        alt="Espaço Benji"
                        width={180}
                        height={60}
                        className="logo-image"
                        priority
                    />
                </Link>

                <div className="nav-links">
                    <motion.a
                        href="#home"
                        className="nav-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        HOME
                    </motion.a>
                    <motion.a
                        href="#espacos"
                        className="nav-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CASAMENTO
                    </motion.a>
                    <motion.a
                        href="#orcamento"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Solicite um Orçamento
                    </motion.a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header; 