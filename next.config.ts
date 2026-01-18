import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: 'standalone', // Указываем standalone output для Render
  // Убедимся, что приложение может работать за reverse proxy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
        ],
      },
    ];
  },
  // Указываем внешние пакеты для серверных компонентов
  serverExternalPackages: [],
};

export default nextConfig;
