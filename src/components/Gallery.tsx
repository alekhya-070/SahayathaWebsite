export default function Gallery() {
  const images = [
    '/images/image 9.png',
    '/images/image 10.png',
    '/images/image 11.png',
    '/images/image 12.png',
    '/images/image 13.png',
    '/images/image 14.png',
    '/images/image 15.png',
    '/images/image 16.png',
    
  ]
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-violet">Gallery</h2>
      <p className="text-center text-gray-600 mt-2">Highlights from recent events.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map(src => (
          <img key={src} src={src} alt="Gallery item" className="rounded-lg shadow-sm" />
        ))}
      </div>
    </section>
  )
}
