import { franc } from 'franc-min';
import type { Language } from '../types';

export function detectLanguage(text: string): Language {
  const lang = franc(text, {
    minLength: 3,
    only: ['eng', 'por'],
  });

  if (lang === 'pot') {
    return {
      niceName: 'Português',
      code: 'pt-br',
    };
  }

  return {
    niceName: 'English',
    code: 'en',
  };
}
