import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";
import { Timeline, TimelineItem } from "../components/ProgressLine";

function Experience(){
    return (
        <div className="mt-15 xl:mt-40 xl:flex gap-3">
            <div className="xl:sticky xl:top-40 xl:self-start">
                <Card 
                    title1="Professional" 
                    title2="Experience" 
                    tag="Journey" 
                    description="I’ve grown from industrial automation into software engineering, gaining hands-on experience with PLCs, HMIs, Java, Spring Boot, Python, and React. I currently work as a Computer Science Theory teaching assistant at PUC Minas." 
                />
            </div>

            <Timeline>
                <TimelineItem>
                    <ExperienceCard 
                        title="Automation Assistant" 
                        organization="Siautec Engenharia - Betim/MG" 
                        initialDate="Ago 2025" 
                        finalDate="Jan 2026" 
                        topics=
                            {[
                                "I developed and carried out the programming, configuration, and testing of PLCs and HMIs in industrial automation projects.", 
                                "I organized information regarding materials, components, and purchases, assisting in the control and monitoring of resources required for the projects..", 
                                "I maintained direct contact with clients, gathering and conveying information regarding project needs and progress.",
                                "I served as a site supervisor, overseeing field activities, coordinating requirements, and ensuring alignment between execution and the project design."
                            ]} 
                    />
                </TimelineItem>
                <TimelineItem>
                    <ExperienceCard 
                        title="Computability Monitor" 
                        organization="PUC Minas - Coração Eucarístico" 
                        initialDate="Set 2026" 
                        finalDate="Present" 
                        topics=
                            {[
                                "I assist students in understanding concepts and solving exercises related to the Computability course.", 
                                "I support the professor during course activities, helping to monitor progress and clarify students' questions.", 
                                "I am developing my skills in communication, problem-solving, and explaining technical concepts."
                            ]} 
                    />
                </TimelineItem>
            </Timeline>
        </div> 
    );
}

export default Experience;