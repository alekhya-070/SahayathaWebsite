type Member = {
  name: string, role: string, image: string
}
const team: Member[] = [
  { name: 'Alekhya Ganti', role: 'President', image: '/images/alekhiya.jpg' },
  { name: 'Rohit Sharma', role: 'Vice President', image: '/images/rohit.jpg' },
  { name: 'Sneha Iyer', role: 'Event Coordinator', image: '/images/sneha.jpg' },
]

export default function Team() {
  return (
    <section className="py-16 px-6 bg-softpurple/10">
      <h2 className="text-3xl font-bold text-center text-violet">Meet the Team</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {team.map(m => (
          <div key={m.name} className="w-64 bg-white dark:bg-primary rounded-lg shadow p-6 text-center">
            <img src={m.image} alt={m.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
            <h3 className="mt-4 text-lg font-semibold text-primary dark:text-background">{m.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
