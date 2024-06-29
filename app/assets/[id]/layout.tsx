import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = params;

  // fetch data
  const product = await fetch(`https://manaboss-default-rtdb.firebaseio.com/tx/${id}.json`);
  const resMetadata = await product.json();

 
  return {
    title: `${resMetadata.title}`,
    description: `${resMetadata.description}`,
    icons: {
        icon: "https://opensea.io/static/images/favicon/32x32.png", apple: "https://opensea.io/static/images/favicon/32x32.png" 
    },
    openGraph: {
        title: 'Next.js',
        description: 'The React Framework for the Web',
        url: 'https://nextjs.org',
        siteName: 'Next.js',
        images: [
          {
            url: 'https://m.media-amazon.com/images/I/61cM1GK+vlL._AC_UF894,1000_QL80_.jpg', // Must be an absolute URL
            width: 800,
            height: 600,
          },
          {
            url: 'https://m.media-amazon.com/images/I/61cM1GK+vlL._AC_UF894,1000_QL80_.jpg', // Must be an absolute URL
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
  }

  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}