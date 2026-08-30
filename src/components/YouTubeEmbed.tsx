import { getYouTubeEmbedUrl, isYouTubeShort } from '@/utils/youtube';

interface YouTubeEmbedProps {
  url: string;
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) return null;

  const vertical = isYouTubeShort(url);

  return (
    <div
      className={`rounded-lg overflow-hidden ${
        vertical ? 'aspect-[9/16] max-w-[320px] mx-auto' : 'w-full aspect-video'
      }`}
    >
      <iframe
        src={embedUrl}
        title="YouTube video player"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
