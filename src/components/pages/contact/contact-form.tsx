"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import nodefetch from "node-fetch";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formSchema = z.object({
    fullName: z.string().min(1, { message: "Your name is required." }).max(50),
    email: z.string().email(),
    message: z.string().min(10, { message: "You are required to write a message." }).max(3000),
  });
  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  // define a submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await nodefetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email,
        message: values.message,
      }),
    });

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto w-full space-y-8 rounded-xl bg-white p-8 shadow-md md:w-2/3">
        Thank you for your message! I will get back to you as soon as possible!
      </div>
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-8 rounded-xl bg-white p-8 shadow-md md:w-2/3">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message here" rows={8} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
