export type tagsType = {
    name: string;
    color: string;
};

export type notesType = {
    id: number;
    date_display: string;
    last_edit: string;
    title: string;
    content: string;
    user_id: string;
    tags: tagsType[];
};
