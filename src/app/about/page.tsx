export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Keg Curator</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Keg Curator is a smart beer menu generator designed to help bar and restaurant owners 
            create the perfect selection of draft beers for their establishment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
          <p className="mb-4">
            Simply fill out the form in the sidebar with details about your business:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Your business name and number of draft handles</li>
            <li>Whether you want Minnesota-only or craft-only beers</li>
            <li>Your restaurant's fanciness level (1-100)</li>
            <li>Your cuisine type</li>
          </ul>
          
          <p className="mb-6">
            Our algorithm then scores hundreds of beers based on your preferences and creates 
            a curated menu that perfectly matches your establishment's style and clientele.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Smart beer scoring algorithm</li>
            <li>Minnesota brewery focus</li>
            <li>Craft beer emphasis</li>
            <li>Cuisine-based pairing</li>
            <li>Export to PDF or copy to clipboard</li>
            <li>Responsive design for all devices</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
          <p className="mb-4">
            Built with modern web technologies:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Next.js 15 with App Router</li>
            <li>React 18 and TypeScript</li>
            <li>Tailwind CSS and shadcn/ui</li>
            <li>MongoDB for beer database</li>
            <li>Zustand for state management</li>
            <li>React Hook Form with Zod validation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}