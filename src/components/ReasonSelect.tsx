import { Briefcase, Users, MessageSquare } from "lucide-react"
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

const reasons = [
  { value: "hiring", label: "Hiring", icon: Briefcase },
  { value: "collaboration", label: "Collaboration", icon: Users },
  { value: "other", label: "Other", icon: MessageSquare },
]

function ReasonSelect({ value, onChange }: ReasonSelectProps) {
  return (
    <div className="mb-5">
      <label className="block text-[10px] text-text font-medium mb-1">REASON</label>
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