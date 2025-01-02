"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

const formSchema = z.object({
  restaurant: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  beernumber: z.number()
  .max(100, { 
    message: "Beer number must be lower than 100.",
   })
})

export function TestForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurant: "My Restaurant",
      beernumber: 0,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const parsedValues = {
      ...values,
      beernumber: Number(values.beernumber),
    };
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(parsedValues);
  }

  return (
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
  )
}
