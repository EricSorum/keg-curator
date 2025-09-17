import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tech() {

  
  return (
      <Card className="max-w-[80%] mx-auto">
  <CardHeader>
    <CardTitle className="text-3xl">Tech Stack</CardTitle>
    <CardDescription>List of technologies used in making Keg Curator</CardDescription>
  </CardHeader>
  <CardContent>
    <article>
      <h2>Code:</h2>
    <ul>
      <li><strong>Languages: </strong>TypeScript, HTML, CSS</li>
      <li><strong>Frameworks: </strong>React 18 and Next.js 15 with App Router</li>
      <li><strong>UI/UX: </strong>Tailwind CSS and shadcn/ui</li>
      <li><strong>Database: </strong>MongoDB Atlas</li>
      <li><strong>State Management: </strong>Zustand</li>
      <li><strong>Form Validation: </strong> React Hook Form with Zod</li>
    </ul> 
    </article>           
            </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}