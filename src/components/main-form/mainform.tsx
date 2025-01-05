"use client"
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
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

/* Custom files */
/*********************/
import Results from './results'

/*********************/

const formSchema = z.object({
  restaurant: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  beernumber: z.number()
  .max(300, { 
    message: "Beer number must be lower than 300.",
   })
})

// Need logic to prioritize breweries.
// First just send down beer name from beerlist in arbitrary order.

// Not sure if beerList needs to be passed down or just imported into this component?
export function MainForm() {
  const [ numberOfHandles, setHandles ] = useState(6);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurant: "My Restaurant",
      beernumber: 6,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.beernumber) {
      setHandles(values.beernumber);
    } else {
      setHandles(0);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="restaurant"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Restaurant</FormLabel>
                <FormControl>
                  <Input placeholder="placeholder text" {...field} />
                </FormControl>
                <FormDescription>
                  The name of your business.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beernumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Draft Beers</FormLabel>
                <FormControl>
                  <Input type="number" {...field} 
                    onChange={(e) => {
                      // Convert the input value to a number
                      field.onChange(Number(e.target.value));
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Enter the number of draft beers to choose.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Results numberOfHandles={numberOfHandles} />
    </div>
  )
}
