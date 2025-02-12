
import { RxCross2 } from "react-icons/rx";


const AddReport = ({ isOpen, onClose }) => {
   if (!isOpen) return null; // If modal is not open, don't render it

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Outer container for modal */}
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-lg shadow-md">
        {/* Cancel Icon */}
        <div className="absolute top-3 right-3 opacity-70">
          <button onClick={onClose} className="text-gray-700 text-3xl font-normal">
            <RxCross2 />
          </button>
        </div>

        {/* Background and Content */}
        <div className="p-6">
          {/* Modal Title */}
          <h1 className="text-[50px] text-primary font-['Cookie'] text-center py-4">
            Add Report
          </h1>

          {/* Form Fields */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
            <div className="mb-4 flex-1">
              <label className="block text-base text-gray-700">Title:</label>
              <input
                type="text"
                placeholder="Enter title"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4 flex-1">
              <label className="block text-base text-gray-700">Division:</label>
              <input
                type="text"
                placeholder="Enter division"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            </div>
            <div className="flex gap-4 ">
            
            <div className="mb-2 flex-1">
              <label className="block text-base text-gray-700">District:</label>
              <input
                type="text"
                placeholder="Enter district"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-2 flex-1">
              <label className="block text-base text-gray-700">Select Time:</label>
              <input
                type="datetime-local"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            </div>
            <div className="mb-2 flex-1">
              <label className="block text-base text-gray-700">Description:</label>
              <input
                type="text"
                placeholder="Enter district"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            
            <div className="flex gap-4">
            <div className="mb-4 flex-1">
              <label className="block text-base text-gray-700">Image Upload:</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4 flex-1">
              <label className="block text-base text-gray-700">Video Upload:</label>
              <input
                type="file"
                accept="video/*"
                className="w-full p-4 text-[10px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            </div>
          </div>

          <div className="text-black mb-2 flex gap-4">
            <div className="">Post Anonymously</div>
            <div className="border p-3 border-black"></div>
          </div>

          {/* Create Button */}
          <div className="w-full mx-auto text-center">
            <button onClick={onClose} className="bg-primary text-lg px-16 text-white p-2 rounded">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReport;