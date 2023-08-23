import Team1 from "../assets/Team-1.jpg";
import Team2 from "../assets/Team-2.jpg";
import Team3 from "../assets/Team-3.jpg";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const imgDatas = [Team1, Team2, Team3, Team1, Team3, Team1];

function TheTeam() {
  return (
    <div className="w-full sm:pl-48 sm:mt-48">
      <h2 className="sm:text-6xl text-2xl font-semibold mb-14 fade-up">
        Meet the team
      </h2>
      <div>
        <ScrollingCarousel
          className="flex flex-row overflow-hidden overflow-x-visible"
          useArrowKeys={true}
        >
          {imgDatas.map((img, key) => (
            <div className="sm:w-[360px] w-[160px] fade-up" key={key}>
              <img src={img} className="sm:w-[360px] w-[160px]" />
              <caption className="w-max text-left mt-5">
                Alexander Zhestkov <br />
                <span className="font-thin text-slate-500">
                  Design Director
                </span>
              </caption>
            </div>
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  );
}

export default TheTeam;
