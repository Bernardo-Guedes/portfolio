import { useState, type SyntheticEvent } from "react";
import ContactLink from "../components/ContactLink";
import { Mail, Send, Download } from 'lucide-react';
import InputForm from "../components/InputForm";
import ReasonSelect from "../components/ReasonSelect";
import { sendContactEmail } from "../services/emailService";
import { useTranslation } from "react-i18next";

interface FormState {
  name: string;
  email: string;
  reason: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "sending" | "success" | "error";

const INITIAL: FormState = { name: "", email: "", reason: "hiring", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
    
    const { t } = useTranslation();
    const [form, setForm] = useState<FormState>(INITIAL);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<Status>("idle");
    const sending = status === "sending";

    function validate(f: FormState): Errors {
        const errors: Errors = {};
        if (f.name.trim().length < 2) errors.name = t("contatos.erro_nome");
        if (!EMAIL_RE.test(f.email.trim())) errors.email = t("contatos.erro_email");
        if (f.message.trim().length < 10) errors.message = t("contatos.erro_mensagem");
        return errors;
    }


    const setField = (field: keyof FormState) => (value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
        if (status === "success" || status === "error") setStatus("idle");
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        // honeypot: bots preenchem, humanos não veem
        if (new FormData(e.currentTarget).get("website")) return;

        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        setStatus("sending");
        try {
            await sendContactEmail({
                name: form.name.trim(),
                email: form.email.trim(),
                reason: form.reason,
                message: form.message.trim(),
            });
            setStatus("success");
            setForm(INITIAL);
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };


    return (

        <div className="mt-25 xl:mt-40 xl:flex gap-5 mx-5 xl:mx-50 items-stretch">
            <div className="xl:max-w-1/2 rounded-2xl border border-white/10 bg-card-bg/95 p-4 xl:p-10 shadow-brand backdrop:blur-xl transition-all duration-300">
                <h3 className="text-3xl xl:text-4xl text-title font-bold">{t("contatos.titulo_secao1")}</h3>
                <p className="text-text my-5">
                    {t("contatos.texto_secao1")}
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
                    <button className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2 md:py-3 text-[12px] text-ntitle font-bold bg-turquesa"><Download size={16}/>{t("contatos.texto_botao1")}</button>
                </a>
                <div className="my-3 mt-8 border-t border-white/10" />
                <small className="flex items-center gap-1 text-text text-[10px]">
                    <span className="h-1 w-1 rounded-full bg-turquesa"></span> 
                    {t("contatos.rodape_secao1")}
                </small>
            </div>
            <form 
                onSubmit={handleSubmit} 
                noValidate 
                method="post"
                className="my-10 xl:my-0 xl:max-w-1/2 rounded-2xl border border-white/10 bg-card-bg/95 p-10 shadow-brand backdrop:blur-xl transition-all duration-300">

                <h3 className="text-3xl xl:text-4xl text-title font-bold">{t("contatos.titulo_secao2")}</h3>
                <p className="text-text my-5">{t("contatos.texto_secao2")}</p>
                <div className="w-full xl:flex gap-3 items-center">
                    <InputForm title={t("contatos.label_nome")} placeholder={t("contatos.placeholder_nome")} name="name" value={form.name} onChange={setField("name")} error={errors.name} disabled={sending}/>
                    <InputForm title="EMAIL" name="email" type="email" placeholder={t("contatos.placeholder_email")} value={form.email} onChange={setField("email")} error={errors.email} disabled={sending}/>
                </div>
                <ReasonSelect value={form.reason} onChange={setField("reason")}/>
                <InputForm title={t("contatos.label_mensagem")} name="message" multiline placeholder={t("contatos.placeholder_mensagem")} value={form.message} onChange={setField("message")} error={errors.message} disabled={sending}/>

                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                className="absolute -left-2499.75 h-0 w-0 opacity-0" />

                <p aria-live="polite" className={`text-xs ${status === "success" ? "text-turquesa" : "text-red-500"}`}>
                    {status === "success" && t("contatos.sucesso")}
                    {status === "error" && t("contatos.erro")}
                </p>

                <button
                    type="submit" 
                    disabled={sending}
                    className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-lg border border-text/20 px-3 py-2 md:py-3 text-[12px] text-turquesa font-bold  hover:bg-turquesa/5 hover:border-turquesa/80 transition-all duration-300">
                        <Send size={16}/>
                        <p className="text-title">{t("contatos.texto_botao2")}</p>
                </button>
                
                <div className="my-3 mt-8 border-t border-white/10" />
                <div className="flex justify-center">
                    <small className="text-text text-[8px]">{t("contatos.rodape_secao2")}</small>
                </div>
            </form>
        </div>
    );
}

export default Contact;