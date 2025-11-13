// app/api/og/route.tsx
import {ImageResponse} from 'next/og';
import type {NextRequest} from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const locale = searchParams.get('locale') || 'ro';

  const title =
    locale === 'en'
      ? 'Digital receipts & loyalty in one app'
      : 'Chitanțe digitale și loialitate, într-o singură aplicație';

  const subtitle =
    locale === 'en'
      ? 'Scan your QR code, get the receipt, earn rewards.'
      : 'Scanezi codul QR, primești chitanța, câștigi beneficii.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(180deg,#E6F3FF,#FFFFFF)',
          padding: 64,
          position: 'relative'
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#0F172A',
            maxWidth: '80%'
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: '#334155',
            maxWidth: '80%'
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 64,
            fontSize: 24,
            color: '#2563EB'
          }}
        >
          savepays.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
