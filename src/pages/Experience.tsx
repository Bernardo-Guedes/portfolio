import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";
import { Timeline, TimelineItem } from "../components/ProgressLine";
import { useTranslation } from "react-i18next";

function Experience(){
    const { t } = useTranslation();
    return (
        <div className="mt-15 xl:mt-40 xl:flex gap-3">
            <div className="xl:sticky xl:top-40 xl:self-start">
                <Card 
                    title1={t("experiencia.titulo1")} 
                    title2={t("experiencia.titulo2")} 
                    tag={t("experiencia.tag")} 
                    description={t("experiencia.texto")} 
                />
            </div>

            <Timeline>
                <TimelineItem>
                    <ExperienceCard 
                        title={t("experiencia.titulo_experiencia1")}  
                        organization={t("experiencia.local_experiencia1")} 
                        initialDate={t("experiencia.dataInicial_experiencia1")}
                        finalDate={t("experiencia.dataFinal_experiencia1")} 
                        topics={t("experiencia.topicos_experiencia1", { returnObjects: true, }) as string[]} 
                    />
                </TimelineItem>
                <TimelineItem>
                    <ExperienceCard 
                        title={t("experiencia.titulo_experiencia2")} 
                        organization={t("experiencia.local_experiencia2")} 
                        initialDate={t("experiencia.dataInicial_experiencia2")} 
                        finalDate={t("experiencia.dataFinal_experiencia2")} 
                        topics={t("experiencia.topicos_experiencia2", { returnObjects: true, }) as string[]} 
                    />
                </TimelineItem>
            </Timeline>
        </div> 
    );
}

export default Experience;