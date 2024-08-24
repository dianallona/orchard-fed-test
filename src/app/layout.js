import MainLayout from "@/components/layout/main-layout";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Orchard Interface Development Test",
  description: "Created by Diana Llona",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
