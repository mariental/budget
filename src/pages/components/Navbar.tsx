const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Invest', href: '#', current: false },
  { name: 'Statistic', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
      <div className="bg-zinc-800 p-3">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white','px-3 py-2 rounded-md text-sm font-medium')}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    )
  }
  