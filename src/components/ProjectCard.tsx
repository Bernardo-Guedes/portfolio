interface CardProps {
title: string;
urlLogoImg: string;
urlImg: string;
tools: string[];
iconTools: string[];
urlGitHub: string;
description: string;
className?: string;
}

function ProjectCard({ title, urlLogoImg, urlImg, tools, iconTools, urlGitHub, description }: CardProps){
    return(
        <div className="w-full h-full flex flex-col gap-2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 text-text shadow-brand backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center gap-3">   
                <img src={urlLogoImg} alt={title} className="mt-1 w-10 h-auto" />
                <h3 className="text-xl text-title font-bold">{title}</h3> 
            </div> 
            <img src={urlImg} alt={title} className="w-full h-auto object-cover rounded-lg" />
            <div className="flex mt-2 justify-between">
                <div className="flex gap-1">
                    {tools.map((tool, index) => (
                        <div key={index} className="text-turquesa text-[8px] p-1 rounded-xl border border-turquesa px-2"><p className="flex items-center gap-1"><i className={iconTools[index]} />{tool}</p></div>
                    ))}
                </div>
                <div>
                    <a href={urlGitHub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-turquesa">
                        <i className="devicon-github-original" />
                        GitHub
                    </a>
                </div>
            </div>
            <p className="text-xs/4 text-text mt-4">{description}</p>
        </div>
    )
}

export default ProjectCard;