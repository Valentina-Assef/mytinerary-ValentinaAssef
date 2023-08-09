export default function LinkNav({ to, title }) {
  return (
    <li className='md:ml-5 md:my-0 my-5'>
        <a href={to} className='nav-links text-gray-800 text-3xl hover:text-amber-500'>{title}</a>
    </li>
  )
}
