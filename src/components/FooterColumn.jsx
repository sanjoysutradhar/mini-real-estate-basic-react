function FooterColumn({ name, list }) {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">{name}</h4>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterColumn;
