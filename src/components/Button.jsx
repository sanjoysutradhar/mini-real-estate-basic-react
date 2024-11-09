export default function Button({ name, link, propClass }) {
  return (
    <a
      href={link}
      className={`inline-flex ${propClass} items-center justify-center rounded-md px-7 py-[14px] 
        text-center text-base font-medium shadow-1 transition duration-300 ease-in-out`}
    >
      {name}
    </a>
  );
}
