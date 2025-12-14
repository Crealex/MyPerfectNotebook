import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { notesType, tagsType } from "@/utils/notesType";
import type { User } from "@supabase/supabase-js";
import { ChevronDown, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    note: notesType;
    deleteNote: (note: notesType) => void;
    editNote: (oldNote: notesType, newNote: notesType) => void;
    user: User | null;
};

function Tags({ note }: { note: notesType }) {
    if (!note.tags) return null;
    return (
        <CardContent className="flex gap-1 text-sm justify-center">
            {note.tags.map((tag: tagsType) => {
                return (
                    <div
                        key={tag.name}
                        style={{ backgroundColor: tag.color }}
                        className={"rounded-2xl py-0.5 px-1"}
                    >
                        {tag.name}
                    </div>
                );
            })}
        </CardContent>
    );
}

export function NotePreview({ note, deleteNote }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="my-10">
            <CardTitle className="text-xl text-center ">{note.title}</CardTitle>
            <Tags note={note} />
            <CardDescription className="italic text-center">
                {"dernière modification: " + note.date_display}
            </CardDescription>
            <CardContent
                className={cn(
                    !isExpanded && "line-clamp-5",
                    "whitespace-pre-wrap",
                )}
            >
                {note.content}
            </CardContent>
            <CardFooter className="gap-3">
                <CardAction>
                    <Button onClick={() => setIsExpanded(!isExpanded)}>
                        <ChevronDown
                            className={cn(
                                isExpanded && "rotate-180",
                                "transition-transform",
                                "duration-300",
                            )}
                        />
                    </Button>
                </CardAction>
                <CardAction>
                    <Link to={`/edit/${note.id}`}>
                        <Button>
                            <Edit />
                        </Button>
                    </Link>
                </CardAction>
                <CardAction>
                    <Button
                        variant={"destructive"}
                        onClick={() => deleteNote(note)}
                    >
                        <Trash />
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}
