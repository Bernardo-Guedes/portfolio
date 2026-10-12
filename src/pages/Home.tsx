import cartaoPerfil from "../assets/images/cartao_perfil.png"
import { TiltCard } from "../components/PerfilCard";
import { useTranslation } from "react-i18next";

function Home(){
    const { t } = useTranslation();
    return(
        <div className="flex items-center gap-10 justify-center lg:justify-between lg:ms-20  mt-25 lg:mt-30 mx-5 lg:mx-0 xl:ms-50">
            <div className="max-w-140">
                <div className="flex items-center gap-1 mb-8 border border-turquesa/20 max-w-max px-3 py-1 rounded-xl">
                    <span className="h-1 w-1 rounded-full bg-turquesa/80"></span>
                    <p className="text-xs text-turquesa/80">{t("inicial.tag")}</p>
                </div>
                <h1 className="text-title text-5xl font-bold">Bernardo Guedes</h1>
                <div className="flex gap-2 text-2xl mt-2 font-medium"><h2 className="text-text">{t("inicial.titulo1")}</h2><h2 className="text-turquesa">{t("inicial.titulo2")}</h2></div>
                <p className="text-text  mt-10">{t("inicial.texto")}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-10">
                    <div className="border-l border-turquesa pl-3 min-w-0">
                        <h3 className="text-title text-xl font-semibold">6x</h3>
                        <p className="text-text text-[10px] mt-2">
                            {t("inicial.stat1")}
                        </p>
                    </div>

                    <div className="border-l border-turquesa pl-3 min-w-0">
                        <h3 className="text-title text-xl font-semibold">2x</h3>
                        <p className="text-text text-[10px] mt-2">
                            {t("inicial.stat2")}
                        </p>
                    </div>

                    <div className="border-l border-turquesa pl-3 min-w-0">
                        <h3 className="text-title text-xl font-semibold">5+</h3>
                        <p className="text-text text-[10px] mt-2">
                            {t("inicial.stat3")}
                        </p>
                    </div>

                    <div className="border-l border-turquesa pl-3 min-w-0">
                        <h3 className="text-title text-xl font-semibold">5+</h3>
                        <p className="text-text text-[10px] mt-2">
                            {t("inicial.stat4")}
                        </p>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="hidden xl:block lg:me-38">
                <TiltCard
                    tiltLimit={10}
                    scale={1.03}
                    effect="evade"
                    spotlight
                    className="rounded-2xl"
                    ><img src={cartaoPerfil} alt="" className="min-w-1/2 rounded-xl"/>
                </TiltCard>
            </div>

        </div>
    )
}

export default Home;