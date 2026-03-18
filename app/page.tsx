import BlogSection from "@/features/home/ui/BlogSection"
import HeroSection from "@/features/home/ui/HeroSection"
import ProjectsSection from "@/features/home/ui/ProjectsSection"
import PrototypesSection from "@/features/home/ui/PrototypesSection"

export default function Page() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <ProjectsSection />
      <PrototypesSection />
      <BlogSection />
    </div>
  )
}
