import { Button } from "@/components/ui/button";
import {
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FieldContent, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { tagsType } from "@/utils/notesType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { DisplayTags } from "./DisplayTags";

type Props = {
    tags: tagsType[];
    setTags: Dispatch<SetStateAction<tagsType[]>>;
};

export function TagsInput({ tags, setTags }: Props) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#bcd979");

    function addTags() {
        if (name.trim() === "") return;
        if (tags) {
            if (tags.some((tag) => tag.name === name)) return;
            setTags([{ name, color }, ...tags]);
        } else setTags([{ name, color }]);
        setName("");
    }
    return (
        <div className="border m-4 rounded-2xl h-fit p-2">
            <FieldContent>
                <FieldTitle className="text-center text-xl">Tags:</FieldTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Couleurs</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuRadioGroup
                            value={color}
                            onValueChange={setColor}
                            defaultValue="#bcd979"
                        >
                            <DropdownMenuLabel>
                                Choisis parmi ces couleurs
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioItem
                                value="#bcd979"
                                className="bg-[#bcd979] my-1"
                            >
                                Green
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#2e86ab"
                                className="bg-[#2e86ab] my-1"
                            >
                                Blue
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#9DAD6F"
                                className="bg-[#9DAD6F] my-1"
                            >
                                Olive
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#8A7E72"
                                className="bg-[#8A7E72] my-1"
                            >
                                Brown
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#F18F01"
                                className="bg-[#F18F01] my-1"
                            >
                                Orange
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#C73E1D"
                                className="bg-[#C73E1D] my-1"
                            >
                                Orange-fire
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#4EA699"
                                className="bg-[#4EA699] my-1"
                            >
                                Gray-blue
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#837569"
                                className="bg-[#837569] my-1"
                            >
                                Taupe
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#087F8C"
                                className="bg-[#087F8C] my-1"
                            >
                                Teal
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#567568"
                                className="bg-[#567568] my-1"
                            >
                                Deep-teal
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#429EA6"
                                className="bg-[#429EA6] my-1"
                            >
                                Pacific
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="#347FC4"
                                className="bg-[#347FC4] my-1"
                            >
                                Pacific-blue
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Input
                    placeholder="Tag..."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            addTags();
                            e.stopPropagation();
                            e.preventDefault();
                        }
                    }}
                />
                <Button type="button" onClick={() => addTags()}>
                    Valider
                </Button>
                <DisplayTags tags={tags} setTags={setTags} />
            </FieldContent>
        </div>
    );
}
