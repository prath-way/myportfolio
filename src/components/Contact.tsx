import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-6">
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Email</h4>
                      <p className="text-slate-600 dark:text-slate-400">waydandeprathamesh2@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Phone</h4>
                      <p className="text-slate-600 dark:text-slate-400">+91 7219435156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Location</h4>
                      <p className="text-slate-600 dark:text-slate-400">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 pt-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-300 dark:border-slate-600 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center text-slate-900 dark:text-slate-100">
                  <Send className="mr-3 h-6 w-6 text-slate-700 dark:text-slate-300" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="hidden" name="access_key" value="0214e911-629e-4f76-bd37-9eee6282c151"/>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold text-slate-700 dark:text-slate-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-slate-500 dark:focus:border-slate-400 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold text-slate-700 dark:text-slate-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-slate-500 dark:focus:border-slate-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold text-slate-700 dark:text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-slate-500 dark:focus:border-slate-400 transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-slate-700 dark:text-slate-300">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-md focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition-colors duration-300 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
