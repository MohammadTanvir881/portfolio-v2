"use client";

import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data); // This will log the form data to console
    // Here you would typically send the data to your backend
    reset(); // Reset the form after submission
  };

  return (
    <section
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    id="contact" className="container mx-auto px-6 py-20 space-y-3">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Get In Touch
        </h2>

        <Card className="rounded-2xl text-gray-200 p-8 border-slate-800 bg-slate-900/70 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-slate-400 mb-6">
                Feel free to reach out to me for collaboration opportunities or
                just to say hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>tanvirrashid881@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-slate-400">Irbid, Jordan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-slate-400">+962 7X XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    className="bg-slate-800 border-slate-700 py-5 focus:ring-blue-500"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-slate-800 border-slate-700 py-5 focus:ring-blue-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="subject" className="mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    className="bg-slate-800 border-slate-700 py-5 focus:ring-blue-500"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-slate-800 border-slate-700 py-10 focus:ring-blue-500"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
