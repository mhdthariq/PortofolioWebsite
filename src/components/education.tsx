import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-200 ml-6 hidden md:block"></div>

            <div className="relative flex gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <Card className="flex-1 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">
                        Software Engineer
                      </CardTitle>
                      <p className="text-emerald-600 font-medium">
                        Politeknik Negeri Medan
                      </p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      08/2022 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Currently pursuing a degree in Software Engineering,
                    focusing on full-stack development, cloud computing, and
                    software architecture. Actively participating in various
                    projects and collaborative learning environments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex gap-6 mt-8">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <Card className="flex-1 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">
                        Computer and Network Engineering
                      </CardTitle>
                      <p className="text-emerald-600 font-medium">
                        SMK Telkom Medan - Highschool
                      </p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      08/2019 - 05/2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Completed vocational education in Computer and Network
                    Engineering, gaining foundational knowledge in networking,
                    system administration, and computer hardware. Developed
                    technical skills through practical projects and hands-on
                    training.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
