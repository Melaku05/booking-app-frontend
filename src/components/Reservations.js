import React from 'react';

const Reservations = () => (
  <form className="bg-menu dark:bg-gray-900 flex items-center justify-center h-screen" style={{ fontFamily: '"Lato", sans-serif' }}>
      <div className="form-input flex md:flex-row flex-col items-center py-8 px-4">
        {/* Code block starts */}
        <div className="flex flex-col md:mr-16">
          <label htmlFor="city" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            City
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-community" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <line x1="13" y1="7" x2="13" y2="7.01" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="17" y1="11" x2="17" y2="11.01" />
                <line x1="17" y1="15" x2="17" y2="15.01" />
              </svg>

            </div>
            <input type="text" id="city" name="city" className="form-input text-white dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-64 h-16 flex items-center pl-16 text-l border-gray-300 rounded-full border shadow placeholder:text-white placeholder:pl-4" placeholder="City" />
          </div>
        </div>
        {/* Code block ends */}
        {/* Code block starts */}
        <div className="flex flex-col md:mr-16 md:py-0 py-4">
          <label htmlFor="doctor" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            Please select a doctor
          </label>
          <div className="relative">
            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r dark:border-gray-700 h-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stethoscope" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
                <path d="M8 15a6 6 0 1 0 12 0v-3" />
                <path d="M11 3v2" />
                <path d="M6 3v2" />
                <circle cx="20" cy="10" r="2" />
              </svg>
            </div>
            <select id="doctor" name="doctor" className="text-white dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-64 h-16 flex items-center pl-16 text-l border-gray-300 rounded-full border shadow">
              <option value="Dr. Kim">Dr. Kim</option>
              <option value="Dr. Kim">Dr. Johnathon</option>
              <option value="Dr. Kim">Dr. Phil</option>
            </select>
          </div>
        </div>
        {/* Code block ends */}
        {/* Code block starts */}
        <div className="flex flex-col md:py-0 py-4">
          <label htmlFor="date" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            Booking Date
          </label>
          <div className="relative">
            <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-indigo-700 dark:bg-indigo-600 rounded-l-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <line x1="16" y1="3" x2="16" y2="7" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="4" y1="11" x2="20" y2="11" />
                <rect x="8" y="15" width="2" height="2" />
              </svg>
            </div>
            <input type="date" id="date" name="date" className="form-input text-white dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-64 h-16 flex items-center pl-16 text-L border-gray-300 rounded-full border shadow" />
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 hover:text-menu bg-white font-normal w-48 h-16 flex flex-col items-center justify-center text-xl border-gray-300 rounded-full border shadow">
          <button type="submit">Submit</button>
        </div>
      </div>
  </form>
);

export default Reservations;
