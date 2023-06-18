import React, {useState, useContext} from "react";
import axios from "axios";
import { BACKEND_URI } from "../config";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { UserContext } from "../contexts/UserContext";
import { PostContext } from "../contexts/PostContext";

function Issue(props) {
  const [isLiked, setLiked] = useState(false);
  const { user } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  
  const handleLike = () => {
    axios
      .post(
        `${BACKEND_URI}/api/v1/posts/${props.id}/like`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        setLiked(() => !isLiked);
        setPosts(() =>
          posts.map((post) =>
            post.id === response.data.data.post.id
              ? response.data.data.post
              : post
          )
        );
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{props.caption}</h2>
      <p className="text-gray-500 mb-2">Posted by: {props.author}</p>
      <p className="text-gray-500 mb-2">Upvotes: {props.upvotes}</p>
      <button
        className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        onClick={handleLike}
      >
        {isLiked?(
            <ChevronUpIcon className="w-4 h-4 mx-auto" />
        ):(
            <CheckIcon className="w-4 h-4 mx-auto" />
        )}
        UpVote
      </button>
    </div>
  );
}

export default Issue;
