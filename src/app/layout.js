import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Porto | Egga",
  description:
    "Portofolio Egga Maheza. Mengeksplorasi persimpangan antara desain visual, teknologi web, dan inovasi perangkat keras.",
  keywords: ["portofolio", "web developer", "IoT", "desain", "Egga Maheza"],
  authors: [{ name: "Egga Maheza" }],
  openGraph: {
    title: "Egga Maheza — Kreator Digital",
    description:
      "Mengubah ide kompleks menjadi pengalaman yang sederhana dan bermakna.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
