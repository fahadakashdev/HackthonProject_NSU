import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark, Link2 } from 'lucide-react';

const CrimeCard = () => {
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
    <div className="w-76 rounded-lg border border-gray-200 bg-white p-4 shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img src="https://i.ibb.co.com/kVzccF8g/Ellipse-1.png" alt="" className="" />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Abdullah Al Rafi</h3>
          <div className="flex items-center gap-2 text-[10px] text-[#787878]">
            <span className=''>12:36 AM</span>
            <span>|</span>
            <span>125 Points</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-[13px] font-semibold text-gray-900 mb-3">
          Shocking Incident Mirpur: 2 Person Got Injured And 1 Died...
        </h2>
        <div className="flex gap-2 mb-4 text-[10px]">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-">Dhaka</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-">Mirpur</span>
          <span className="flex items-center gap-1 text- text-gray-500 ml-auto">
            @ 08:15 AM
          </span>
        </div>
        
        <img src="https://i.ibb.co.com/Y7WRxh7p/Rectangle-6.png" alt="" className="w-full" />
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
  );
};

export default CrimeCard;