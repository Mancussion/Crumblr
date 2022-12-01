import React from "react";
import { useSelector } from "react-redux";
import '../Posts.css'

import PostCards from '../PostCards'

function FollowedPosts() {
  const sessionState = useSelector((state) => state.session)

  const sessionUser = sessionState.user
  let allPostsArr = []
    Object.values(sessionUser.Following)
      .map(user => user.Posts
        .map(post => allPostsArr.push(post)))
  allPostsArr.sort((a, b) => b.id - a.id)


  if (!allPostsArr.length) return (
    <div>
      <h2>No Followed Users!</h2>
    </div>
  )
  else return (
    <div className="post-feed">
      {allPostsArr.map((post)=> (
        <PostCards key={post.id} post={post} />
      ))}
    </div>
  )
}

export default FollowedPosts;
