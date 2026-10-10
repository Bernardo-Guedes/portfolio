interface CardProps {
stat: string;
title: string;
description: string;
}

function StatCard({ stat, title, description }: CardProps){
    return(
        <div className="mx-5 mt-3 lg:mx-0 lg:mt-0 max-w-150 flex flex-col gap-2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 shadow-brand backdrop:blur-xl transition-all duration-300">
            
            {/* Card Header */}
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-title">{stat}</span>
                <span className="text-turquesa text-[8px]">{title}</span>

            </div>

            {/* Card Description */}
            <div className="mt-4">
                <p className="text-text text-sm">{description}</p>
            </div>
        </div>
    )
}

export default StatCard;