import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Cloud, Globe, Brain } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bangkit Capstone Project",
      description:
        "Led a comprehensive capstone project as part of the Cloud Computing cohort at Bangkit Academy. Developed a scalable cloud-based application with machine learning integration, focusing on real-world problem solving and team collaboration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Google Cloud Platform", "Node.js", "React", "TensorFlow", "Docker", "Kubernetes"],
      category: "Cloud Computing",
      icon: <Cloud className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description:
        "Full-stack e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
      category: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Network Monitoring Dashboard",
      description:
        "Real-time network monitoring dashboard developed during internship at Telkom Medan. Provides insights into network performance, connectivity status, and automated alerting for network issues.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "Chart.js", "WebSocket"],
      category: "Network Engineering",
      icon: <Globe className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false,
    },
    {
      id: 4,
      title: "Task Management Mobile App",
      description:
        "Android application for task and project management with offline capabilities. Features include task scheduling, team collaboration, file sharing, and progress tracking with intuitive material design interface.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Android", "Kotlin", "Room Database", "Retrofit", "Material Design", "Firebase"],
      category: "Mobile Development",
      icon: <Smartphone className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: "Machine Learning Price Predictor",
      description:
        "Machine learning model for predicting product prices based on market trends and historical data. Includes data preprocessing, model training, and a web interface for real-time predictions.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "React", "Chart.js"],
      category: "Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: 6,
      title: "Cloud Infrastructure Automation",
      description:
        "Infrastructure as Code (IaC) project for automating cloud resource deployment and management. Includes CI/CD pipelines, monitoring, and cost optimization strategies for cloud environments.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Terraform", "AWS", "Docker", "Jenkins", "Prometheus", "Grafana"],
      category: "DevOps",
      icon: <Cloud className="h-5 w-5" />,
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">A showcase of my technical projects and contributions</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <span className="mr-1">{project.icon}</span>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                      <span className="mr-1">{project.icon}</span>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-xs" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in seeing more of my work?</p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
