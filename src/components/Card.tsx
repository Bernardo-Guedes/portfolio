interface CardProps {
title1: string;
title2: string;
tag: string;
description: string;
children?: React.ReactNode;
}

function Card({ title1, title2, tag, description, children }: CardProps){
    return(
        <div className="self-start mx-5 lg:mx-0 lg:ms-20 xl:ms-50 lg:max-w-200 xl:max-w-100 flex flex-col gap-2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 text(--text) shadow-brand backdrop:blur-xl transition-all duration-300">
            <p className="self-start flex items-center gap-2 rounded-2xl text-turquesa bg-turquesa/10 border border-turquesa text-xs font-semibold px-2 py-1">
                <span className="h-2 w-2 rounded-full bg-turquesa"></span> 
                {tag}
            </p>
            <h3 className="text-4xl text-title font-bold">{title1}</h3>  
            <h3 className="text-4xl text-turquesa font-bold">{title2}</h3> 
            <p className="text-xs/4 text-text mt-4">{description}</p>
            {children}
        </div>
    )
}

export default Card;