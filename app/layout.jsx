export const metadata = {
  title: "OK11 Game APK Download - Official website | ₹500 Bonus",
  description:
    "ok11 Game offers exciting slot games for entertainment. Download now and enjoy amazing gaming experience.",
  robots: "index, follow",
  openGraph: {
    title: "ok11 Game APK - official website",
    description:
      "Free download ok11 Game APK for Android. Get ₹500 welcome bonus.",
    images: ["/ok11icon.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ok11icon.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
