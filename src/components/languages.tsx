import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Languages() {
  const languages = [
    { name: "Indonesia", level: "Native", percentage: 100 },
    { name: "English", level: "Intermediate", percentage: 75 },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Languages</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600">My language proficiency</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-emerald-600">{language.level}</span>
                    </div>
                    <Progress value={language.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
