import React, { useEffect, useState } from 'react';
import { useVideoResource } from '../VideoResourceContext';

export default function SingleVideo({ id }) {
  const { videos } = useVideoResource();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to find video from context
    const localVideo = videos?.find((v) => String(v.id) === String(id));

    if (localVideo) {
      setVideo(localVideo);
      setLoading(false);
    } else {
      // Fallback: fetch from API
      const fetchVideo = async () => {
        try {
          const res = await fetch(`/api/videos/${id}`);
          if (!res.ok) return;
          const data = await res.json();
          setVideo(data);
        } catch (err) {
          console.error('Error fetching video:', err);
          setVideo(null);
        } finally {
          setLoading(false);
        }
      };

      fetchVideo();
    }
  }, [id, videos]);



  if (loading) return <div>Loading video data...</div>;
  if (!video) return <div>Video not found.</div>;

  return (
    <div className=" bg-gray-100 text-sm p-4 rounded shadow font-mono whitespace-pre-wrap break-words">
      <pre>{JSON.stringify(video, null, 2)}</pre>
    </div>
  );
}
