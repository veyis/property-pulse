import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
    <section className='bg-black/50 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h3 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
          Xperience The Beauty 
          </h3>
          <h2 className='my-4 text-3xl text-white'>
          of This Remarkable City
          </h2>
        </div>
        {/* <PropertySearchForm /> */}
        <button className='bg-white text-blue-700 font-bold py-2 px-4 rounded-full mt-4'>
          Book Your Stay Now
        </button>
      </div>
    </section>
  );
};
export default Hero;
