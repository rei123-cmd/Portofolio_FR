/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Wajib untuk GitHub Pages: generate situs full-static ke folder /out
  output: "export",

  // Nama repo kamu adalah "Portofolio_FR", jadi situs akan ter-host di
  // https://rei123-cmd.github.io/Portofolio_FR — semua path perlu di-prefix ini.
  // Kalau nanti pakai custom domain, HAPUS basePath & assetPrefix ini.
  basePath: "/Portofolio_FR",
  assetPrefix: "/Portofolio_FR/",

  // GitHub Pages tidak punya server untuk optimisasi gambar Next.js,
  // jadi image optimization harus dimatikan.
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  // Membantu routing statis: tiap route jadi /route/index.html
  // sehingga refresh/deep-link di GitHub Pages tidak 404.
  trailingSlash: true,
};

module.exports = nextConfig;