export const metadata = {
  metadataBase: new URL("https://ok11.vercel.app"),

  title: "OK11 Game APK Download – Official Website",
  description:
    "Download OK11 Game APK. Get ₹500 bonus. Play 100+ games safely.",

  openGraph: {
    title: "OK11 Game APK Download – Official Website",
    description:
      "Free OK11 Game APK download with ₹500 welcome bonus.",
    url: "https://ok11.vercel.app",
    siteName: "OK11 Game",
    images: [
      {
        url: "/ok11icon.webp",
        width: 512,
        height: 512,
        alt: "OK11 Game Official App Icon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OK11 Game APK Download – Official Website",
    description:
      "Download OK11 Game APK & get ₹500 bonus.",
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
