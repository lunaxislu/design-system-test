import { useState } from "react";
import { TagButton } from "./TagButton";

interface Props<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}
export function TagList<T extends string>({ tagList, onTagClick }: Props<T>) {
  const [selectedTag, setSelectedTag] = useState(tagList[0]);

  return (
    <div
      className="flex gap-4"
      onClick={(e) => {
        const target = e.target as HTMLButtonElement;
        const tag = target.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          onClick={() => setSelectedTag(tag)}
          isChecked={tag === selectedTag}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
