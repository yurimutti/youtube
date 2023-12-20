import { useState } from "react";

export interface ProfileProps {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  const [comment, setComment] = useState<string>(
    name === "John Doe" ? "Good Guy" : "Bad Guy"
  );

  return (
    <div className="tutorial-profile">
      <h2>
        Selected User: <span>{name}</span>
      </h2>

      <h2>
        Comments: <span>{comment}</span>
      </h2>

      <textarea
        placeholder="Add comment"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
    </div>
  );
};
