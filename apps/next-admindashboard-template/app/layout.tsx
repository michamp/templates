//import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme} from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Admin Dashboard",
  description: "Simple Next Mantine Admin Dashboard Template",
};

const theme = createTheme({
  /** Your theme override here */
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
  <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>

  );
}
