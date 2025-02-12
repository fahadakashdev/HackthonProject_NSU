

const UserProfile = () => {
  return (
   <div className="flex justify-center items-center">
     <div className="w-[40%] mt-20 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-lg font-medium">Abdullah Al Rafi</h2>
            <div className="flex">
            <p className="text-sm text-gray-500">abdullah.haque@gmail.com | </p>
            <div className="text-sm text-gray-500">01850262787</div>
            </div>
          </div>
        </div>
        <button className="px-4 py-1 text-white bg-purple-600 rounded-md hover:bg-purple-700">
          Edit
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Total Points</h3>
          <p className="text-2xl font-semibold">1250</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Upvotes</h3>
          <p className="text-2xl font-semibold">564</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Downvotes</h3>
          <p className="text-2xl font-semibold">186</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default UserProfile;