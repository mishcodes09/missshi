import "./globals.css";

export const metadata = {
  title: "mishsspace | Junior UI/UX Designer",
  description: "Portfolio of Mihle Mncunzwa — Junior UI/UX Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
