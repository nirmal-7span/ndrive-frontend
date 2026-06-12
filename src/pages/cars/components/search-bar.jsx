import { Input } from "@/components/ui/input";

export default function SearchBar({ value, onChange }) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by brand, model or variant"
      className="w-full"
    />
  );
}
