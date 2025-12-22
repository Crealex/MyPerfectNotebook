import type { tagsType } from "@/utils/notesType";

type Props = {
    tags: tagsType[];
    setTags: (newsTags: tagsType[]) => void;
};

export function DisplayTags({ tags, setTags }: Props) {
    function rmTags(tagToRm: tagsType) {
        setTags(tags.filter((tag: tagsType) => tag.name !== tagToRm.name));
    }
    if (!tags) return;
    return (
        <div className="flex gap-3">
            Tags choisis:{" "}
            {tags.map((tag) => {
                return (
                    <div
                        key={tag.name}
                        style={{ background: tag.color }}
                        className="px-1 rounded-2xl text-white"
                    >
                        {tag.name}
                        <button
                            className="ml-1 h-fit text-red-500 cursor-pointer"
                            onClick={() => rmTags(tag)}
                        >
                            <p>x</p>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
