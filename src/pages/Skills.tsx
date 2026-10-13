import Card from "../components/Card";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import SafeBoundary from "../components/SafeBoundary";

const SkillsGlobe = lazy(() => import("../components/SkillsGlobe"));

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

            <SafeBoundary fallback={null}>
                <Suspense fallback={null}>
                    <SkillsGlobe height="auto" className="mx-auto xl:mx-0"
                    style={{width: "100%", maxWidth: 600, aspectRatio: "1 / 1" }} />
                </Suspense>
            </SafeBoundary>
            
        </div> 
    );
}

export default Skills;