import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  gradient: string;
}

interface ModelCardProps {
  model: Model;
}

export default function ModelCard({ model }: ModelCardProps) {
  const navigate = useNavigate();
  const Icon = model.icon;

  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-card/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-96 flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${model.gradient} flex items-center justify-center mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white">{model.name}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow">{model.description}</p>

        {/* Capabilities */}
        <div className="space-y-3 mb-6">
          {model.capabilities.map((capability, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span className="text-sm text-gray-300">{capability}</span>
            </div>
          ))}
        </div>

        {/* Select Button */}
        <motion.button
          onClick={() => navigate(`/build/${model.id}`)}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Select Model
        </motion.button>
      </div>
    </motion.div>
  );
} 