import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Smartphone,
  Cloud,
  Globe,
  Brain,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EmotiCalm (Bangkit Capstone Project)",
      description:
        "Led a comprehensive capstone project as part of the Cloud Computing cohort at Bangkit Academy. Developed a scalable cloud-based application with machine learning integration, focusing on real-world problem solving and team collaboration.",
      image: "/pictures/emoticalm.png",
      technologies: [
        "Google Cloud Platform",
        "Python",
        "Flask",
        "TensorFlow",
        "Docker",
      ],
      category: "Cloud Computing",
      icon: <Cloud className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/capstone-project",
      liveUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: "School Map GIS Web Application",
      description:
        "Web-based Geographic Information System (GIS) application for visualizing and managing school locations and facilities. Features include interactive maps, spatial analysis, and data visualization.",
      image: "/pictures/EduMap.jpeg",
      technologies: ["React", "Next.js", "Supabase", "Leaflet"],
      category: "Web Development & GIS",
      icon: <Globe className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/SchoolMap",
      liveUrl: "https://school-map-two.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Sentiment Analysis Restaurant Review",
      description:
        "Sentiment analysis tool for restaurant reviews using natural language processing techniques. Provides insights into customer opinions and feedback.",
      image: "/pictures/FoodSentiment.jpeg",
      technologies: ["TensorFlow", "Python", "TensorFlow.js"],
      category: "Machine Learning & Web Development",
      icon: <Globe className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/SentimentAnalysisRestaurant",
      liveUrl: "https://mhdthariq.github.io/SentimentAnalysisRestaurant/",
      featured: false,
    },
    {
      id: 4,
      title: "Simple Chat",
      description:
        "Android application for real-time chat and messaging with offline capabilities. Features include user authentication, chat rooms and push notifications with intuitive material design interface.",
      image: "/pictures/SimpleChat.jpg",
      technologies: [
        "Android",
        "Flutter",
        "Room Database",
        "Retrofit",
        "Material Design",
        "Firebase",
      ],
      category: "Mobile Development",
      icon: <Smartphone className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/SimpleChat",
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: "Movie Recommendation System",
      description:
        "Machine learning model for predicting movie ratings based on user preferences and historical data. Includes data preprocessing, model training.",
      image: "/pictures/MovieRecommendationSystem.png",
      technologies: ["PyTorch", "Python", "Scikit-learn", "Pandas"],
      category: "Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/MovieRecommendationSystem",
      liveUrl: null,
      featured: false,
    },
    {
      id: 6,
      title: "Flower Edge Detection Desktop Application",
      description:
        "Desktop application for flower edge detection using various techniques. Provides a user-friendly interface for uploading images and visualizing edge detection results.",
      image: "/pictures/FlowerEdgeDetection.jpg",
      technologies: ["PyQt", "OpenCV", "Python", "Tkinter"],
      category: "Computer Vision",
      icon: <Monitor className="h-5 w-5" />,
      githubUrl: "https://github.com/mhdthariq/FlowerEdgeDetectionApp",
      liveUrl: null,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            A showcase of my technical projects and contributions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                        asChild
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-40">
                  {project.id === 4 ? (
                    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-1">
                      <div className="relative mx-auto border-gray-900 dark:border-gray-800 bg-gray-900 border-[8px] rounded-[1.5rem] h-[145px] w-[70px] shadow-xl">
                        <div className="rounded-[1rem] overflow-hidden w-full h-full">
                          <Image
                            src="/pictures/SimpleChat.jpg"
                            className="object-cover"
                            alt="Simple Chat App Screenshot"
                            fill
                            sizes="70px"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-xs"
                        asChild
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          <p className="text-gray-600 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link
              href="https://github.com/mhdthariq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
