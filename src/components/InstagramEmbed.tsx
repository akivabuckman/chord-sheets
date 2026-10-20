import { useEffect } from 'react';
import { getInstagramPermalink } from '@/utils/instagram';

interface InstagramEmbedProps {
  url: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const EMBED_SCRIPT_SRC = 'https://www.instagram.com/embed.js';

function processEmbeds(): void {
  window.instgrm?.Embeds.process();
}

function loadEmbedScript(): void {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SCRIPT_SRC}"]`);
  if (existing) {
    existing.addEventListener('load', processEmbeds);
    return;
  }

  const script = document.createElement('script');
  script.src = EMBED_SCRIPT_SRC;
  script.async = true;
  script.addEventListener('load', processEmbeds);
  document.body.appendChild(script);
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const permalink = getInstagramPermalink(url);

  useEffect(() => {
    if (!permalink) return;

    if (window.instgrm) {
      processEmbeds();
    } else {
      loadEmbedScript();
    }
  }, [permalink]);

  if (!permalink) return null;

  return (
    <div className="w-full max-w-[400px] mx-auto flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{ margin: 0 }}
      />
    </div>
  );
}
