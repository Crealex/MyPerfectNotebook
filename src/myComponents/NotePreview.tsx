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
import type { notesType } from "@/utils/notesType";
import { ChevronDown, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    note: notesType;
    deleteNote: (note: notesType) => void;
    editNote: (oldNote: notesType, newNote: notesType) => void;
};

export function NotePreview({ note, deleteNote }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="my-10">
            <CardTitle className="text-xl text-center ">{note.title}</CardTitle>
            <CardDescription className="italic text-center">
                {"dernière modification: " + note.date}
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
