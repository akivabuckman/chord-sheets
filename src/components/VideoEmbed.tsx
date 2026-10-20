interface VideoEmbedProps {
  src: string;
}

export default function VideoEmbed({ src }: VideoEmbedProps) {
  return (
    <div className="rounded-lg overflow-hidden aspect-[9/16] max-w-[320px] mx-auto">
      <video src={`${import.meta.env.BASE_URL}${src}`} controls playsInline className="w-full h-full" />
    </div>
  );
}
