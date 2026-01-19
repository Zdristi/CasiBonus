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
                className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg ${
                  selectedOption === option
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-xl'
                    : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                }`}
              >
                {option}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all transform hover:scale-105 shadow-md">
              Назад к главной
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;