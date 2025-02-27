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
   fanciness: z.number() 
})

// Need logic to prioritize breweries.
// First just send down beer name from beerlist in arbitrary order.

// Not sure if beerList needs to be passed down or just imported into this component?

const defaultResults = new FormResultsClass("My Restaurant", 6, false);

export function MainForm() {
  // const [ numberOfHandles, setHandles ] = useState(6);
  const [ formResults, setFormResults ] = useState(defaultResults);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "My Restaurant",
      numberOfHandles: 6,
      minnesotaOnly: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) {
      setFormResults(values);
    } else {
      setFormResults(defaultResults); // or should it not change results?
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
            name="fanciness"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Slider defaultValue={[33]} max={100} step={1} className={cn("w-[10%]")}
                  // value={[field.value]}
                  onValueChange={(e) => field.onChange(e[0])}
                />
                </FormControl>
                <FormLabel>Fanciness</FormLabel>
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

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Results formResults={formResults} />
    </div>
  )
}
