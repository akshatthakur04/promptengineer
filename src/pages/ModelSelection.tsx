import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ModelCard from '../components/ModelCard';

export default function ModelSelection() {
  const navigate = useNavigate();

  const models = [
    {
      id: 'llama4-maverick',
      name: 'Llama 4 Maverick',
      description: 'Cutting-edge model with advanced reasoning capabilities and creative thinking.',
      capabilities: ['Creative Writing', 'Complex Reasoning', 'Code Generation'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'shisa-v2',
      name: 'Shisa V2',
      description: 'Optimized for precision and accuracy in technical and analytical tasks.',
      capabilities: ['Technical Analysis', 'Data Processing', 'Research'],
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'nemotron-49b',
      name: 'Nemotron 49B',
      description: 'Large-scale model designed for enterprise applications and complex workflows.',
      capabilities: ['Enterprise Solutions', 'Multi-step Tasks', 'Advanced Analytics'],
      icon: Shield,
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Model
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect AI model for your prompt generation needs. Each model has unique strengths and capabilities.
          </p>
        </motion.div>

        {/* Model Selector */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl mx-auto"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="model-swiper"
          >
            {models.map((model) => (
              <SwiperSlide key={model.id} className="!w-96">
                <ModelCard model={model} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </main>
    </div>
  );
} 