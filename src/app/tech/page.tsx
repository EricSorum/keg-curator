import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tech() {

  
  return (
    <div className="flex flex-col items-center gap-6 max-w-[80%] mx-auto">
      <div className="p-3 bg-card text-center border-amber-950 border-b-[4px] border-r-[4px] rounded-[20%] ">
        <h2 className="text-3xl xs:text-xl font-bold tracking-tight m-3">Tech Stack</h2>
        <p className="text-center">Tools & Practices </p>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Tools</CardTitle>
          <CardDescription>List of technologies used in making Keg Curator</CardDescription>
        </CardHeader>
        <CardContent>
          <article>
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
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Practices</CardTitle>
          <CardDescription>Development Standards & Processes</CardDescription>
        </CardHeader>
        <CardContent>
          <article>
            <ul>
              <li>React 18.3 Server Components, with Server-Side Rendering by default</li>
              <li>Next.js 15 App Router for file-based routing</li>
              <li>REST API architecture with NextResponse error handling</li>
              <li>Environment variables, secret management, and development feature flags for security</li>
              <li>Fully type-safe architecture, written entirely in strict TypeScript configuration with custom types and interfaces.</li>
              <li>Feature-based structure with clear separation of concerns between components, pages, and logic. </li>
              <li>Custom scoring algorithm that weighs options across 5 variables</li>
              <li>Automated image conversion to WebP format and 100px width</li>
              <li>Automated text conversion from raw .txt files to JSON data</li>            
            </ul> 
          </article>
        </CardContent>
      </Card>
    </div>
  )
}