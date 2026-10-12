import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const IDIOMAS = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const atual = i18n.language.startsWith("en") ? "en" : "pt";

  const trocar = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  return (
    <div className="flex items-center gap-3">
      <Globe size={18} className="text-turquesa" aria-hidden="true" />

      <div className="flex items-center gap-2">
        {IDIOMAS.map(({ code, label }, i) => (
          <div key={code} className="flex items-center gap-2">
            {i > 0 && <span className="h-4 w-px bg-turquesa/40" aria-hidden="true" />}
            <button
              onClick={() => trocar(code)}
              aria-pressed={atual === code}
              lang={code}
              className={`cursor-pointer text-xs font-bold transition-colors ${
                atual === code
                  ? "text-turquesa"
                  : "text-text/60 hover:text-turquesa"
              }`}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}