import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tech() {

  
  return (
    <div className="flex flex-col items-center gap-6 max-w-[80%] mx-auto">
      <div className="p-3 bg-card text-center border-amber-950 border-b-[4px] border-r-[4px] rounded-[20%] ">
        <h2 className="text-3xl xs:text-xl font-bold tracking-tight m-3">About Keg Curator</h2>
        {/* <p className="text-center">About Keg Curator</p> */}
      </div>
      <Card className="w-full">
        {/* <CardHeader>
          <CardTitle className="text-3xl">Tools</CardTitle>
          <CardDescription>List of technologies used in making Keg Curator</CardDescription>
        </CardHeader> */}
        <CardContent>
          <article><br />
            <p>Some restaurans and bars struggle when it comes to choosing the best available beer to serve.  Many restauranteurs specialize in wine or cocktails, but not beer, and don't have the time to carefully curate a beer selection.</p><br />

            <p>Nevertheless, good beer is a key area of profit, and an expectation for many customers.  Even a small beer selection of just the right beer can complement any cuisine and keep customers coming back.</p><br />

            <p>This app takes my 8 years of experience in the beer industry to create suggested menus based on a restaurant's needs.  I provide suggestions from the best craft beeer available in Minnesota, as well as essential macro and import beers.  The app makes selections based on a form input and creates a menu from algorithms.</p><br />

            <p>The tech stack includes TypeScript, React.js, Shadcn UI components, and Tailwind CSS.  Hosted on Vercel.</p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}