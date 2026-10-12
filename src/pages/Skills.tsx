import Card from "../components/Card";
import SkillsGlobe from "../components/SkillsGlobe";
import { useTranslation } from "react-i18next";

function Skills(){
    const { t } = useTranslation();
    return (
        <div className="mt-15 xl:mt-0 xl:flex gap-3">
            <div className="xl:shrink-0 xl:mt-20 xl:pe-40">
                <Card 
                    title1={t("ferramentas.titulo1")} 
                    title2={t("ferramentas.titulo2")}  
                    tag={t("ferramentas.tag")}
                    description={t("ferramentas.texto")}  
                />
            </div>

            <SkillsGlobe
                height="auto"
                className="mx-auto xl:mx-0"
                style={{ maxWidth: 600, aspectRatio: "1 / 1" }}
            />
            
        </div> 
    );
}

export default Skills;