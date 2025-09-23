import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,
    {
      next: {
        tags:['BLOGS']
      }
    }
  )
  const { data: blogs } = await res.json()
  console.log(blogs);

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">

        {
          blogs?.slice(0,3)?.map((post : IPost)  => <BlogCard post={post} key={post?.id}></BlogCard>)
        }

      </div>
    </div>
  );
}
