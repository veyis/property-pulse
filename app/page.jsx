import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';
import AvailableProperties from '@/components/AvailableProperties';

const HomePage = () => {
  return (
    <>
        <div className="bg-cover bg-center flex justify-center items-center text-white text-center p-5 bg-repeat-no" style={{ backgroundImage: "url('/hero.png')" }}>
        <Hero />
  </div>

    <AvailableProperties />


      {/* <FeaturedProperties /> */}
      <HomeProperties />
      <InfoBoxes />
    </>
  );
};
export default HomePage;
