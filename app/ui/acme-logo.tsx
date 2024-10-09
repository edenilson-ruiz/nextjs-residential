import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { roboto } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <div>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      </div>      
      <p className="text-[44px]">Las Acacias</p>
    </div>
  );
}
