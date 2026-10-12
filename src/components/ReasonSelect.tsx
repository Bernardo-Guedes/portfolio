import { Briefcase, Users, MessageSquare } from "lucide-react"
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/SelectDemo"

interface ReasonSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function ReasonSelect({ value, onChange }: ReasonSelectProps) {
  const { t } = useTranslation();

  const reasons = [
    { value: "hiring", label: t("contatos.select1"), icon: Briefcase },
    { value: "collaboration", label: t("contatos.select2"), icon: Users },
    { value: "other", label: t("contatos.select3"), icon: MessageSquare },
  ]


  return (
    <div className="mb-5">
      <label className="block text-[10px] text-text font-medium mb-1">{t("contatos.label_motivo")}</label>
      <Select defaultValue="hiring" value={value} onValueChange={(v) => v && onChange(v)}>
        <SelectTrigger>
          <SelectValue>
            {(value) => {
              const r = reasons.find((r) => r.value === value)
              return r ? (
                <>
                  <r.icon className="text-turquesa" />
                  {r.label}
                </>
              ) : null
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {reasons.map((r) => (
            <SelectItem key={r.value} value={r.value}>
              <r.icon className="text-turquesa" />
              {r.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default ReasonSelect