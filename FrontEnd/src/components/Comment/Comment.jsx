import  { useState } from 'react'
import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark, Link2 } from 'lucide-react';
const Comment = () => {
    const [activeButton, setActiveButton] = useState({
        thumbsUp: false,
        thumbsDown: false,
        messageCircle: false,
        bookmark: false,
        link2: false,
      });
    
      const toggleButton = (button) => {
        setActiveButton((prevState) => ({
          ...prevState,
          [button]: !prevState[button],
        }));
      };
    
  return (
    <div>
        <div className="w-[65%] my-10 rounded-lg border border-gray-200 bg-white p-4 shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img src="https://i.ibb.co.com/kVzccF8g/Ellipse-1.png" alt="" className="" />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Abdullah Al Rafi</h3>
          <div className="flex items-center gap-2 text-[10px] text-[#787878]">
            
            
            <span>125 Points</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-[13px] font-semibold text-gray-900 mb-3">
          Shocking Incident Mirpur: 2 Person Got Injured And 1 Died...
        </h2>
        
        
        <div className="flex gap-4">
        <img src="https://i.ibb.co.com/Y7WRxh7p/Rectangle-6.png" alt="" className="w-36" />
        <img src="https://i.ibb.co.com/Y7WRxh7p/Rectangle-6.png" alt="" className="w-36" />
        </div>
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-2 ${activeButton.thumbsUp ?'text-primary'  : ''}`}
            onClick={() => toggleButton('thumbsUp')}
          >
            <ThumbsUp size={20} />
            <span>51</span>
          </button>
          <button
            className={`flex items-center gap-2 ${activeButton.thumbsDown ? 'text-primary' : ''}`}
            onClick={() => toggleButton('thumbsDown')}
          >
            <ThumbsDown size={20} className='mt-1' />
            <span>12</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-2 ${activeButton.messageCircle ? 'text-primary'  : ''}`}
            onClick={() => toggleButton('messageCircle')}
          >
            <MessageCircle size={20} />
            <span>6</span>
          </button>
          <button
            className={`flex items-center gap-2 ${activeButton.bookmark ? 'text-primary'  : ''}`}
            onClick={() => toggleButton('bookmark')}
          >
            <Bookmark size={20} />
          </button>
        </div>
        <button
          className={`flex items-center gap-2 ${activeButton.link2 ? 'text-primary' : ''}`}
          onClick={() => toggleButton('link2')}
        >
          <Link2 size={20} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Comment