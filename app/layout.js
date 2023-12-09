import { Toaster } from "react-hot-toast";
import "./globals.css";
import ReduxRootProvider from "@/Redux/ReduxRootProvider";

export const metadata = {
  title: "Techfilo",
  description:
    "Empowering Brands through Creative Design, Seamless Development, and Strategic Marketing Solutions at Techfilo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body
        className="scrollbar-thumb-primary scrollbar-thin"
        suppressHydrationWarning={true}
      >
        <ReduxRootProvider>{children}</ReduxRootProvider>
        <Toaster />
      </body>
    </html>
  );
}
