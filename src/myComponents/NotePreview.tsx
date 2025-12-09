import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, Edit, Trash } from "lucide-react";
import { useState } from "react";

type Props = {
    title: string;
    content: string;
};

export function NotePreview({ title, content }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card className="my-10">
            <CardTitle className="text-xl text-center ">{title}</CardTitle>
            <CardContent
                className={cn(
                    !isExpanded && "line-clamp-5",
                    "transition-transition",
                    "duration-500",
                )}
            >
                {content}
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
                    <Button>
                        <Edit />
                    </Button>
                </CardAction>
                <CardAction>
                    <Button variant={"destructive"}>
                        <Trash />
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}
