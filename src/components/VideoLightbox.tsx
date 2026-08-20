import { useEffect } from 'react';
import { X } from 'lucide-react';

type Props = {
  /** YouTube video ID */
  videoId: string | null;
  onClose: () => void;
};

const VideoLightbox = ({ videoId, onClose }: Props) => {
  useEffect(() => {
    if (!videoId) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-up"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative w-full max-w-6xl aspect-video shadow-poster"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={src}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoLightbox;
