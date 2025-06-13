import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface PromptFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  modelColor: string;
}

interface FormData {
  role: string;
  domain: string;
  task: string;
  context: string;
  tone: string;
  complexity: string;
}

export default function PromptForm({ onSubmit, isLoading, modelColor }: PromptFormProps) {
  const [formData, setFormData] = useState<FormData>({
    role: '',
    domain: '',
    task: '',
    context: '',
    tone: 'professional',
    complexity: 'detailed'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.role.trim() && formData.task.trim();

  return (
    <div className="bg-card/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-${modelColor}-500 to-${modelColor}-600 flex items-center justify-center`}>
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Prompt Builder</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Role / Persona *
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="e.g., Marketing Expert, Data Analyst, Creative Writer"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Domain */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Domain / Industry
          </label>
          <input
            type="text"
            value={formData.domain}
            onChange={(e) => handleChange('domain', e.target.value)}
            placeholder="e.g., Technology, Healthcare, Finance, Education"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
          />
        </div>

        {/* Task */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Task Description *
          </label>
          <textarea
            value={formData.task}
            onChange={(e) => handleChange('task', e.target.value)}
            placeholder="Describe what you want the AI to help you with..."
            rows={4}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
            required
          />
        </div>

        {/* Context */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Additional Context
          </label>
          <textarea
            value={formData.context}
            onChange={(e) => handleChange('context', e.target.value)}
            placeholder="Any specific requirements, constraints, or background information..."
            rows={3}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
          />
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tone
          </label>
          <select
            value={formData.tone}
            onChange={(e) => handleChange('tone', e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
            <option value="formal">Formal</option>
            <option value="creative">Creative</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        {/* Complexity */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Response Detail Level
          </label>
          <select
            value={formData.complexity}
            onChange={(e) => handleChange('complexity', e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
          >
            <option value="brief">Brief & Concise</option>
            <option value="detailed">Detailed</option>
            <option value="comprehensive">Comprehensive</option>
            <option value="step-by-step">Step-by-Step</option>
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            !isFormValid || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-cyan-500/25'
          }`}
          whileHover={isFormValid && !isLoading ? { y: -2 } : {}}
          whileTap={isFormValid && !isLoading ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Prompt...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Prompt
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
} 