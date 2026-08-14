import { getYouTubeEmbedUrl } from '@/utils/youtube';

interface YouTubeEmbedProps {
  url: string;
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
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
