import { Briefcase, Users, MessageSquare } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/SelectDemo"

const reasons = [
  { value: "hiring", label: "Hiring", icon: Briefcase },
  { value: "collaboration", label: "Collaboration", icon: Users },
  { value: "other", label: "Other", icon: MessageSquare },
]

function ReasonSelect() {
  return (
    <div>
      <label className="block text-[10px] text-text font-medium mb-1">REASON</label>
      <Select defaultValue="hiring">
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