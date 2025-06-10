"use client"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"

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
import Results from './results'
import { FormResultsClass } from '@/lib/beers'
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
  cuisine: z.string(),
})

const defaultResults = new FormResultsClass("My Restaurant", 6, false, false, 30);

export function MainForm() {
  const [ formResults, setFormResults ] = useState(defaultResults);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "My Restaurant",
      numberOfHandles: 6,
      minnesotaOnly: false,
      craftOnly: false,
      fanciness: 30,
      cuisine: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) {
      setFormResults(values);
    } else {
      setFormResults(defaultResults);
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
                  <Input type="number" {...field} 
                      // Convert the input value to a number
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Enter the number of draft beers to choose.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cuisine"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Cuisine</FormLabel>

                <FormControl>
                  <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a cuisine" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="latin">Latin American</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="chinese">Chinese/Korean</SelectItem>
                  <SelectItem value="seasian">Southeast Asian</SelectItem>
                  <SelectItem value="scandinavian">Scandinavian</SelectItem>
                  <SelectItem value="ethiopian">Ethiopian</SelectItem>
                  <SelectItem value="wafrican">West African</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="greek">Greek/Southwest Asian</SelectItem>
                  <SelectItem value="barbecue">Barbecue</SelectItem>
                  <SelectItem value="elevated">Elevated Pub</SelectItem>
                  <SelectItem value="american">Classic American</SelectItem>
                  <SelectItem value="steakhouse">Steakhouse</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="cafe">Cafe</SelectItem>
              </SelectContent>
                  </Select>
                        </FormControl>
                <FormDescription>
                  The type of food served at the restaurant.
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
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}  
                  />
                </FormControl>
                <FormLabel>Local only</FormLabel>
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
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}  
                  />
                </FormControl>
                <FormLabel>Craft only</FormLabel>
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
      <Results formResults={formResults} />
    </div>
  )
}
