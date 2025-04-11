/**
 * @file Video.jsx
 * @module UI/Resources/Video
 * @desc Renders a single video entry including the title, video player (YouTube embed), 
 *       description, and any linked lesson plans.
 * 
 * @see {@link /utils/videoResouceUtils.js | extractYouTubeId Utility}
 * @see {@link /components/media/MediaFrame.jsx | MediaFrame Component}
 * 
 * @features
 * - Extracts YouTube video ID for embedding
 * - Displays description and associated lesson plans
 * - Scrollable metadata block for responsive layout
 * 
 * @props {object} video - A video object containing metadata such as title, media, and lessonPlans
 * 
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */

// utils
import { extractYouTubeId } from "@/utils/videoResouceUtils";
import { FaExpandArrowsAlt } from "react-icons/fa";

// components
import MediaFrame from "@/components/media/MediaFrame";
import Link from "next/link";

export default function Video({video, noExpand = false}) {

  return (
    <div  key={video.id} className="flex flex-col h-full justify-end gap-2">

      <div className="flex flex-col justify-start text-start px-1">
        <h3 className="text-lg font-semibold">{video.title}</h3>
      </div>
      <div className="z-10">

        <MediaFrame
          type="video"
          videoSrc={extractYouTubeId(video.media.url)}
          imgSrc={video.media.thumbUrl}
        />
      </div>
      <div className="h-32 shadow-md rounded-b-lg bg-white/60 -mt-4 -mr-0.5 pt-4 overflow-hidden border-1 border-black/30 relative z-0">
        {!noExpand &&
          <Link 
            scroll={false} 
            href={`/resources/videos?video=${video.id}`} 
            className=" absolute bottom-1 right-2"
          >
            <FaExpandArrowsAlt className="text-secondary hover:scale-105 hover:text-accent" />
          </Link>
        }

        <div className="h-full overflow-y-auto custom-scrollbar p-1.5 ">       

          <div className="flex gap-2  pr-1.5">
            <div className={`text-sm text-gray-500 flex-1 p-0.5 flex flex-col ${video.lessonPlans.length > 0 && "border-r border-gray-300"}`}>
              {video.description} 
            </div>

            {video.lessonPlans.length > 0 && (
              <div className="w-[35%] 2xl:w-[25%] flex-shrink-0 flex flex-col gap-1.5  text-start">
                <div className="text-sm font-semibold underline ">Lesson Plans</div>
                {video.lessonPlans.map((plan, index) => (
                  <a 
                  key={index}
                  href={plan.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-blue-600 hover:underline gap-1"
                  >
                    {plan.title || `Lesson Plan ${index + 1}`}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
