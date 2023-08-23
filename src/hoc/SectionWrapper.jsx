function SectionWrapper(Component) {
  return function HOC() {
    return (
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <Component />
      </div>
    );
  };
}

export default SectionWrapper;
