import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse - Find your dream home | PropertyPulse",
  description: "Find your dream home with PropertyPulse",
  keywords: "property, real estate, home, buy, sell, rent, property pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
