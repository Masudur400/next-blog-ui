import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";
import { Metadata } from "next";


export const metadata : Metadata ={
  title: 'All Blogs',
  description:'All Blog Page Description'

}

const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,
    {
     cache:'no-store'
    }
  )
   const { data: blogs } = await res.json()

  console.log(res);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      
              {
                blogs?.map((post : IPost)  => <BlogCard post={post} key={post?.id}></BlogCard>)
              }
      
            </div>
    </div>
  );
};

export default AllBlogsPage;
