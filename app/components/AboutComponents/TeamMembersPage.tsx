import TeamGallery from "./TeamGallery"

export default function TeamMembersPage() {
  return (
    <main className=" bg-[#f0f4e8] py-12">
      <div className="container mx-auto  md:px-4">
        <h1 className="text-center text-5xl font-bold text-[#2d5d3d] mb-16">Our Legacy and Leadership</h1>
        <TeamGallery />
      </div>
    </main>
  )
}

