import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

type Props = {
    search: string;
    setSearch: (value: string) => void;
};

export function SearchBar({ search, setSearch }: Props) {
    return (
        <div className="w-full flex gap-2">
            <Label htmlFor="bar">
                <Search />
            </Label>
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Rechercher une note"}
                className="w-full"
                id="bar"
            ></Input>
        </div>
    );
}
