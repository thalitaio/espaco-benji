'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                        height={80}
                        className="logo-image"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
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

                {/* Mobile Menu Button */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 12H21"
                            stroke="#3E2600"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M3 6H21"
                            stroke="#3E2600"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M3 18H21"
                            stroke="#3E2600"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={toggleMobileMenu}>
                        HOME
                    </a>
                    <a href="#espacos" className="nav-link" onClick={toggleMobileMenu}>
                        CASAMENTO
                    </a>
                    <a href="#orcamento" className="btn btn-primary" onClick={toggleMobileMenu}>
                        Solicite um Orçamento
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header; 