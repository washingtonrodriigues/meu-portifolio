import React from 'react';
import { motion } from 'framer-motion';

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 style={{ color: '#fff' }}>Experiências</h1>
    </motion.div>
  );
}
