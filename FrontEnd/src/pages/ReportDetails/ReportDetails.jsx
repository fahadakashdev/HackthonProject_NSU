import  { useState } from 'react'
import { MdSos } from "react-icons/md";
import { ThumbsUp, ThumbsDown, MessageCircle,  Link2, MessageCircleWarning } from 'lucide-react';
import Comment from '../../components/Comment/Comment';
const ReportDetails = () => {
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
    <div className='flex justify-center mt-4 '>
        <div className="w-full max-w-[36rem] h-[500px] overflow-y-auto  rounded-lg border border-gray-200 bg-white p-4 shadow">
      {/* Header */}
      <div className="flex justify-between">
      <div className="flex items-center gap-3 mb-4">
        <img src="https://i.ibb.co.com/fYbCngr5/Ellipse-1-1.png" alt="" className="" />
        <div>
          <h3 className="font-semibold text-[22px] text-gray-800">Abdullah Al Rafi</h3>
          <div className="flex items-center gap-2 text-sm text-[#787878]">
            <span className=''>12:36 AM</span>
            <span>|</span>
            <span>125 Points</span>
          </div>
        </div>
      </div>
      <img src="https://i.ibb.co.com/fGMjFPnn/Ellipse-3.png" alt="" className="" />
      </div>

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
        Shocking Incident Mirpur: 2 Person Got Injured And 1 Died By A Terrorist
        </h2>
        <p className="text-[13px">
        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
        </p>
        <div className="flex gap-2 mb-4 text-sm mt-4">
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
        <div className="flex items-center gap-6">
          <button
            className={`flex items-center gap-2 ${activeButton.thumbsUp ?'text-primary'  : ''}`}
            onClick={() => toggleButton('thumbsUp')}
          >
            <ThumbsUp size={24} />
            <span>51</span>
          </button>
          <button
            className={`flex items-center gap-2 ${activeButton.thumbsDown ? 'text-primary' : ''}`}
            onClick={() => toggleButton('thumbsDown')}
          >
            <ThumbsDown size={24} className='mt-1' />
            <span>12</span>
          </button>
          <button
            className={`flex items-center gap-2 ${activeButton.messageCircle ? 'text-primary'  : ''}`}
            onClick={() => toggleButton('messageCircle')}
          >
            <MessageCircle size={24} />
            <span>6</span>
          </button>
        </div>
        <div className="flex items-center gap-6">
        <button
            className={`flex items-center gap-2 text-red-600 text-2xl ${activeButton.bookmark ? 'text-primary'  : ''}`}
            onClick={() => toggleButton('bookmark')}
          >
            <MdSos />
          </button>
          <button
          className={`flex items-center gap-2 ${activeButton.link2 ? 'text-primary' : ''}`}
          onClick={() => toggleButton('link2')}
        >
          <Link2 size={24} />
        </button>
          <button
          
          
        >
         
          <MessageCircleWarning size={24} />
        </button>
        </div>
        
      </div>
      <Comment></Comment>
    </div>
    
    </div>
  )
}

export default ReportDetails