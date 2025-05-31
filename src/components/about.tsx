import { Card, CardContent } from "@/components/ui/card";
import { Code, Cloud, Laptop, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A dedicated and detail-oriented Computer Science student at
            Politeknik Negeri Medan with expertise in full-stack web
            development, beginner-level Android app creation, foundational
            machine learning, and cloud computing. Proficient in Linux (2+
            years) and experienced in Git-based collaboration using GitHub, I
            thrive in team environments and collaborative projects. Passionate
            about leveraging technology to build scalable solutions, I
            continuously expand my knowledge in software engineering and cloud
            computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Web Development</h3>
              <p className="text-gray-600">
                Full-stack web development with modern frameworks and
                technologies
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Android app development with a focus on user experience
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Cloud Computing</h3>
              <p className="text-gray-600">
                Experience with cloud platforms and infrastructure
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Terminal className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Linux & DevOps</h3>
              <p className="text-gray-600">
                Proficient in Linux systems and DevOps practices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
