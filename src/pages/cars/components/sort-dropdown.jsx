import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortDropdown({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Relevance">Relevance</SelectItem>
        <SelectItem value="Price Low to High">Price Low to High</SelectItem>
        <SelectItem value="Price High to Low">Price High to Low</SelectItem>
        <SelectItem value="Newest First">Newest First</SelectItem>
        <SelectItem value="Oldest First">Oldest First</SelectItem>
        <SelectItem value="KM Low to High">KM Low to High</SelectItem>
      </SelectContent>
    </Select>
  );
}
