import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Home() {
  const [posts, setPosts] = useState({ hits: [] });
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios("http://localhost:3001/posts/all");
      setPosts({ hits: [...result.data] });
    };
    console.log(posts);
    fetchPosts();
  }, []);
  return (
    <div className={styles.container}>
      {posts.hits.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
