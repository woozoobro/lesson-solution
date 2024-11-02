"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Brain,
  Search,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Users,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const MarqueePartners = () => {
  const partners = [
    {
      name: "OpenAI",
      type: "Technology Partner",
      emoji: "🤖",
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-50",
      iconColor: "text-green-600"
    },
    {
      name: "Anthropic",
      type: "Research Partner",
      emoji: "🧠",
      gradientFrom: "from-purple-50",
      gradientTo: "to-indigo-50",
      iconColor: "text-purple-600"
    },
    {
      name: "U.S. Embassy",
      type: "Government Partner",
      emoji: "🏛️",
      gradientFrom: "from-blue-50",
      gradientTo: "to-cyan-50",
      iconColor: "text-blue-600"
    },
    {
      name: "OpenAI",
      type: "Technology Partner",
      emoji: "🤖",
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-50",
      iconColor: "text-green-600"
    },
    {
      name: "Anthropic",
      type: "Research Partner",
      emoji: "🧠",
      gradientFrom: "from-purple-50",
      gradientTo: "to-indigo-50",
      iconColor: "text-purple-600"
    },
    {
      name: "U.S. Embassy",
      type: "Government Partner",
      emoji: "🏛️",
      gradientFrom: "from-blue-50",
      gradientTo: "to-cyan-50",
      iconColor: "text-blue-600"
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <div className={`bg-gradient-to-br ${partner.gradientFrom} ${partner.gradientTo} rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow duration-300 border border-gray-100`}>
                <div className={`flex flex-col items-center text-center`}>
                  <span className="text-5xl mb-3">{partner.emoji}</span>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    {partner.type}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {partner.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee2 whitespace-nowrap">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <div className={`bg-gradient-to-br ${partner.gradientFrom} ${partner.gradientTo} rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow duration-300 border border-gray-100`}>
                <div className={`flex flex-col items-center text-center`}>
                  <span className="text-5xl mb-3">{partner.emoji}</span>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    {partner.type}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {partner.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 애니메이션 섹션 컴포넌트
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

interface AnimatedGridItemProps {
  children: React.ReactNode;
  index: number;
}
const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 그리드 아이템 애니메이션 컴포넌트
const AnimatedGridItem = ({ children, index }: AnimatedGridItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const features = [
    {
      icon: BookOpen,
      title: "AI Literacy Guide",
      description: "Comprehensive educational resources to understand AI capabilities and limitations",
    },
    {
      icon: Search,
      title: "Source Verification",
      description: "Learn how to verify AI-generated content and identify reliable sources",
    },
    {
      icon: Brain,
      title: "Best Practices",
      description: "Guidelines for effective prompting and content generation",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Understanding AI safety and ethical considerations",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Better Understanding",
      description: "Gain confidence in using AI tools effectively",
    },
    {
      icon: Lightbulb,
      title: "Informed Decisions",
      description: "Make better choices about AI-generated content",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Learn from shared experiences and best practices",
    },
    {
      icon: MessageCircle,
      title: "Practical Guidance",
      description: "Real-world applications and use cases",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/20 to-blue-900/40"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Navigate AI With Confidence
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Your guide to understanding, verifying, and effectively using AI-generated content
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/chat">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Try out
                </button>
              </Link>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Guidelines
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-white/50"></div>
        <div className="container mx-auto px-4 mb-0 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Supported By Leading Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Working together to improve AI literacy and digital citizenship
            </p>
          </AnimatedSection>
        </div>
        <MarqueePartners />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Learning Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to become confident in using AI tools
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedGridItem key={index} index={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-100 group">
                  <div className="bg-blue-50 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empower yourself with knowledge and practical skills for the AI age
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedGridItem key={index} index={index}>
                <div className="text-center group hover:translate-y-[-4px] transition-all duration-300">
                  <div className="inline-block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 px-4">{benefit.description}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Master AI Tools?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of informed AI users and build your confidence in the digital age
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
