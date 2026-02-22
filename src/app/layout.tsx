export const metadata = {
  title: "Game Explorer",
  description: "Browse games using RAWG API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#f4f4f4" }}>
        {children}
      </body>
    </html>
  );
}
