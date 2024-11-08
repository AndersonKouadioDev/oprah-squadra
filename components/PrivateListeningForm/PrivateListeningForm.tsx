"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { RainbowButton } from "../ui/rainbow-button";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ScrollArea } from "../ui/scroll-area";
import { PrivateListening } from "@/src/actions/emails/private_listening.action";

const formSchema = z.object({
  lastname: z.string().min(2).max(50),
  firstname: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
});

export default function PrivateListeningForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await PrivateListening({
        ...values
      });

      if (result.success) {
        // setStatus("success");
        // toast.success("Votre message a été envoyé avec succès !");
        // formRef.current?.reset();
        form.reset()
      } else {
        throw new Error(result.error || "Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      // setStatus("error");
      // toast.error(
      //   error instanceof Error
      //     ? error.message
      //     : "Une erreur s'est produite. Veuillez réessayer."
      // );
    }
    console.log(values);
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <RainbowButton className="text-white font-bold block mx-auto group/modal-btn overflow-hidden">
          <div className="group-hover/modal-btn:translate-x-[120%] text-center transition duration-500">
            S&apos;inscrire à l&apos;écoute privée
          </div>
          <div className="-translate-x-[100%] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🥳 RDV le 26 Novembre 2024
          </div>
        </RainbowButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col justify-center items-center">
          <DrawerTitle>
            <h1 className="text-3xl font-bold text-gray-100 mb-6">
              Inscription à l&apos;écoute privée de l&apos;EP{" "}
              <span className="text-yellow-400">INCENDIE</span>
            </h1>
          </DrawerTitle>
          <DrawerDescription className="text-center text-gray-400">
            Vous recevrez un message de confirmation par mail et whatsapp.
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ScrollArea className="w-full h-fit max-h-72 md:h-[500px]">
              <div className="max-w-xl mx-auto px-4">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom (Votre nom de famille)</FormLabel>
                      <FormControl>
                        <Input placeholder="Du Pont" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom (Votre prénom)</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Votre email)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john.dupont@example.com"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone (De préférence whatsapp)</FormLabel>
                      <FormControl>
                        <Input placeholder="06 00 00 00 00" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </ScrollArea>
            <DrawerFooter className="mx-auto max-w-xl">
              <div className="flex justify-between items-center gap-4">
                <DrawerClose>
                  <Button color="secondary" variant="outline">
                    Annuler
                  </Button>
                </DrawerClose>
                <Button type="submit" className="w-full">
                  S&apos;inscrire
                </Button>
              </div>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
