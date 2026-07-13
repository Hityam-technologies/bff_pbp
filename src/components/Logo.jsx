import logoImg from '../assets/betterFoodFactory.png';

export default function Logo({ className = '' }) {
  return (
    <img
      src={logoImg}
      alt="Better Food Factory"
      className={`h-20 sm:h-24 md:h-28 w-auto object-contain object-left ${className}`}
    />
  );
}
