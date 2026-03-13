// Study topics organized by section
export const STUDY_TOPICS = [
  // Section 5: Transformer Internals
  { id: 'tf-1', name: 'Self-Attention Mechanism (scaled dot-product)', time: 4, section: '5. Transformer Internals', sectionNum: 5, priority: 'high' },
  { id: 'tf-2', name: 'Multi-Head Attention and why it works', time: 3, section: '5. Transformer Internals', sectionNum: 5, priority: 'high' },
  { id: 'tf-3', name: 'Positional Encoding variants', time: 3, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-4', name: 'Feed-Forward Networks in transformers', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-5', name: 'Layer Normalization vs Batch Normalization', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-6', name: 'Residual Connections and their importance', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-7', name: 'Encoder vs Decoder vs Encoder-Decoder', time: 3, section: '5. Transformer Internals', sectionNum: 5, priority: 'high' },
  { id: 'tf-8', name: 'Causal (Masked) Attention', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-9', name: 'Cross-Attention in encoder-decoder', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'medium' },
  { id: 'tf-10', name: 'Token Embeddings and vocabulary', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'low' },
  { id: 'tf-11', name: 'Attention complexity analysis', time: 2, section: '5. Transformer Internals', sectionNum: 5, priority: 'low' },
  
  // Section 6: LLM Ecosystem & Tools
  { id: 'llm-1', name: 'HuggingFace transformers library', time: 4, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'high' },
  { id: 'llm-2', name: 'HuggingFace datasets library', time: 2, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'high' },
  { id: 'llm-3', name: 'HuggingFace Model Hub navigation', time: 1, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'medium' },
  { id: 'llm-4', name: 'HuggingFace tokenizers library', time: 2, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'medium' },
  { id: 'llm-5', name: 'OpenAI / Anthropic / Cohere APIs', time: 2, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'high' },
  { id: 'llm-6', name: 'Sentence-transformers for embeddings', time: 2, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'medium' },
  { id: 'llm-7', name: 'Gradio/Streamlit for demos', time: 3, section: '6. LLM Ecosystem & Tools', sectionNum: 6, priority: 'low' },
  
  // Section 7: Tokenization
  { id: 'tok-1', name: 'BPE tokenization', time: 3, section: '7. Tokenization', sectionNum: 7, priority: 'high' },
  { id: 'tok-2', name: 'WordPiece tokenization', time: 2, section: '7. Tokenization', sectionNum: 7, priority: 'medium' },
  { id: 'tok-3', name: 'SentencePiece', time: 2, section: '7. Tokenization', sectionNum: 7, priority: 'medium' },
  { id: 'tok-4', name: 'Tokenization trade-offs', time: 2, section: '7. Tokenization', sectionNum: 7, priority: 'medium' },
  { id: 'tok-5', name: 'Vocabulary size decisions', time: 1, section: '7. Tokenization', sectionNum: 7, priority: 'low' },
  { id: 'tok-6', name: 'Special tokens handling', time: 1, section: '7. Tokenization', sectionNum: 7, priority: 'low' },
  { id: 'tok-7', name: 'Training custom tokenizers', time: 3, section: '7. Tokenization', sectionNum: 7, priority: 'medium' },
  
  // Section 8: Prompting & Prompt Engineering
  { id: 'prompt-1', name: 'Zero-shot vs few-shot prompting', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-2', name: 'Chain-of-Thought (CoT) prompting', time: 3, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-3', name: 'ReAct prompting', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'medium' },
  { id: 'prompt-4', name: 'Tree-of-Thoughts', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'low' },
  { id: 'prompt-5', name: 'System/user/assistant messages', time: 1, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-6', name: 'Temperature/top-p/top-k controls', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-7', name: 'Structured output prompting', time: 3, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-8', name: 'Function calling / tool use', time: 4, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'high' },
  { id: 'prompt-9', name: 'Prompt templates', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'medium' },
  { id: 'prompt-10', name: 'Role-based prompting', time: 1, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'medium' },
  { id: 'prompt-11', name: 'Prompt A/B testing', time: 2, section: '8. Prompting & Prompt Engineering', sectionNum: 8, priority: 'low' },
  
  // Section 9: RAG Systems
  { id: 'rag-1', name: 'RAG pipeline overview', time: 2, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  { id: 'rag-2', name: 'Embedding Models selection', time: 3, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  { id: 'rag-3', name: 'FAISS setup', time: 3, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  { id: 'rag-4', name: 'Vector DBs: Pinecone/Chroma/Weaviate', time: 4, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  { id: 'rag-5', name: 'Chunking strategies', time: 4, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  { id: 'rag-6', name: 'Similarity search methods', time: 2, section: '9. RAG Systems', sectionNum: 9, priority: 'medium' },
  { id: 'rag-7', name: 'Hybrid search (dense+BM25)', time: 3, section: '9. RAG Systems', sectionNum: 9, priority: 'medium' },
  { id: 'rag-8', name: 'Metadata filtering', time: 2, section: '9. RAG Systems', sectionNum: 9, priority: 'low' },
  { id: 'rag-9', name: 'Re-ranking techniques', time: 3, section: '9. RAG Systems', sectionNum: 9, priority: 'medium' },
  { id: 'rag-10', name: 'Context window management', time: 2, section: '9. RAG Systems', sectionNum: 9, priority: 'medium' },
  { id: 'rag-11', name: 'RAG evaluation metrics', time: 3, section: '9. RAG Systems', sectionNum: 9, priority: 'medium' },
  { id: 'rag-12', name: 'Hallucination handling', time: 2, section: '9. RAG Systems', sectionNum: 9, priority: 'high' },
  
  // Section 10: Fine-Tuning & PEFT
  { id: 'ft-1', name: 'Pretraining vs fine-tuning', time: 2, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-2', name: 'Instruction vs chat tuning', time: 2, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-3', name: 'Full fine-tuning process', time: 4, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-4', name: 'LoRA theory', time: 3, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-5', name: 'LoRA implementation', time: 4, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-6', name: 'QLoRA', time: 3, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'medium' },
  { id: 'ft-7', name: 'Prefix/Prompt Tuning', time: 2, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'low' },
  { id: 'ft-8', name: 'Adapter layers', time: 2, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'low' },
  { id: 'ft-9', name: 'When to fine-tune decision', time: 1, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'medium' },
  { id: 'ft-10', name: 'Dataset preparation', time: 3, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'high' },
  { id: 'ft-11', name: 'Hyperparameter tuning', time: 3, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'medium' },
  { id: 'ft-12', name: 'Evaluation setup', time: 3, section: '10. Fine-Tuning & PEFT', sectionNum: 10, priority: 'medium' },
  
  // Section 11: MLOps & Production
  { id: 'mlops-1', name: 'W&B/MLflow setup', time: 3, section: '11. MLOps & Production', sectionNum: 11, priority: 'high' },
  { id: 'mlops-2', name: 'Model versioning', time: 2, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-3', name: 'CI/CD for ML', time: 4, section: '11. MLOps & Production', sectionNum: 11, priority: 'high' },
  { id: 'mlops-4', name: 'Docker basics', time: 4, section: '11. MLOps & Production', sectionNum: 11, priority: 'high' },
  { id: 'mlops-5', name: 'FastAPI model serving', time: 4, section: '11. MLOps & Production', sectionNum: 11, priority: 'high' },
  { id: 'mlops-6', name: 'vLLM inference server', time: 3, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-7', name: 'TGI (Text Gen Inference)', time: 2, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-8', name: 'A/B testing setup', time: 3, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-9', name: 'Canary deployments', time: 2, section: '11. MLOps & Production', sectionNum: 11, priority: 'low' },
  { id: 'mlops-10', name: 'Model monitoring', time: 3, section: '11. MLOps & Production', sectionNum: 11, priority: 'high' },
  { id: 'mlops-11', name: 'Drift detection', time: 2, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-12', name: 'Logging/observability', time: 3, section: '11. MLOps & Production', sectionNum: 11, priority: 'medium' },
  { id: 'mlops-13', name: 'Config-driven experiments', time: 2, section: '11. MLOps & Production', sectionNum: 11, priority: 'low' },
  
  // Section 12: Security & Safety
  { id: 'sec-1', name: 'Prompt injection attacks', time: 3, section: '12. Security & Safety', sectionNum: 12, priority: 'high' },
  { id: 'sec-2', name: 'Jailbreaking techniques', time: 2, section: '12. Security & Safety', sectionNum: 12, priority: 'medium' },
  { id: 'sec-3', name: 'Content moderation', time: 3, section: '12. Security & Safety', sectionNum: 12, priority: 'high' },
  { id: 'sec-4', name: 'PII detection/redaction', time: 3, section: '12. Security & Safety', sectionNum: 12, priority: 'high' },
  { id: 'sec-5', name: 'Output validation', time: 2, section: '12. Security & Safety', sectionNum: 12, priority: 'medium' },
  { id: 'sec-6', name: 'Rate limiting', time: 2, section: '12. Security & Safety', sectionNum: 12, priority: 'medium' },
  
  // Section 13: Backend Development
  { id: 'be-1', name: 'RESTful API design', time: 3, section: '13. Backend Development', sectionNum: 13, priority: 'high' },
  { id: 'be-2', name: 'FastAPI framework', time: 4, section: '13. Backend Development', sectionNum: 13, priority: 'high' },
  { id: 'be-3', name: 'JWT/OAuth auth', time: 4, section: '13. Backend Development', sectionNum: 13, priority: 'high' },
  { id: 'be-4', name: 'Async Python', time: 3, section: '13. Backend Development', sectionNum: 13, priority: 'medium' },
  { id: 'be-5', name: 'Caching strategies', time: 3, section: '13. Backend Development', sectionNum: 13, priority: 'medium' },
  { id: 'be-6', name: 'Database indexing', time: 2, section: '13. Backend Development', sectionNum: 13, priority: 'medium' },
  
  // Section 14: Evaluation & Benchmarking
  { id: 'eval-1', name: 'LLM-as-judge evaluation', time: 3, section: '14. Evaluation & Benchmarking', sectionNum: 14, priority: 'high' },
  { id: 'eval-2', name: 'MMLU / HumanEval', time: 3, section: '14. Evaluation & Benchmarking', sectionNum: 14, priority: 'high' },
  { id: 'eval-3', name: 'Custom eval datasets', time: 3, section: '14. Evaluation & Benchmarking', sectionNum: 14, priority: 'medium' },
  { id: 'eval-4', name: 'Hallucination measurement', time: 2, section: '14. Evaluation & Benchmarking', sectionNum: 14, priority: 'medium' },
  
  // Section 15: Inference Optimization
  { id: 'inf-1', name: 'KV-Cache theory', time: 2, section: '15. Inference Optimization', sectionNum: 15, priority: 'high' },
  { id: 'inf-2', name: 'KV-Cache implementation', time: 3, section: '15. Inference Optimization', sectionNum: 15, priority: 'high' },
  { id: 'inf-3', name: 'Quantization (INT8/INT4)', time: 3, section: '15. Inference Optimization', sectionNum: 15, priority: 'high' },
  { id: 'inf-4', name: 'Batching strategies', time: 3, section: '15. Inference Optimization', sectionNum: 15, priority: 'medium' },
  { id: 'inf-5', name: 'Flash Attention', time: 2, section: '15. Inference Optimization', sectionNum: 15, priority: 'medium' },
  
  // Section 16: System Design
  { id: 'sys-1', name: 'High-QPS design', time: 3, section: '16. System Design', sectionNum: 16, priority: 'high' },
  { id: 'sys-2', name: 'Multi-model routing', time: 3, section: '16. System Design', sectionNum: 16, priority: 'medium' },
  { id: 'sys-3', name: 'Semantic caching', time: 3, section: '16. System Design', sectionNum: 16, priority: 'medium' },
  { id: 'sys-4', name: 'Autoscaling logic', time: 2, section: '16. System Design', sectionNum: 16, priority: 'medium' },
  
  // Section 17: Cost Optimization
  { id: 'cost-1', name: 'Token cost calculation', time: 2, section: '17. Cost Optimization', sectionNum: 17, priority: 'medium' },
  { id: 'cost-2', name: 'Prompt compression', time: 2, section: '17. Cost Optimization', sectionNum: 17, priority: 'medium' },
  { id: 'cost-3', name: 'GPU cost estimation', time: 2, section: '17. Cost Optimization', sectionNum: 17, priority: 'low' },
];

// Projects to complete
export const PROJECTS = [
  { id: 'proj-1', name: 'Mini-transformer from scratch', time: 10, section: 'Projects', priority: 'high' },
  { id: 'proj-2', name: 'HuggingFace chatbot with Gradio', time: 5, section: 'Projects', priority: 'high' },
  { id: 'proj-3', name: 'Train custom tokenizer', time: 4, section: 'Projects', priority: 'medium' },
  { id: 'proj-4', name: 'Prompt evaluation framework', time: 6, section: 'Projects', priority: 'medium' },
  { id: 'proj-5', name: 'Full RAG with PDF ingestion', time: 13, section: 'Projects', priority: 'high' },
  { id: 'proj-6', name: 'Fine-tune LLaMA with LoRA', time: 11, section: 'Projects', priority: 'high' },
  { id: 'proj-7', name: 'Deploy LLM with FastAPI', time: 9, section: 'Projects', priority: 'high' },
  { id: 'proj-8', name: 'Security layer for RAG', time: 5, section: 'Projects', priority: 'medium' },
  { id: 'proj-9', name: 'Production API with auth', time: 9, section: 'Projects', priority: 'high' },
  { id: 'proj-10', name: 'Eval suite for RAG app', time: 7, section: 'Projects', priority: 'medium' },
  { id: 'proj-11', name: 'Optimize model inference 2x', time: 7, section: 'Projects', priority: 'medium' },
  { id: 'proj-12', name: 'Cost optimization report', time: 5, section: 'Projects', priority: 'low' },
];

// All tasks combined
export const ALL_ITEMS = [...STUDY_TOPICS, ...PROJECTS];

// LocalStorage keys
export const STORAGE_KEYS = {
  COMPLETIONS: 'ai_study_completions_v3',
  NOTES: 'ai_study_notes_v3',
  GOALS: 'ai_study_goals_v3',
  DAILY_STATS: 'ai_study_daily_stats_v3',
  TIMERS: 'ai_study_timers_v3',
  DARK_MODE: 'ai_study_dark_mode',
  PREFERENCES: 'ai_study_preferences_v3',
  QUEUE_STATE: 'ai_study_queue_v3',
  LAST_SECTION: 'ai_study_last_section_v3',
};
