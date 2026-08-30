import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ShareButton() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = async (): Promise<void> => {
    const url: string = window.location.href;

    if (navigator.share) {
      await navigator.share({ url }).catch(() => undefined);
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      aria-label={t.share}
      className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs"
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      {copied ? t.linkCopied : t.share}
    </button>
  );
}
