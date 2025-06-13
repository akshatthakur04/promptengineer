import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Zap, Shield, Copy, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import PromptForm from '../components/PromptForm';

const modelData = {
  'llama4-maverick': {
    name: 'Llama 4 Maverick',
    description: 'Cutting-edge model with advanced reasoning capabilities and creative thinking.',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-600',
    color: 'purple'
  },
  'shisa-v2': {
    name: 'Shisa V2',
    description: 'Optimized for precision and accuracy in technical and analytical tasks.',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-600',
    color: 'blue'
  },
  'nemotron-49b': {
    name: 'Nemotron 49B',
    description: 'Large-scale model designed for enterprise applications and complex workflows.',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-600',
    color: 'green'
  }
};

export default function PromptBuilder() {
  const navigate = useNavigate();
  const { modelId } = useParams<{ modelId: string }>();
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const model = modelId ? modelData[modelId as keyof typeof modelData] : null;

  if (!model) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Model Not Found</h1>
          <button
            onClick={() => navigate('/select')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Choose a Model
          </button>
        </div>
      </div>
    );
  }

  const Icon = model.icon;

  const handlePromptGeneration = async (formData: any) => {
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const prompt = `You are an expert ${formData.role || 'assistant'} specializing in ${formData.domain || 'general tasks'}. 

Task: ${formData.task}

Context: ${formData.context || 'No additional context provided.'}

Requirements:
- Provide detailed and actionable responses
- Maintain a professional yet approachable tone
- Consider best practices and industry standards
- Include relevant examples when helpful

Please proceed with the task, ensuring high quality and accuracy in your response.`;

    setGeneratedPrompt(prompt);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  const downloadPrompt = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedPrompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${model.name.toLowerCase().replace(/\s+/g, '-')}-prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.button
          onClick={() => navigate('/select')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Models
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Model Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Model Card */}
            <div className="bg-card/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${model.gradient} flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-white">{model.name}</h1>
              <p className="text-gray-400 text-lg">{model.description}</p>
            </div>

            {/* Generated Prompt Display */}
            {generatedPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Generated Prompt</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                    <button
                      onClick={downloadPrompt}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      title="Download as file"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
                    {generatedPrompt}
                  </pre>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <PromptForm
              onSubmit={handlePromptGeneration}
              isLoading={isGenerating}
              modelColor={model.color}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
} 