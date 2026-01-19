import { useRouter } from 'next/router';
import Link from 'next/link';

const PlatformOptionPage = () => {
  const router = useRouter();
  const { platform, option } = router.query;

  // Здесь можно добавить логику отображения контента для конкретной комбинации
  // платформы и опции (например, список казино с соответствующими играми)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {platform?.toString().toUpperCase().replace('-', '/') || 'Платформа'} - {option?.toString() || 'Опция'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выбранная категория: {platform?.toString()} с опцией {option?.toString()}
          </p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Доступные казино</h2>
          <p className="text-gray-600 dark:text-gray-300">
            На этой странице будут отображаться казино, подходящие для {platform?.toString()} с опцией {option?.toString()}.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            В реальном приложении здесь будет список казино с фильтрацией по выбранным параметрам.
          </p>
        </div>

        <div className="text-center">
          <Link href={`/platform/${platform}`}>
            <div className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors mr-4">
              Назад к опциям
            </div>
          </Link>
          <Link href="/">
            <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              На главную
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformOptionPage;