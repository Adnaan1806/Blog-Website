

const Footer = () => {
  return (
    <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
            <p>Featured Blogs</p>
            <p>Most viewed</p>
            <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Recent Posts</p>
        </div>
    </div>
  )
}

export default Footer