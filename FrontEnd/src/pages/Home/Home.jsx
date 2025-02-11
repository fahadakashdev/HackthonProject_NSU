
// import CrimeCard from "../../components/CrimeCard/CrimeCard";
// import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

// const Home = () => {
 
//   return (
//     <div className="px-20">
//       {/* Search Bar */}
//       <div className="flex justify-between py-5">
//         <div className="w-76 ">
//           <div className="absolute inset-y-0  left-3 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search via title"
//             className="w-76 pl-10 pr-4 py-2 rounded-md border border-gray-600 bg-[#F7ECFF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />
//         </div>

//         {/* Filter and Sort Buttons */}
//         <div className="flex justify-between   w-76 ">
//           <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 transition-colors">
//             <SlidersHorizontal className="h-4 w-4" />
//             <span>Filter</span>
//           </button>

//           <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 transition-colors">
//             <ArrowUpDown className="h-4 w-4" />
//             <span>Sort</span>
//           </button>
//         </div>
//         </div>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        

//         {/* Crime Cards */}
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//         <CrimeCard />
//       </div>
//     </div>
//   );
// };

// export default Home;


import CrimeCard from "../../components/CrimeCard/CrimeCard";
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';


const Home = () => {
  

  return (
    <div className="px-20">
      <div className="md:flex justify-between py-5">
         {/* Search Bar */}
         <div className="relative w-76 text-sm ">
          <div className="text-sm absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-black" />
          </div>
          <input
            type="text"
            placeholder="Search via title"
            
            className="w-76 pl-10 pr-10 py-2 rounded-md border border-[#787878] bg-[#F7ECFF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Filter and Sort Buttons */}
        <div className=" text-sm flex items-center justify-between  gap-36 w-76">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 transition-colors">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </button>

          <button className="flex items-center gap-2  py-2 rounded-md hover:bg-purple-100 transition-colors">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
       

        {/* Crime Cards */}
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
        <CrimeCard />
      </div>
    </div>
  );
};

export default Home;