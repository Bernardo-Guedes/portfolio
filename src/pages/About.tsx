import Card from "../components/Card";
import StatCard from "../components/StatCard";
import { FileUser, MapPin } from "lucide-react";

function About() {
    return (
        <div className="xl:flex gap-3 mt-25 lg:mt-40">
            <Card title1="About" title2="Bernardo" tag="Profile" description="I work on the part of software development that starts beyond the basics: turning ideas into real applications, learning through projects, and building across the stack from frontend to backend.">
                <div className="my-3 border-t border-white/10" />
                    <div id="role" className="flex items-center gap-8">
                        <span className="text-text text-[10px]">ROLE</span>
                        <div>
                            <p className="text-title font-semibold">Computability Monitor</p>
                            <p className="text-text text-xs">PUC Minas · Set 2026 — present</p>
                        </div>
                    </div>

                    <div id="based" className="flex items-center gap-6 mt-3">
                        <span className="text-text text-[10px]">BASED</span>
                        <p className="text-text flex gap-2 items-center"><MapPin className="h-4 w-4 text-turquesa" /> Belo Horizonte, MG, Brazil</p>
                    </div>
                <div className="my-3 border-t border-white/10" />
                <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-2 text-text text-xs">
                        <span className="h-2 w-2 rounded-full bg-turquesa"></span>
                        Open to new roles
                    </p>
                    <a
                        href="#resume"
                        className="flex items-center gap-2 rounded-2xl text-turquesa bg-turquesa/10 hover:text-text-button hover:bg-bg-button border- border-turquesa px-3 py-1.25 text-xs font-semibold transition-colors"
                    >
                        <FileUser  size={15}/>
                        Resume
                    </a>
                </div>
            </Card>
            <div className="flex flex-col gap-3 lg:mt-3 lg:ms-20 lg:me-38">
                <div className="md:flex lg:gap-5">
                    <StatCard stat="6x" title="OLYMPIC MEDALIST" description="Participated in national and regional mathematics olympiads, including OBMEP, OMIF, OIMSF and Canguru. Earned six medals and distinctions ranging from Honorable Mention to Gold." />
                    <StatCard stat="2x" title="TEACHING ASSISTANT" description="Teaching assistant experience in both high-school Mathematics and university-level Computability. Currently supporting students at PUC Minas while developing my communication and problem-solving skills." />
                </div>
                <div className="md:flex lg:gap-5">
                    <StatCard stat="5+" title="PERSONAL PROJECTS" description="Built personal and academic projects throughout my learning journey, starting with HTML, CSS, JavaScript and JSON and progressing to modern frontend and backend development with React, Vite and Spring Boot." />
                    <StatCard stat="5+" title="TECHNOLOGIES & STACKS" description="Hands-on experience across different layers of software development, exploring frontend, backend, APIs and data persistence while continuously expanding my technical toolkit through real projects." />
                </div>

            </div>
        </div>

    );
}

export default About;