import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface ContactLinkProps {
title: string;
Icon: LucideIcon | string;
url: string;
text: string;
}

function ContactLink({ Icon, title, text, url }: ContactLinkProps) {
    return(
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between  text-text border border-text/10 rounded-md px-3 py-2 pb-3 mb-5 hover:bg-turquesa/5 hover:border-turquesa hover:text-turquesa transition-all duration-300">
                <div className="flex items-center gap-3">
                    <div className="bg-turquesa/10 rounded-md p-2 flex items-center justify-center">
                        {typeof Icon === "string" ? (
                            <i className={Icon}></i>
                        ) : (
                            <Icon size={20} className="text-turquesa"/>
                        )}
                    </div>
                    <div>
                        <span className="text-xs text-text">{title}</span>
                        <p className="text-sm text-title font-semibold">{text}</p>
                    </div> 
                </div> 
                <ArrowUpRight size={22}/>
            </div>
        </a>
    )
}

export default ContactLink;