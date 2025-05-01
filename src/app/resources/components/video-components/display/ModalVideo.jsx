/**
 * @file ModalVideo.jsx
 * @module UI/Resources/VideoModal
 * @desc Fetches and displays a single video for use in modal views. 
 *       Attempts to source the video from context first, with API fallback.
 *
 * @features
 * - Retrieves video data from shared VideoResourceContext if available
 * - Falls back to API call if video is not found in context
 * - Displays loading and error states for better UX
 * - Renders `Video` component with minimal props (used in modal context)
 * 
 * @dependencies
 * - `Video` component (renders individual video UI)
 * - `VideoResourceContext` (provides shared video state)
 * 
 * @notes
 * - Must be rendered in a client component (due to hook usage and async fetch)
 * - Uses `NEXT_PUBLIC_SITE_URL` env variable to build fallback fetch URL
 * - Handles both client-preloaded and direct-access modal use cases
 * 
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated Apr 11, 2025
 */
import React, { useEffect, useState } from 'react';
import { useVideoResource } from '../VideoResourceContext';
import Video from './VideoCard';

export default function ModalVideo({ id, preventExpand = true }) {
  const { videos } = useVideoResource();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to find video from context
    const localVideo = videos?.find((v) => String(v.id) === String(id));

      // check the context first for the video
    if (localVideo) {
      setVideo(localVideo);
      setLoading(false);
    } else {
      // Fallback: fetch from API
      const fetchVideo = async () => {
        try {

          console.log("data being fetched 1")
          const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos/${id}`);

          console.log("data being fetched 2")
          if (!res.ok) {
            throw new Error(`Error fetching video: ${res.statusText}`);
          }
          const data = await res.json();
          console.log("data fetched 2", data)
          setVideo(data);

        } catch (err) {

          console.error('Error fetching video:', err);
          setVideo(null);
          setSource("error");
        } finally {
          setLoading(false);
        }
      };

      fetchVideo();
    }
  }, [id, videos]);

  if (loading) return <div className='p-10'>Loading video data...</div>;
  if (!video) return <div className='p-10'>Video with id:{id} not found.</div>;

  return(
    <div className="flex flex-col gap-2 h-full w-full">
      <Video video={video} noExpand={preventExpand}/>
    </div>
  )

}
