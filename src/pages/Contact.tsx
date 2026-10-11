import ContactLink from "../components/ContactLink";
import { Mail, Send, Download } from 'lucide-react';
import InputForm from "../components/InputForm";
import ReasonSelect from "../components/ReasonSelect";

function Contact() {
  return (
    <div className="xl:flex gap-5 mx-5 xl:mx-50 items-stretch">
        <div className="xl:max-w-1/2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 xl:p-10 shadow-brand backdrop:blur-xl transition-all duration-300">
            <h3 className="text-3xl xl:text-4xl text-title font-bold">Let's Build Something</h3>
            <p className="text-text my-5">
                If you're interested in software development, web applications, or technology projects, I'd be happy to connect and talk about ideas, opportunities, and collaborations. I'm always open to learning, building new projects, and contributing to open-source initiatives.
            </p>
            <div>
                <ContactLink Icon={Mail} title="EMAIL" text="bguedessilveira@gmail.com" url="mailto:bguedessilveira@gmail.com" />
            </div>
            <div>
                <ContactLink Icon="devicon-linkedin-plain text-turquesa text-lg" title="LINKEDIN" text="linkedin.com/in/bernardoguedes" url="https://linkedin.com/in/bernardoguedes" />
            </div>
            <div>
                <ContactLink Icon="devicon-github-original text-turquesa text-lg" title="GITHUB" text="github.com/Bernardo-Guedes" url="https://github.com/Bernardo-Guedes" />
            </div>
            <a>
                <button className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2 md:py-3 text-[12px] text-ntitle font-bold bg-turquesa"><Download size={16}/>Download Resume</button>
            </a>
            <div className="my-3 mt-8 border-t border-white/10" />
            <small className="flex items-center gap-1 text-text text-[10px]">
                <span className="h-1 w-1 rounded-full bg-turquesa"></span> 
                Available for new opportunities
            </small>
        </div>
        <div className="my-10 xl:my-0 xl:max-w-1/2 rounded-2xl border border-white/10 bg-card-bg/95 p-10 shadow-brand backdrop:blur-xl transition-all duration-300">
            <h3 className="text-3xl xl:text-4xl text-title font-bold">Send a Message</h3>
            <p className="text-text my-5">Share the role, team, problem space, or product idea and I'll reply with context that's actually useful.</p>
            <div className="w-full xl:flex gap-3 items-center">
                <InputForm title="NAME" placeholder="Your name"/>
                <InputForm title="EMAIL" placeholder="you@company.com" />
            </div>
            <ReasonSelect />
            <InputForm title="MESSAGE" placeholder="Tell me about the opportunity or idea..." multiline/>
            <a>
                <button className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-lg border border-text/20 px-3 py-2 md:py-3 text-[12px] text-turquesa font-bold  hover:bg-turquesa/5 hover:border-turquesa/80 transition-all duration-300"><Send size={16}/><p className="text-title">Send Message</p></button>
            </a>
            <div className="my-3 mt-8 border-t border-white/10" />
            <div className="flex justify-center">
                <small className="text-text text-[8px]">Messages are sent securely to bguedessilveira@gmail.com with your email set as the reply-to.</small>
            </div>
        </div>
    </div>
  );
}

export default Contact;