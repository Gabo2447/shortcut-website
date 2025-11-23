const Hero: React.FC = () => {
  return (
    <section className="px-4 py-2 flex justify-center items-center flex-col my-8">
      <h1 className="font-bold text-blue-50 text-center max-w-[500px] text-[42px] leading-9 sm:text-5xl sm:leading-14 lg:text-6xl lg:leading-16">
        Paste the URL to be shortened
      </h1>
      <p className="text-neutral-200/60 text-center max-w-[600px] text-md sm:text-lg lg:text-xl">
        Create short, branded links that are easy to share and track. Get
        detailed analytics and insights on every click.
      </p>
    </section>
  );
};

export default Hero;
