import { getGoogleDriveEmbedUrl } from '@/utils/googleDrive';

interface GoogleDriveEmbedProps {
  url: string;
}

export default function GoogleDriveEmbed({ url }: GoogleDriveEmbedProps) {
  const embedUrl = getGoogleDriveEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div className="rounded-lg overflow-hidden aspect-[9/16] max-w-[320px] mx-auto">
      <iframe
        src={embedUrl}
        title="Google Drive video player"
        className="w-full h-full"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}
