import SectionWrapper from "../hoc/SectionWrapper";

function WhyRMS() {
  return (
    <div className="sm:w-11/12 w-full mt-20 ">
      <h2 className="text-secondary text-2xl font-semibold mb-10 fade-up">
        Why RMS
      </h2>
      <h3 className="sm:text-[5rem] text-[2rem] font-semibold tracking-tighter  leading-none fade-up">
        Provides industry expertise, access to resources, negotiation skills, in
        executing effective advertising campaigns.
      </h3>
      <div className="flex sm:flex-row flex-col gap-2 justify-between mt-10 sm:mt-48 ">
        <section className="text-2xl fade-up">Integrated team</section>
        <section className="text-2xl fade-up">Industry Experience</section>
        <section className="text-2xl fade-up">Technical Knowledge</section>
        <section className="text-2xl fade-up"> Direct Prior Experience</section>
        <section className="text-2xl fade-up">Global Resources</section>
        <section className="text-2xl fade-up">Readiness to act</section>
      </div>
    </div>
  );
}

export default SectionWrapper(WhyRMS);
