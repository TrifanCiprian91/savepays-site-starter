import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://savepays.com'),
  title: 'SavePay',
  description: 'Digital receipts & loyalty'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
