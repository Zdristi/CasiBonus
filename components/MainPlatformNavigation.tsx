import { MainPlatform } from '@/types/casino';
import Link from 'next/link';

interface MainPlatformNavigationProps {
  selectedPlatform?: MainPlatform;
}

const platforms: MainPlatform[] = ['CS2', 'Dota2', 'Rust', 'USD/RUB/Crypto'];

const MainPlatformNavigation = ({ selectedPlatform }: MainPlatformNavigationProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {platforms.map((platform) => (
        <Link key={platform} href={`/platform/${platform.toLowerCase().replace(/\//g, '-')}`}>
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
              selectedPlatform === platform
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {platform}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainPlatformNavigation;