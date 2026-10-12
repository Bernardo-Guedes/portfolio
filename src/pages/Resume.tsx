
import { ZoomIn, ZoomOut ,Maximize2, Download, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_PASSO = 0.25;

function Resume(){

    const { t, i18n } = useTranslation();
    const areaRef = useRef<HTMLDivElement>(null);
    const [largura, setLargura] = useState<number | null>(null);
    const [paginas, setPaginas] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [erro, setErro] = useState(false);

    const lang = i18n.language.startsWith("en") ? "en" : "pt";
    const fileUrl = `/cv-${lang}.pdf`;

    // Trocou o idioma: outro PDF, que ainda não carregou nem deu erro
    const [arquivoAtual, setArquivoAtual] = useState(fileUrl);
    if (arquivoAtual !== fileUrl) {
        setArquivoAtual(fileUrl);
        setPaginas(0);
        setErro(false);
    }

    // Com zoom 100%, a página ocupa a largura da área (acompanha a janela)
    useEffect(() => {
        const area = areaRef.current;
        if (!area) return;
        // Largura útil da área, sem o padding (a margem em volta das páginas)
        const medir = (largura: number) => setLargura(Math.max(200, Math.floor(largura)));
        if (!("ResizeObserver" in window)) {
            const estilo = getComputedStyle(area);
            medir(area.clientWidth - parseFloat(estilo.paddingLeft) - parseFloat(estilo.paddingRight));
            return;
        }
        const observer = new ResizeObserver(([entry]) => medir(entry.contentRect.width));
        observer.observe(area);
        return () => observer.disconnect();
    }, []);

    const mudarZoom = (delta : number) =>
        setZoom((atual) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, atual + delta)));

    const larguraDaPagina = largura ? Math.round(largura * zoom) : undefined;
    const carregando = !erro && paginas === 0;

    return(
        <div className="mx-5 xl:mx-50 mt-25 lg:mt-30 rounded-2xl border border-white/10 bg-card-bg/95 shadow-brand backdrop:blur-xl transition-all duration-300">

            {/*Cabeçalho da seção do currículo*/}
            <div className="md:flex items-center justify-between px-7 py-3">

                {/*Título da seção*/}
                <div className="mb-4 md:mb-0 flex items-center gap-2">
                    <span className="text-title text-2xl md:text-3xl font-bold">{t("curriculo.titulo")}</span>
                    <span className="ms-3 text-text text-sm font-normal">{t("curriculo.paginas", { count: paginas })}</span>
                </div>

                {/*Botões de zoom*/}
                <div className="mb-4 md:mb-0 flex gap-2 items-center text-white">
                    <button onClick={() => mudarZoom(-ZOOM_PASSO)}  disabled={zoom <= ZOOM_MIN} aria-label={t("curriculo.zoom_menos")}  title={t("curriculo.zoom_menos")} className="cursor-pointer hover:bg-turquesa/20 border rounded-md border-turquesa bg-turquesa/10 p-1"><ZoomOut size={18}/></button>
                    <span className="text-md text-text font-medium">{Math.round(zoom * 100)}%</span>
                    <button onClick={() => mudarZoom(ZOOM_PASSO)}  disabled={zoom >= ZOOM_MAX} aria-label={t("curriculo.zoom_mais")}  title={t("curriculo.zoom_mais")} className="cursor-pointer hover:bg-turquesa/20 border rounded-md border-turquesa bg-turquesa/10 p-1"><ZoomIn size={18}/></button>
                    <button onClick={() => setZoom(1)}  disabled={zoom === 1} aria-label={t("curriculo.zoom_ajustar")}  title={t("curriculo.zoom_ajustar")} className="cursor-pointer hover:bg-turquesa/20 border rounded-md border-turquesa bg-turquesa/10 p-1"><Maximize2 size={18}/></button>
                </div>

                <div className="md:flex items-center gap-3">
                    <a href={fileUrl} download={t("curriculo.arquivo")} className="justify-center mx-1 mb-2 md:mx-0 md:mb-0 cursor-pointer flex items-center gap-1 rounded-md px-3 py-1.25 text-[12px] text-ntitle font-bold bg-turquesa"><Download size={18}/>{t("curriculo.baixar")}</a>
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="justify-center mx-1 md:mx-0 ursor-pointer flex items-center gap-1 rounded-md text-turquesa bg-turquesa/10 hover:text-text-button hover:bg-bg-button border- border-turquesa px-3 py-1.25 text-xs font-semibold transition-colors"><ExternalLink size={18}/>{t("curriculo.abrir")}</a>
                </div>
            </div>

            <div 
                ref={areaRef}
                className="flex flex-col items-center gap-6 p-6 max-h-[80vh] overflow-auto bg-black/40 rounded-b-2xl">
                {carregando && (
                <p className="cv-aviso" role="status">
                    <span className="cv-spinner" aria-hidden="true" />
                    {t("curriculo.carregando")}
                </p>
                )}
                {erro ? (
                // Navegador antigo ou falha de rede: os botões acima continuam valendo
                <p className="cv-aviso">{t("curriculo.erro")}</p>
                ) : (
                <Document
                    key={fileUrl}
                    file={fileUrl}
                    onLoadSuccess={({ numPages }: { numPages: number }) => setPaginas(numPages)}
                    onLoadError={(error : Error) => {
                    console.error("Currículo: falha ao abrir o PDF", error);
                    setErro(true);
                    }}
                    loading={null}
                    error={null}
                    externalLinkTarget="_blank"
                    externalLinkRel="noopener noreferrer"
                >
                    {larguraDaPagina &&
                    Array.from({ length: paginas }, (_, i) => (
                        <div key={i} className="shrink-0 bg-white shadow-2xl shadow-black/60 rounded-sm leading-none">
                        <Page pageNumber={i + 1} width={larguraDaPagina} loading={null} />
                        </div>
                    ))}
                </Document>
                )}
            </div>
        </div>

    );
}

export default Resume;