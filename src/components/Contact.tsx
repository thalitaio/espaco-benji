'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
                });
                setFormData({ nome: '', email: '', telefone: '' });
            } else {
                const errorMessage = data.error || 'Erro ao enviar mensagem. Tente novamente.';
                console.error('Erro na resposta:', data);
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Erro ao enviar mensagem. Por favor, tente novamente.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="orcamento" className="contact">
            <div className="contact-container">
                <motion.h2
                    className="contact-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Preencha o formulário abaixo e receba seu orçamento!
                </motion.h2>
                <motion.div
                    className="contact-form-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label className="form-label" htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className="form-input"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <label className="form-label" htmlFor="telefone">Telefone</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                className="form-input"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        {status.message && (
                            <div className={`form-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                        <motion.button
                            type="submit"
                            className="btn btn-secondary btn-full"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 