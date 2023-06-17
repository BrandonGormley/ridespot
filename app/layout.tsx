import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
    title: 'RideSpot - Find the Perfect Car for Day Rentals',
    description:
        'Discover a diverse selection of cars for day rentals at RideSpot. Explore and compare various makes and models, from sleek sports cars to spacious SUVs. Choose your ideal wheels and embark on unforgettable adventures. Start your journey with RideSpot today.',
    openGraph: {
        images: [
            {
                url: 'https://ride-spot.vercel.app/banner.jpg',
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='relative'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
