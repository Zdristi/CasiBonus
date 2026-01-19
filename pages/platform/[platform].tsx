import { useRouter } from 'next/router';
import { MainPlatform } from '@/types/casino';
import Link from 'next/link';
import { useState } from 'react';

interface PlatformPageProps {
  platform: MainPlatform;
}

const PlatformPage = () => {
  const router = useRouter();
  const { platform } = router.query;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Опции для каждой платформы
  const platformOptions: Record<string, string[]> = {
    cs2: ['Crash', 'Roulette', 'Slots'],
    dota2: ['Crash', 'Roulette', 'Slots'],
    rust: ['Crash', 'Roulette', 'Slots'],
    'usd-rub-crypto': ['Crash', 'Roulette', 'Slots']
  };

  const options = platformOptions[platform as string] || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {platform?.toString().toUpperCase().replace('-', '/') || 'Выберите платформу'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выберите интересующую вас категорию
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {options.map((option) => (
            <Link key={option} href={`/platform/${platform}/${option.toLowerCase()}`}>
              <div
                onClick={() => setSelectedOption(option)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 cursor-pointer ${
                  selectedOption === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                } shadow-md`}
              >
                {option}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/">
            <div className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
              Назад к главной
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;