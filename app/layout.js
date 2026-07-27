import "./globals.css";

export const metadata = {
  title: "mishsspace | Junior Software Developer",
  description: "Portfolio of Mihle Mncunzwa — Junior Software Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
