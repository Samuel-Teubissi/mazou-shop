import Link from 'next/link'

export const MazouBreadcrumbs = () => {
  return (
    <div className="text-small text-gray-700 py-3 px-6 max-w-6xl mx-auto box-border dark:text-dark-text mt-[80px] lg:mt-auto">
      <Link
        href="/"
        title="Mazou Homepage"
        className="hover:text-brand-primary-400"
      >
        {'<'} Retourner à l'acceuil
      </Link>
    </div>
  )
}
