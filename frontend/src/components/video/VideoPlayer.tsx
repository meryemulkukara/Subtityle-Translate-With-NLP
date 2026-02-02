import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

type VideoPlayerProps = {
  src: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<videojs.Player | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src,
            type: 'video/mp4',
          },
        ],
      });
    } else {
      playerRef.current.src({ src, type: 'video/mp4' });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src]);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
      />
    </div>
  );
};

