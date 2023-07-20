"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bussinessname: z.string(),
  telp: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  req: z.string(),
});

// type FormData = z.infer<typeof FormData>;

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bussinessname: "",
      telp: "",
      req: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Sesuai KTP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bussinessname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Bisnis Anda</FormLabel>
              <FormControl>
                <Input placeholder="Biarkan kosong jika personal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Telepon</FormLabel>
              <FormControl>
                <Input placeholder="contoh 08xxxxxxxxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="req"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Request</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ceritakan kebutuhan anda secara singkat. Tim kami akan segera mempelajari kemudian kembali kepada anda dengan solusi :)  "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Minta Penawaran</Button>
      </form>
    </Form>
  );
}
