import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Education</h2>
        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-colors shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Indian Institute of Technology Indore</h3>
              <p className="text-lg text-purple-300">B.Tech. in Electrical Engineering</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <span className="block text-gray-400 font-mono">Jul 2019 – May 2023</span>
              <span className="block text-sm text-gray-500 mt-1">Overall CGPA: 8.49</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
