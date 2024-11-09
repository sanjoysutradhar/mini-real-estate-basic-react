export default function NavItems({ name, link }) {
  return (
    <li className="group relative">
      <a
        href={link}
        className="ud-menu-scroll mx-8 flex py-2 text-base
         font-medium text-dark group-hover:text-primary
          dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6
           lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
      >
        {name}
      </a>
    </li>
  );
}
