import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const years = [2023, 2024, 2025];
const teams = [
  {
    year: 2023,
    members: [
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_090951.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091012.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091053.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091109.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091123.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091137.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091150.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091206.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091221.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091235.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091438.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091451.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091507.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091522.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091535.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091551.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091605.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091619.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091632.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091646.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091657.jpg' },
      { name: 'Core Member', role: '2023 Batch', img: '/images/zipfile1/IMG_20250719_091707.jpg' },
    ],
  },
  {
    year: 2024,
    members: [
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092549.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092640.jpg' },
      
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092339.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092538.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG 1.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/img2.png' },

      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092408.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092622.jpg' },

      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092609.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092655.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092708.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092722.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092733.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092748.jpg' },
      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092424.jpg' },

      { name: 'Core Member', role: '2024 Batch', img: '/images/zipfile2/IMG_20250719_092355.jpg' },

    ],
  },
  {
    year: 2025,
    members: [
      { name: 'Name', role: 'designation', img: '/images/team/2025/member1.jpg' },
      { name: 'Name', role: 'designation', img: '/images/team/2025/member2.jpg' },
      { name: 'Name', role: 'designation', img: '/images/team/2025/member3.jpg' },
    ],
  },
];

export default function OurTeam() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const currentTeam = teams.find(t => t.year === selectedYear);

  return (
    <>
      <Navbar />
      <section className="bg-[#23262b] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 text-gray-300">Home / Our Team</div>
          <h1 className="text-5xl font-extrabold mb-2">Our Team</h1>
        </div>
      </section>
      <div className="bg-white w-full">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-10">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 ${selectedYear === year ? 'bg-violet text-white shadow-lg' : 'bg-[#f4f2f7] text-gray-700'}`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="text-center text-2xl font-bold mb-8">
              Core<span className="text-violet"> Members</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentTeam?.members.map((member, i) => (
                <div key={i} className="bg-[#f8f8f8] rounded-2xl shadow-smooth p-6 flex flex-col items-center">
                  <div className="w-32 h-32 bg-[#ececec] rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-contain" style={{objectPosition: 'center'}} />
                  </div>
                  <div className="w-full text-left">
                    <div className="font-bold text-lg">{member.name}</div>
                    <div className="text-gray-500 text-sm mb-2">{member.role}</div>
                    <div className="flex gap-2 mt-2">
                      {[1,2,3].map(j => (
                        <span key={j} className="inline-block w-5 h-5 bg-violet rounded-full"></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
