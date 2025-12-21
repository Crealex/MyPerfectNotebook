import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { tagsType } from "@/utils/notesType";
import { FilterIcon } from "lucide-react";

type Props = {
    tagsFilter: tagsType[];
    tags: tagsType[];
    setTagsFilter: (newFilter: tagsType[]) => void;
};

function AvailableFilter({ tags, setTagsFilter, tagsFilter }: Props) {
    return tags.map((tag) => {
        return (
            <DropdownMenuItem
                key={tag.name}
                style={{ background: tag.color }}
                onClick={() => setTagsFilter([tag, ...tagsFilter])}
                className="mt-1"
            >
                {tag.name}
            </DropdownMenuItem>
        );
    });
}

export function TagsFilter({ tags, tagsFilter, setTagsFilter }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                    <FilterIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <AvailableFilter
                    tags={tags}
                    tagsFilter={tagsFilter}
                    setTagsFilter={setTagsFilter}
                />
                <div>
                    <h2>Filter par:</h2>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
