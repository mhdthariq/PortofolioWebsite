import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">My professional journey and projects</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Project Lead for Capstone Project
                  </CardTitle>
                  <p className="text-emerald-600 font-medium">
                    Bangkit Academy
                  </p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  08/2024 - 12/2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Cloud Computing Cohort - Led a team in developing and
                implementing a comprehensive capstone project, coordinating
                between different specializations and ensuring timely delivery
                of project milestones.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <CardTitle className="text-xl">Network Monitoring</CardTitle>
                  <p className="text-emerald-600 font-medium">
                    Telkom Medan STO Sukaramai
                  </p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  06/2021 - 08/2021
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Assisted in monitoring network performance and troubleshooting
                connectivity issues. Gained hands-on experience with
                telecommunications infrastructure and network management tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
