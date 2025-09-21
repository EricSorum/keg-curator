"use client"
import { useForm } from "react-hook-form"
import { useStore } from "@/state-storage/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/* Custom files */
/*********************/
import { defaultResults } from '@/lib/beers'
/*********************/

const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  numberOfHandles: z.number()
  .max(300, { 
    message: "Beer number must be lower than 300.",
   }),
  minnesotaOnly: z.boolean(),
  craftOnly: z.boolean(),
  fanciness: z.number(),
  chosenCuisine: z.string(),
})




export function MainForm() {
  // const [ formResults, setFormResults ] = useState(defaultResults);
  // const { results, setResults } = useStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "My Restaurant",
      numberOfHandles: 6,
      minnesotaOnly: false,
      craftOnly: false,
      fanciness: 30,
      chosenCuisine: "",
    },
  });

  const setResults = useStore((state) => state.setResults);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // e.preventDefault(); // probably handled by z?
    if (values) {
      // setResults(values);
      setResults(values);
    } else {
      setResults(defaultResults);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Business</FormLabel>
                <FormControl>
                  <Input placeholder="placeholder text" {...field} />
                </FormControl>
                <FormDescription>
                  The name of your bar or restaurant.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numberOfHandles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Draft Beers</FormLabel>
                <FormControl>
                  <Input type="number" {...field} required
                      // Convert the input value to a number
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Enter the number of draft beers to choose. (required)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chosenCuisine"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value || ""}
                    onValueChange={val => field.onChange(val)}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a cuisine" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Put cuisines into array, map over them with reusable components. */}
                        <SelectItem value="Latin American">Latin American</SelectItem>
                        <SelectItem value="Japanese">Japanese</SelectItem>
                        <SelectItem value="Chinese/Korean">Chinese/Korean</SelectItem>
                        <SelectItem value="Southeast Asian">Southeast Asian</SelectItem>
                        <SelectItem value="Scandinavian">Scandinavian</SelectItem>
                        <SelectItem value="Ethiopian">Ethiopian</SelectItem>
                        <SelectItem value="West African">West African</SelectItem>
                        <SelectItem value="Italian">Italian</SelectItem>
                        <SelectItem value="greek">Greek</SelectItem>
                        <SelectItem value="Southwest Asian">Southwest Asian</SelectItem>
                        <SelectItem value="Barbecue">Barbecue</SelectItem>
                        <SelectItem value="Elevated Pub">Elevated Pub</SelectItem>
                        <SelectItem value="Classic American">Classic American</SelectItem>
                        <SelectItem value="Steakhouse">Steakhouse</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="Cafe/Diner">Cafe/Diner</SelectItem>
                        <SelectItem value="British/Irish">British/Irish</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  The type of cuisine served at the restaurant.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fanciness"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fanciness</FormLabel>

                <FormControl>
                <Slider defaultValue={[30]} max={100} step={1} className={cn("w-[10%]")}
                  value={[field.value]}
                  onValueChange={(e) => field.onChange(e[0])}
                />
                </FormControl>
                <FormDescription>
                  How fancy is the restaurant?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="minnesotaOnly"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}  
                  />
                </FormControl>
                <FormLabel className="pl-3">Local only</FormLabel>
                <FormDescription>
                  Choose only Minnesota-made beer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="craftOnly"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="pl-3">Craft only</FormLabel>
                <FormDescription>
                  Choose only craft beer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {/* <Results formResults={formResults} /> */}
    </div>
  )
}
