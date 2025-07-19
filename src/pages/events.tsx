import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function getYouTubeThumbnail(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '/images/placeholder.jpg';
}

export default function Events() {
  const galleryImages = [
    "2024_08_19_0737.JPG",
    "2024_08_19_1062.JPG",
    "2024_08_19_1232.JPG",
    "2024_08_19_1401.JPG",
    "image1.jpg",
    "image1.png",
    "image14.png",
    "image16.png",
    "image2.png",
    "image5.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "IMG_0595.JPG",
    "IMG_0706.JPG",
    "IMG_0836.JPG",
    "IMG_1958.JPG",
    "IMG_2052.JPG",
    "IMG_2054.JPG",
    "IMG_2078.JPG",
    "IMG_2211.JPG",
    "_MG_1937.JPG"
  ];
  const [current, setCurrent] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  function scrollToIndex(idx: number) {
    setCurrent(idx);
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: idx * galleryRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }

  // Slideshow timer for gallery
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = prev + 1;
        if (next < galleryImages.length) {
          scrollToIndex(next);
          return next;
        } else {
          scrollToIndex(0);
          return 0;
        }
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <>
      <Navbar />
      <section className="bg-[#23262b] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 text-gray-300">Home / Events</div>
          <h1 className="text-5xl font-extrabold mb-2">Events</h1>
        </div>
      </section>
      {/* Sliding Gallery at Top */}
      <section className="py-16 px-6 bg-[#f4f2f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8"><span className="text-black">Gallery</span></h2>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-8 overflow-x-auto custom-scrollbar"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
              ref={galleryRef}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="min-w-full h-[500px] flex-shrink-0 flex items-center justify-center"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ece9f7] to-[#d1c4e9] rounded-3xl shadow-2xl border border-[#e0e0e0]">
                    <img
                      src={`/images/images/${img}`}
                      alt={`Gallery ${i + 1}`}
                      className="object-contain w-full h-full rounded-2xl transition-transform duration-700 ease-in-out"
                      style={{ boxShadow: '0 8px 32px rgba(80, 60, 180, 0.12)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Modern navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-500 to-indigo-400 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 z-10 border-2 border-white"
              onClick={() => scrollToIndex(Math.max(current - 1, 0))}
              disabled={current === 0}
              aria-label="Previous image"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-500 to-indigo-400 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 z-10 border-2 border-white"
              onClick={() => scrollToIndex(Math.min(current + 1, galleryImages.length - 1))}
              disabled={current === galleryImages.length - 1}
              aria-label="Next image"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Custom scrollbar style */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .custom-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        </div>
      </section>
      {/* Past Events Section below gallery */}
      <section className="py-16 px-6 bg-[#f4f2f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8"><span className="text-black">Past <span className="text-violet">Events</span></span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'sahayata club 2024 Era.',
                link: 'https://youtu.be/gKjoaThp4d8?si=gAhA71LMgmXbg-nj'
              },
              {
                title: 'Epic Moments: Sahayatha Club Trinity Sports Event Highlights!',
                link: 'https://youtu.be/OTEbIYlp2gQ?si=bGw3_9jrcChghPXE'
              },
              {
                title: 'Vedic Maths 3rd Workshop',
                link: 'https://youtu.be/fHVtJ2TNnac?si=5rfftjuGXLjNeAYu'
              },
              {
                title: 'From Service to Celebration',
                link: 'https://youtu.be/rH48Hdy8L94?si=yRikXBeQqgZWHqAq'
              },
              {
                title: 'Battleground Blitz event highlights by @Sahayathavitc @VITChennai',
                link: 'https://youtu.be/KFnR4Ns8ujw?si=YjYDuvm2O7ao-Ypb'
              },
              {
                title: 'Code for a Cause- Offline first Event @VITChennai',
                link: 'https://youtu.be/mUDzLHLWtNA?si=FNysb-uPspowkTFN'
              },
              {
                title: 'Vedic Maths and English - Career Guidance - Games',
                link: 'https://youtu.be/ub72KRMhSm0?si=tAQUzdnQyoNGV-F5'
              },
              {
                title: 'SAHAYATHA Club First Event @VITChennai',
                link: 'https://youtu.be/ROps7Xa2TJA?si=b0mtjMr82qK6Oj8a'
              },
            ].map((event, i) => (
              <a
                key={event.title}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-smooth p-4 transition-transform hover:scale-105 cursor-pointer border-4 border-[#ececec]"
              >
                <div className="flex flex-col h-full">
                  <img src={getYouTubeThumbnail(event.link)} alt={event.title} className="bg-[#e0e0e0] rounded-xl h-40 w-full object-cover mb-4" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">{event.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4"></p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
