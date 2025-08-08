import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingNav } from "components/FloatingNav";
import {
  MapPin,
  Mail,
  Linkedin,
  ExternalLink,
  Award,
  Users,
  Building2,
  TrendingUp,
  Heart,
  GraduationCap,
  Monitor,
  Code,
  FileText,
  Target,
  Briefcase,
  Shield,
  ChevronUp,
  ChevronDown,
  Trophy,
  Zap,
  BookOpen,
  BarChart3,
  Clipboard,
  FolderKanban,
  Lightbulb,
  Send,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  return (
    <div className="bg-[#030014] text-white min-h-screen font-sans">
      <FloatingNav />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.section
            id="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="max-w-6xl mx-auto space-y-24">
              {/* Header Card with Glassmorphic Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl p-8 md:p-12 rounded-3xl relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Profile Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                      {/* Avatar */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <Avatar className="w-40 h-48 border-4 border-white/30 shadow-x1 rounded-lg overflow-hidden">
  <AvatarImage
    src="/photo.jpg"
    alt="Abdullah Tayran"
    className="object-cover w-full h-full"
  />
</Avatar>

                      </motion.div>
                      
                      {/* Name and Title */}
                      <div className="flex-1 text-center md:text-left">
                        <motion.h1
                          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-4 tracking-tight"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          Abdullah Tayran
                        </motion.h1>
                        
                        <motion.div
                          className="space-y-3 mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-3 py-1">
                              Health Informatics Specialist
                            </Badge>
                            <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-400/30 px-3 py-1">
                              HIS & ERP Implementation
                            </Badge>
                          </div>
                          <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            <Badge variant="secondary" className="bg-teal-500/20 text-teal-200 border-teal-400/30 px-3 py-1">
                              RCM Optimization
                            </Badge>
                            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30 px-3 py-1">
                              Digital Health Solutions
                            </Badge>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Tagline */}
                    <motion.div
                      className="text-center mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <h2 className="text-xl md:text-2xl text-blue-100 font-light italic leading-relaxed max-w-4xl mx-auto">
                        "Transforming healthcare through innovative IT solutions—bridging technology and patient care."
                      </h2>
                    </motion.div>
                    
                    {/* Contact Information */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.8 }}
                    >
                      {/* Location */}
                      <Card className="backdrop-blur-lg bg-white/5 border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                            <MapPin className="w-5 h-5 text-blue-300" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-300">Location</p>
                            <p className="text-white font-medium">Jazan, Saudi Arabia</p>
                          </div>
                        </div>
                      </Card>
                      
                      {/* Email */}
                      <Card className="backdrop-blur-lg bg-white/5 border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer">
  <a href="mailto:Abdullahtayran180@gmail.com" className="flex items-center gap-3 w-full">
    <div className="p-2 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
      <Mail className="w-5 h-5 text-green-300" />
    </div>
    <div className="min-w-0"> {/* This makes text wrap instead of overflow */}
      <p className="text-sm text-gray-300">Email</p>
      <p className="text-white font-medium flex items-center gap-1 break-all">
        Abdullahtayran180@gmail.com
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </p>
    </div>
  </a>
</Card>

                      
                      {/* LinkedIn */}
                      <Card className="backdrop-blur-lg bg-white/5 border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <a href="https://www.linkedin.com/in/abdullah-tayran" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
                            <Linkedin className="w-5 h-5 text-teal-300" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-300">LinkedIn</p>
                            <p className="text-white font-medium flex items-center gap-1">
                              Connect with me
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </p>
                          </div>
                        </a>
                      </Card>
                    </motion.div>
                    
                    {/* Call to Action */}
                    <motion.div
                      className="mt-12 flex flex-col items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <Button 
                          asChild 
    size="lg" 
    className="w-72 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <a href="mailto:Abdullahtayran180@gmail.com" className="flex items-center justify-center gap-3">
      Let's Innovate Healthcare Together
    </a>
  </Button><Button 
    asChild 
    size="lg"
    className="w35 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    <a href="/Abdullah-Tayran-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
      Resume
      <FileText className="mr-2 h-5 w-5" />
    </a>
  </Button>
                    </motion.div>
                    
                  </div>
                </Card>
                
              </motion.div>
              
            </div>
          </motion.section>

          {/* About Me Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl p-4 md:p-6 rounded-xl relative overflow-hidden mb-12">
                {/* Medical-inspired curved background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 rounded-3xl" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                      With <span className="font-semibold text-green-300">3+ years of experience</span> in Health IT, I specialize in implementing Hospital Information Systems (HIS/EMR), optimizing workflows, and training healthcare professionals. My work ensures seamless digital transitions for hospitals like <span className="font-semibold text-blue-300">King Saud Medical City</span> and <span className="font-semibold text-blue-300">Jazan General Hospital</span>, enhancing both operational efficiency and patient outcomes.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Passionate about leveraging <span className="font-semibold text-teal-300">data analytics</span> and <span className="font-semibold text-teal-300">user-centric design</span> to solve healthcare challenges and drive meaningful impact in patient care.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {/* Achievement 1: HIS Implementations */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-400/10 p-4 rounded-xl hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                      <Building2 className="w-6 h-6 text-blue-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-200 mb-1">5+</h4>
                    <p className="text-base font-semibold text-white mb-2">HIS Implementations</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Led end-to-end implementations of Oasis Plus, Arcus AIR, and VIDA+ systems across multiple hospitals
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Achievement 2: Staff Training */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-400/10 p-4 rounded-xl hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                      <Users className="w-6 h-6 text-green-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-200 mb-1">300+</h4>
                    <p className="text-base font-semibold text-white mb-2">Clinical Staff Trained</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Comprehensive training programs for healthcare professionals on EHR systems and digital workflows
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Achievement 3: HIMSS Certification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-400/10 p-4 rounded-xl hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors">
                      <Award className="w-6 h-6 text-purple-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-200 mb-1">Stage 6</h4>
                    <p className="text-base font-semibold text-white mb-2">HIMSS EMRAM</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Achieved HIMSS EMRAM Stage 6 certification for HNHJ, demonstrating advanced EHR capabilities
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Achievement 4: Digital Transformation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border-teal-400/10 p-4 rounded-xl hover:from-teal-500/10 hover:to-cyan-500/10 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-500/20 transition-colors">
                      <TrendingUp className="w-6 h-6 text-teal-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-teal-200 mb-1">30%</h4>
                    <p className="text-base font-semibold text-white mb-2">Error Reduction</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Optimized workflows and data validation protocols resulting in significant error reduction
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Skills & Expertise Section */}
          <motion.section
            id="expertise"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* HIS/EMR Implementation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-400/10 p-4 rounded-xl hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Code className="w-5 h-5 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">HIS/EMR Implementation</h3>
                      <p className="text-xs text-gray-400">Advanced</p>
                    </div>
                    <div className="hexagon-container">
                      <div className="hexagon bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-blue-400/30">
                        <span className="text-blue-300 text-xs font-semibold">95%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    End-to-end deployment and optimization of Oasis Plus, Arcus AIR, VIDA+ systems.
                  </p>
                </Card>
              </motion.div>

              {/* Data Analytics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/5 to-teal-500/5 border-green-400/10 p-4 rounded-xl hover:from-green-500/10 hover:to-teal-500/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <BarChart3 className="w-5 h-5 text-green-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">Data Analytics</h3>
                      <p className="text-xs text-gray-400">Intermediate</p>
                    </div>
                    <div className="hexagon-container">
                      <div className="hexagon bg-gradient-to-br from-green-400/20 to-green-600/20 border-green-400/30">
                        <span className="text-green-300 text-xs font-semibold">90%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Advanced analytics using SQL, Power BI, and Excel for healthcare insights.
                  </p>
                </Card>
              </motion.div>

              {/* Project Management */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-400/10 p-4 rounded-xl hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Target className="w-5 h-5 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">Project Management</h3>
                      <p className="text-xs text-gray-400">Intermediate</p>
                    </div>
                    <div className="hexagon-container">
                      <div className="hexagon bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/30">
                        <span className="text-purple-300 text-xs font-semibold">88%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Agile workflows, stakeholder coordination, and technical documentation.
                  </p>
                </Card>
              </motion.div>

              {/* Training & Support */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 border-orange-400/10 p-4 rounded-xl hover:from-orange-500/10 hover:to-yellow-500/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <GraduationCap className="w-5 h-5 text-orange-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">Training & Support</h3>
                      <p className="text-xs text-gray-400">Advanced</p>
                    </div>
                    <div className="hexagon-container">
                      <div className="hexagon bg-gradient-to-br from-orange-400/20 to-orange-600/20 border-orange-400/30">
                        <span className="text-orange-300 text-xs font-semibold">92%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    EHR training programs and user adoption strategies for 300+ staff.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6 rounded-2xl">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      {/* Hexagonal container */}
                      <div className="w-16 h-16 relative" style={{clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}>
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center">
                          <Award className="w-6 h-6 text-blue-300" />
                        </div>
                      </div>
                      {/* Progress indicator */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-900/30 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ delay: 1.2, duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </div>
                    <p className="text-sm font-semibold text-white">Certifications</p>
                    <p className="text-xs text-gray-400">Power BI + Healthcare IT</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      {/* Hexagonal container */}
                      <div className="w-16 h-16 relative" style={{clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}>
                        <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-green-300" />
                        </div>
                      </div>
                      {/* Progress indicator */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-green-900/30 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: 1.4, duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </div>
                    <p className="text-sm font-semibold text-white">5+ Projects</p>
                    <p className="text-xs text-gray-400">HIS Implementations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      {/* Hexagonal container */}
                      <div className="w-16 h-16 relative" style={{clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'}}>
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-600/30 flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-300" />
                        </div>
                      </div>
                      {/* Progress indicator */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-900/30 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          transition={{ delay: 1.6, duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </div>
                    <p className="text-sm font-semibold text-white">300+ Staff</p>
                    <p className="text-xs text-gray-400">Trained on EHR</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.section>

          {/* Career Timeline Section */}
          <motion.section
            id="portfolio"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Project Portfolio & Implementation Experience
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transforming healthcare through strategic implementations and innovative solutions
            </motion.p>
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline Line with EKG Pattern */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-green-400/50 via-blue-400/50 to-purple-400/50 rounded-full" style={{height: 'calc(100% - 6rem)'}}></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Current Role - Balsam United */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content - Right side on desktop */}
                  <div className="md:w-1/2 md:ml-auto pl-16 md:pl-8">
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-400/20 p-6 rounded-2xl hover:from-green-500/15 hover:to-emerald-500/15 transition-all duration-300 group">
                      {/* Role Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                          <Briefcase className="w-6 h-6 text-green-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">Project Specialist</h3>
                          <p className="text-green-300 font-semibold">Balsam United • 2023–Present</p>
                        </div>
                        <div className="bg-green-500/20 px-3 py-1 rounded-full">
                          <span className="text-green-300 text-sm font-semibold">Current</span>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Spearheaded Oasis Plus rollout at 2 hospitals
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Reduced data entry errors by 30%
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Authored 10+ technical manuals for system maintenance
                          </p>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-green-400/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-300 mb-1">2</div>
                          <div className="text-xs text-gray-400">Hospitals</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-300 mb-1">30%</div>
                          <div className="text-xs text-gray-400">Error Reduction</div>
                        </div>
                      </div>

                      {/* Expandable Section */}
                      <div className="mt-4">
                        <button
                          onClick={() => toggleCard('balsam')}
                          className="w-full flex items-center justify-between p-3 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors group/btn"
                        >
                          <span className="text-green-300 font-medium">View Project Details</span>
                          {expandedCard === 'balsam' ? (
                            <ChevronUp className="w-4 h-4 text-green-300 group-hover/btn:scale-110 transition-transform" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-green-300 group-hover/btn:scale-110 transition-transform" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedCard === 'balsam' ? 'auto' : 0,
                            opacity: expandedCard === 'balsam' ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-green-500/5 rounded-lg mt-3 space-y-4">
                            {/* Technologies Used */}
                            <div>
                              <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Technologies & Systems
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">Oasis Plus HIS</Badge>
                                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">SQL Server</Badge>
                                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">System Integration</Badge>
                              </div>
                            </div>
                            
                            {/* Key Achievements */}
                            <div>
                              <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                                <Trophy className="w-4 h-4" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                  <Zap className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                                  Streamlined patient registration process reducing wait times by 25%
                                </li>
                                <li className="flex items-start gap-2">
                                  <BookOpen className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                                  Developed comprehensive training modules for clinical staff
                                </li>
                                <li className="flex items-start gap-2">
                                  <Shield className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                                  Implemented data validation protocols ensuring 99.7% accuracy
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </motion.div>

                {/* IQVIA Role */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content - Left side on desktop */}
                  <div className="md:w-1/2 pl-16 md:pl-0 md:pr-8">
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/20 p-6 rounded-2xl hover:from-blue-500/15 hover:to-cyan-500/15 transition-all duration-300 group">
                      {/* Role Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          <Monitor className="w-5 h-5 text-blue-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">HIS Support Specialist</h3>
                          <p className="text-blue-300 font-semibold">IQVIA • Mar 2023 - May 2023</p>
                        </div>
                      </div>

                      {/* Key Achievement */}
                      <div className="mb-3">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0" />
                          <p className="text-gray-300 text-xs leading-relaxed">
                            Resolved 100% of critical Go-Live tickets for Arcus AIR at King Saud Medical City
                          </p>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-blue-400/10">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-300 mb-1">50+</div>
                          <div className="text-xs text-gray-400">Staff Trained</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-300 mb-1">15+</div>
                          <div className="text-xs text-gray-400">Support Tickets</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-300 mb-1">KSMC</div>
                          <div className="text-xs text-gray-400">Major Hospital</div>
                        </div>
                      </div>

                      {/* Expandable Section */}
                      <div className="mt-4">
                        <button
                          onClick={() => toggleCard('iqvia')}
                          className="w-full flex items-center justify-between p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors group/btn"
                        >
                          <span className="text-blue-300 font-medium">Go-Live Implementation Details</span>
                          {expandedCard === 'iqvia' ? (
                            <ChevronUp className="w-4 h-4 text-blue-300 group-hover/btn:scale-110 transition-transform" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-blue-300 group-hover/btn:scale-110 transition-transform" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedCard === 'iqvia' ? 'auto' : 0,
                            opacity: expandedCard === 'iqvia' ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-blue-500/5 rounded-lg mt-3 space-y-4">
                            {/* Project Timeline */}
                            <div>
                              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                                <Monitor className="w-4 h-4" />
                                Arcus AIR Go-Live Phase
                              </h4>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">Mar - May 2023</Badge>
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">King Saud Medical City</Badge>
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">Go-Live Support</Badge>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                Played a key role in the successful go-live phase of the Arcus AIR system implementation, ensuring smooth transition and enhanced digital workflows.
                              </p>
                            </div>
                            
                            {/* Training & Support Achievements */}
                            <div>
                              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Training & User Support
                              </h4>
                              <ul className="space-y-1 text-xs text-gray-300">
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>Led Go-Live activities for Arcus AIR implementation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>Coordinated with clinical teams for system validation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>Provided real-time support during critical launch phase</span>
                                </li>
                              </ul>
                            </div>
                            
                            {/* Implementation Impact */}
                            <div>
                              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Implementation Success
                              </h4>
                              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-400/20">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  Successfully completed system rollout contributing to smooth transition and enhanced digital workflows within KSMC, one of Saudi Arabia's largest medical facilities.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </motion.div>

                {/* Internship */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content - Right side on desktop */}
                  <div className="md:w-1/2 md:ml-auto pl-16 md:pl-8">
                    <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/20 p-6 rounded-2xl hover:from-purple-500/15 hover:to-pink-500/15 transition-all duration-300 group">
                      {/* Role Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                          <GraduationCap className="w-5 h-5 text-purple-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">Health Informatics Intern</h3>
                          <p className="text-purple-300 font-semibold">Jazan General Hospital • 2022</p>
                        </div>
                      </div>

                      {/* Key Achievement */}
                      <div className="mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Successfully implemented VIDA+ EHR system at Jazan General Hospital
                          </p>
                        </div>
                      </div>

                      {/* Achievement Badge */}
                      <div className="text-center mt-4 pt-4 border-t border-purple-400/20">
                        <div className="bg-purple-500/20 px-4 py-2 rounded-full inline-block">
                          <span className="text-purple-300 text-sm font-semibold">First Major Implementation</span>
                        </div>
                      </div>

                      {/* Expandable Section */}
                      <div className="mt-4">
                        <button
                          onClick={() => toggleCard('internship')}
                          className="w-full flex items-center justify-between p-3 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors group/btn"
                        >
                          <span className="text-purple-300 font-medium">Implementation Journey</span>
                          {expandedCard === 'internship' ? (
                            <ChevronUp className="w-4 h-4 text-purple-300 group-hover/btn:scale-110 transition-transform" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-purple-300 group-hover/btn:scale-110 transition-transform" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedCard === 'internship' ? 'auto' : 0,
                            opacity: expandedCard === 'internship' ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-purple-500/5 rounded-lg mt-3 space-y-4">
                            {/* Learning Focus */}
                            <div>
                              <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Learning & Development
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">VIDA+ EHR</Badge>
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">Clinical Workflows</Badge>
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">User Training</Badge>
                              </div>
                            </div>
                            
                            {/* Foundation Achievements */}
                            <div>
                              <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Foundation Building
                              </h4>
                              <div className="text-xs text-gray-400 mb-2">Key Achievements:</div>
                              <div className="grid grid-cols-1 gap-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                                  <span className="text-xs text-gray-300">VIDA+ EHR implementation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                                  <span className="text-xs text-gray-300">Clinical workflow optimization</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* EKG Pattern Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
            >
              <div className="w-64 h-12 relative overflow-hidden">
                <svg viewBox="0 0 256 48" className="w-full h-full">
                  <motion.path
                    d="M0,24 L50,24 L60,12 L70,36 L80,12 L90,24 L140,24 L150,8 L160,40 L170,8 L180,24 L256,24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-blue-400/60"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 2.4, duration: 2 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </div>
            </motion.div>
          </motion.section>

          {/* Certifications & Education Section */}
          <motion.section
            id="certs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-200"
            >
              Certifications & Education
            </motion.h2>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-white">
                Professional Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Microsoft Power BI Certification */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 border-orange-400/10 p-4 rounded-xl hover:from-orange-500/10 hover:to-yellow-500/10 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      {/* Certification Badge */}
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <BarChart3 className="w-8 h-8 text-orange-300" />
                      </div>
                      
                      {/* Certification Details */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">
                          Microsoft Power BI Data Analyst
                        </h4>
                        <p className="text-orange-300 font-semibold mb-2">Microsoft • 2024</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Advanced data analysis, visualization, and business intelligence using Power BI platform.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 text-xs">
                            Data Analytics
                          </Badge>
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-xs">
                            Business Intelligence
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

               
               {/* Johns Hopkins Healthcare IT Certification */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-400/10 p-4 rounded-xl hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      {/* Certification Badge */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Heart className="w-8 h-8 text-blue-300" />
                      </div>
                      
                      {/* Certification Details */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">
                          Healthcare IT Support
                        </h4>
                        <p className="text-blue-300 font-semibold mb-2">Johns Hopkins University • 2024</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          Comprehensive healthcare information systems support and implementation strategies.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                            Healthcare IT
                          </Badge>
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs">
                            System Support
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>


              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-white">
                Educational Background
              </h3>
              
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-400/10 p-6 rounded-xl hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* University Badge */}
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <GraduationCap className="w-10 h-10 text-green-300" />
                      </div>
                      
                      {/* Degree Details */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-2">
                          Bachelor in Health Informatics
                        </h4>
                        <p className="text-green-300 font-semibold text-lg mb-3">
                          Jazan University • 2023
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Comprehensive study of healthcare information systems, data management, 
                          digital health technologies, and clinical workflow optimization. 
                          Specialized in HIS implementation and healthcare analytics.
                        </p>
                        
                        {/* Key Areas of Study */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="text-green-300 font-semibold mb-2">Core Subjects:</h5>
                            <ul className="space-y-1 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                Health Information Systems
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                Clinical Data Management
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                Healthcare Analytics
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-green-300 font-semibold mb-2">Specializations:</h5>
                            <ul className="space-y-1 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                EHR Implementation
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                Digital Health Solutions
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                Healthcare Interoperability
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                            Health Informatics
                          </Badge>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                            Bachelor's Degree
                          </Badge>
                          <Badge className="bg-teal-500/20 text-teal-300 border-teal-400/30">
                            2023 Graduate
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Simplified Call-to-Action Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-200"
            >
              
              Let's Innovate Healthcare Together!
              
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              I am always looking for new opportunities to collaborate on projects that drive the future of digital health, let's connect.
            </motion.p>
            <div className="flex justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <a href="mailto:Abdullahtayran180@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white">
                <a href="https://www.linkedin.com/in/abdullah-tayran" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
