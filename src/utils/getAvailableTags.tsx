import type { notesType, tagsType } from "./notesType";

export function getAvailableTags(notes: notesType[]): tagsType[] {
    const availabeTags: tagsType[] = [];

    notes.forEach((note) => {
        note.tags.forEach((tag: tagsType) => {
            if (!availabeTags.some((test) => test.name === tag.name)) {
                availabeTags.push(tag);
            }
        });
    });

    return availabeTags;
}
