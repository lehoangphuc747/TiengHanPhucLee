
'use client';

interface YoutubePlayerProps {
  videoId: string;
  className?: string;
}

export function YoutubePlayer({ videoId, className }: YoutubePlayerProps) {
  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
