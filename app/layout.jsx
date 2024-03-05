import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse - Find your dream home | PropertyPulse",
  description: "Find your dream home with PropertyPulse",
  keywords: "property, real estate, home, buy, sell, rent, property pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
