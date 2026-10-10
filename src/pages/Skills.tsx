import Card from "../components/Card";
import SkillsGlobe from "../components/SkillsGlobe";

function Skills(){
    return (
        <div className="mt-15 xl:mt-20 xl:flex gap-3">
            <div className="xl:sticky xl:top-40 xl:self-start xl:shrink-0 xl:mt-20 xl:pe-40">
                <Card 
                    title1="Technical" 
                    title2="Stack" 
                    tag="Expertise" 
                    description="The technologies we use most to turn ideas into projects, spanning web development, full-stack applications, and software solutions." 
                />
            </div>

            <SkillsGlobe
                height="auto"
                className="mx-auto xl:mx-0"
                style={{ maxWidth: 600, aspectRatio: "1 / 1" }}
            />
            
        </div> 
    );
}

export default Skills;