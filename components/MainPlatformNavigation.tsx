import { MainPlatform } from '@/types/casino';
import Link from 'next/link';

interface MainPlatformNavigationProps {
  selectedPlatform?: MainPlatform;
}

const platforms: MainPlatform[] = ['CS2', 'Dota2', 'Rust', 'USD/RUB/Crypto'];

const MainPlatformNavigation = ({ selectedPlatform }: MainPlatformNavigationProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {platforms.map((platform) => (
        <Link key={platform} href={`/platform/${platform.toLowerCase().replace(/\//g, '-')}`}>
          <div
            className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-md ${
              selectedPlatform === platform
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
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