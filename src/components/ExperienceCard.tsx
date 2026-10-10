
import { Briefcase, CalendarDays } from 'lucide-react';

interface CardProps {
title: string;
organization: string;
initialDate: string;
finalDate: string;
topics: string[];
}

function ExperienceCard({ title, organization, initialDate, finalDate, topics }: CardProps){
    return(
        <div className="lg:ms-10 lg:max-w-150 flex flex-col gap-2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 text(--text) shadow-brand backdrop:blur-xl transition-all duration-300">
            
            {/* Card Header */}
            <div className="md:flex md:items-center md:justify-between">

                {/* Title and Organization */}
                <div>
                    <h2 className="text-xl text-title font-bold">{title}</h2>  
                    <p className="text-md text-turquesa font-bold">{organization}</p>
                </div>

                {/* Tags EXPERIENCE e DURATION */}
                <div className="gap-2 mt-2 flex flex-col items-end">
                    <div className="text-text text-[8px] p-1 rounded-xl border border-text px-2 py-1"><p className="flex items-center gap-1"><Briefcase size={12}/>EXPERIENCE</p></div>
                    <div className="text-text text-[8px] p-1 rounded-xl border border-text px-2 py-1"><p className="flex items-center gap-1"><CalendarDays size={12}/>{initialDate} — {finalDate}</p></div>
                </div>

            </div>

            <div className="mt-4">
                <div className="mt-2">
                    {topics.map((topic, index) => (
                        <span key={index} className="flex gap-2 text-text text-[12px] mb-3">
                            <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-turquesa"></span> 
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;