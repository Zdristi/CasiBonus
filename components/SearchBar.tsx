import { useState } from 'react';
import { Casino } from '@/types/casino';

interface SearchBarProps {
  casinos: Casino[];
  onSearchResults: (results: Casino[]) => void;
}

const SearchBar = ({ casinos, onSearchResults }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      // Если поле поиска пустое, показываем все казино
      onSearchResults(casinos);
      return;
    }

    const filteredCasinos = casinos.filter(casino => 
      casino.name.toLowerCase().includes(term.toLowerCase()) ||
      casino.description.toLowerCase().includes(term.toLowerCase()) ||
      (casino.categories && casino.categories.some(cat => 
        cat.toLowerCase().includes(term.toLowerCase())
      ))
    );

    onSearchResults(filteredCasinos);
  };

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Поиск казино..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      />
      <div className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;