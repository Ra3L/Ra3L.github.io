/* eslint-disable react/no-unescaped-entities */
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import TSImg from "../assets/typescript.png";
import ReactImg from "../assets/react.png";
import CImg from "../assets/c.png";
import Azure from "../assets/azure.png";
import GitHub from "../assets/github.png";
import GitHubWhite from "../assets/github-white.png";
import SkillIcon from "../ui/SkillIcon";
import SectionHeader from "../ui/SectionHeader";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen">
      <div className="max-w-[64rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <SectionHeader>Skills</SectionHeader>
          <p className="py-4 text-xl">
            I have experience in various technologies, including but not limited
            to:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillIcon src={Javascript} alt="Javascript icon">
            JAVASCRIPT
          </SkillIcon>
          <SkillIcon src={TSImg} alt="React icon">
            TYPESCRIPT
          </SkillIcon>
          <SkillIcon src={ReactImg} alt="React icon">
            REACT
          </SkillIcon>
          <SkillIcon src={HTML} ALT="HTML icon">
            HTML
          </SkillIcon>
          <SkillIcon src={CSS} alt="CSS icon">
            CSS
          </SkillIcon>
          <SkillIcon src={CImg} alt="C icon">
            C
          </SkillIcon>

          <div className="hover:shadow-md hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto dark:block hidden"
              src={GitHubWhite}
              alt="Github icon"
            />
            <img
              className="w-20 mx-auto dark:hidden"
              src={GitHub}
              alt="Github icon"
            />
            <p className="my-4">GITHUB</p>
          </div>

          <SkillIcon src={Azure} alt="Azure icon">
            AZURE
          </SkillIcon>
        </div>
      </div>
    </div>
  );
}

export default Skills;
