import SectionWrapper from "../hoc/SectionWrapper";
import User from "../assets/user.jpg";

function Message() {
  return (
    <div className="w-full sm:mt-40 mt-20 sm:pl-64 sm:pr-40">
      <h2 className="text-secondary text-2xl mb-10 font-semibold fade-up">
        Message form the chairman
      </h2>
      <p className="sm:text-5xl font-semibold fade-up">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="sm:w-[500px] flex mt-10 fade-up">
        <img src={User} />
        <caption className="w-max text-left flex flex-col pl-5 justify-center">
          Alexander Zhestkov <br />
          <span className="font-thin text-slate-500">Design Director</span>
        </caption>
      </div>
    </div>
  );
}

export default SectionWrapper(Message);
