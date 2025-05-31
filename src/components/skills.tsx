import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skills = [
    { name: "Git-based collaboration", level: "Intermediate", percentage: 75 },
    { name: "Cloud Computing", level: "Basic", percentage: 50 },
    { name: "Mobile Developer", level: "Basic", percentage: 50 },
    { name: "Web Developer", level: "Intermediate", percentage: 75 },
    { name: "Linux", level: "Intermediate", percentage: 75 },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            My technical expertise and proficiency levels
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-emerald-600">{skill.level}</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "HTML/CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Git",
              "Linux",
              "Cloud",
              "Android",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
