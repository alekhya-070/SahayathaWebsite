type Props = {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white dark:bg-primary rounded-xl shadow p-6 text-center">
      <img src={icon} alt={title} className="mx-auto h-20" />
      <h3 className="mt-4 text-xl font-semibold text-primary dark:text-background">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
