import { getGoogleDriveVideoUrl } from '@/utils/googleDrive';

interface GoogleDriveEmbedProps {
  url: string;
}

export default function GoogleDriveEmbed({ url }: GoogleDriveEmbedProps) {
  const videoUrl = getGoogleDriveVideoUrl(url);

  if (!videoUrl) return null;

  return (
    <div className="rounded-lg overflow-hidden aspect-[9/16] max-w-[320px] mx-auto">
      <video src={videoUrl} controls playsInline className="w-full h-full" />
    </div>
  );
}
