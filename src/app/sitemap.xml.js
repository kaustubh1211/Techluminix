import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://www.techluminix.com"; 

  const pages = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
          <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>`;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
