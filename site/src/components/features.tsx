const features = [
  {
    icon: '🧩',
    title: 'Hooks',
    description:
      'React hooks to help you build your sui dapp faster and easier.'
  },
  {
    icon: '🔗',
    title: 'Connect Wallet',
    description: 'Connect your wallet to the sui network in a simple way.'
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    description: 'Beautiful and modern design that makes a difference.'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description:
      'Tailored for your needs and responsive to fit any screen size.'
  },
  {
    icon: '🔧',
    title: 'Typescript Support',
    description:
      'Build your sui dapp with typescript to get the best development experience.'
  },
  {
    icon: '🌐',
    title: 'Translations (coming)',
    description:
      'Choose from multiple languages to make your sui dapp more accessible.'
  }
]

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:items-start gap-2 md:gap-4 border-primary border px-4 py-5 rounded-lg"
        >
          <span className="text-2xl bg-muted/40 p-2 rounded-md leading-none">
            {feature.icon}
          </span>
          <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
          <p className="text-sm md:text-base text-center md:text-left text-gray-500 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
