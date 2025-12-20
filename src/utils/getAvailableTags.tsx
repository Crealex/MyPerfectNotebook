import type { tagsType } from "./notesType";

export function getAvailableTags(): tagsType[] {
    return [
        { name: "filte1", color: "red" },
        { name: "filtre2", color: "blue" },
        { name: "filtre3", color: "green" },
    ];
}
