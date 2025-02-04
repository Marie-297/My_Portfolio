"use client"

import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Input } from "@/Components/ui/input"
import emailjs from "emailjs-com";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import { Textarea } from "@/Components/ui/textarea"
import { Button } from '@/Components/ui/button'

const info = [
  { icon: <FaPhoneAlt size={20} />, title: "Phone Number", description: "+233 249 350 297", link: "tel:+233249350297" },
  { icon: <FaWhatsapp size={20} />, title: "Whatsapp Number", description: "+233 249 350 297", link: "https://wa.me/+233249350297" },
  {icon: <FaEnvelope size={20} />, title: "Email", description: "merrylyt@gmail.com", link: "mailto:merrylyt@gmail.com?subject=Work and Collaborate&body=Hello Mariama, I would like to discuss a project/work related" },
  {icon: <FaMapMarkerAlt size={20} />, title: "Address", description: "Accra-Ghana (GPS: GE-019-4634)", link: "#" }
]


const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", service: "",});
  const [errors, setErrors] = useState({ name: "", email: "", message: "", phone: "", });
  const [status, setStatus] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = { name: "", email: "", message: "", phone: "", };
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.phone) newErrors.phone = "Phone number is required.";
    if (!form.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
  setForm({ ...form, [name]: value });
  setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await emailjs.send(
        "service_q4mesc9",
        "template_lw8he72",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          service: form.service,
        },
        "mUqASaqWFnV3Uy5he"
      );
  
      console.log("EmailJS response:", response);  response
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "", phone: "" , service: ""}); 
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error("EmailJS error:", error); 
      setStatus("Failed to send the message.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <motion.section initial={{opacity: 0.5}} animate={{opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn"}}} className='py-6 text-white dark:text-black overflow-hidden'>
      <div className='container'>
        {showNotification && (
          <div className="fixed top-5 right-1/2 bg-orange-700 text-white dark:bg-black dark:text-white p-4 rounded-lg shadow-lg z-50 font-montserrat">
            {status}
          </div>
        )}
        <div className='flex flex-col lg:flex-row gap-7'>
          <div className='lg:w-1/2 order-2 lg:order-none'>
            <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-6 p-10'>
              <h3 className='lg:text-4xl text-2xl font-medium text-orange-600 font-lato tracking-wide'>Contact Me...Let's work together!!!</h3>
              <p className='font-cormorant'>Have an idea or project in mind? I’m ready to bring it to life... Let’s connect and create something extraordinary!</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <Input type="text" placeholder="FullName" name='name' value={form.name} onChange={handleChange} />
                  {errors.name && <p className="text-red-500 text-sm italic">{errors.name}</p>}
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" name='email' value={form.email} onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-sm italic">{errors.email}</p>}
                </div>
                <div>
                  <Input type="tel" placeholder="Phone Number" name='phone' value={form.phone} onChange={handleChange} />
                  {errors.phone && <p className="text-red-500 text-sm italic">{errors.phone}</p>}
                </div>
              </div>
              <Select value={form.service} onValueChange={(value) => setForm({ ...form, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose a Service</SelectLabel>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Collaboration">Collaboration</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here..." name='message' value={form.message} onChange={handleChange}></Textarea>
              {errors.message && <p className="text-red-500 text-sm italic">{errors.message}</p>}
              <Button className="max-w-48 bg-orange-700 text-white font-semibold dark:text-black hover:text-orange-700 hover:bg-white hover:font-semibold" type='submit'>Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center lg:justify-end lg:order-none order-1 mb-8 lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li className='flex justify-center items-center gap-6' key={index}>
                    <div className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] bg-zinc-800 text-orange-700 dark:text-white rounded-md flex items-center justify-center'>
                      <a href={item.link} rel='noopener noreferrer' target="_blank" className='text-[28px]'>{item.icon}</a>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60 dark:text-black/60'>{item.title}</p>
                      <a href={item.link} target="_blank" rel='noopener noreferrer' className='lg:text-xl text-lg'>{item.description}</a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
