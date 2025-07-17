import React from 'react';
import { motion } from 'framer-motion';

export default function CertificatesSection({ title, certificates, setActiveImage, sectionVariants, custom }) {
    if (!certificates || certificates.length === 0) return null;

    return (
        <motion.section custom={custom} initial="hidden" animate="visible" variants={sectionVariants}>
            <h3 className="text-3xl font-semibold mb-6 border-b-2 border-blue-300 inline-block">{title}</h3>
            <div className="flex flex-wrap gap-8 items-stretch">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.3)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        onClick={() => setActiveImage(cert)}
                        className="bg-white/10 border border-blue-200 rounded-xl p-6 flex items-center space-x-4 cursor-pointer min-w-[220px] max-w-xs flex-1"
                    >
                        <img
                            src={cert.src}
                            alt={cert.title}
                            className="w-10 h-15 object-cover rounded-lg border border-blue-300 bg-white/20 flex-shrink-0"
                        />
                        <p className="text-blue-100 font-medium break-words">{cert.title}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}