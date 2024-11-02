"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Database,
  Check,
  Star,
  Brain,
  Target,
  ArrowRight,
  Users,
  MessageCircle,
} from "lucide-react";

const MarqueePartners = () => {
  const partners = [
    {
      name: "U.S. Embassy",
      type: "Government Partner",
    },
    {
      name: "OpenAI",
      type: "Technology Partner",
    },
    {
      name: "Anthropic",
      type: "Research Partner",
    },
    {
      name: "MIT",
      type: "Academic Partner",
    },
    {
      name: "Stanford",
      type: "Research Partner",
    },
    {
      name: "Google AI",
      type: "Technology Partner",
    },
  ];

  // 파트너 목록을 두 배로 복제하여 무한 스크롤 효과 생성
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="relative flex">
        {/* 첫 번째 슬라이드 그룹 */}
        <div className="flex animate-marquee whitespace-nowrap">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 w-72">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {partner.type}
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 두 번째 슬라이드 그룹 (무한 스크롤을 위한 복제) */}
        <div className="flex animate-marquee2 whitespace-nowrap">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 w-72">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {partner.type}
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {partner.name}
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
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
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
const AnimatedGridItem = ({ children, index }) => {
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
      icon: Shield,
      title: "XAI Solutions",
      description:
        "Transparent and explainable AI systems that help users understand how decisions are made",
    },
    {
      icon: Database,
      title: "Knowledge Graphs",
      description:
        "Advanced reasoning paths for better content verification and fact-checking",
    },
    {
      icon: Brain,
      title: "RAG Systems",
      description:
        "Enhanced content generation with reliable source verification",
    },
    {
      icon: Target,
      title: "Benchmarking",
      description:
        "Clear metrics and standards for AI trustworthiness evaluation",
    },
  ];

  const benefits = [
    {
      icon: Check,
      title: "Verified Content",
      description: "Ensure accuracy and reliability of AI-generated content",
    },
    {
      icon: Star,
      title: "Increased Confidence",
      description: "Build trust in AI systems through transparency",
    },
    {
      icon: Users,
      title: "Better Adoption",
      description: "Enable responsible AI integration across industries",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Understand AI capabilities and limitations",
    },
  ];

  const metrics = [
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "500+", label: "Active Users" },
    { value: "50%", label: "Error Reduction" },
    { value: "24/7", label: "Monitoring" },
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
              Trust Your AI-Generated Content
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive verification tools and transparency frameworks for
              confident AI adoption
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-white/50"></div>
        <div className="container mx-auto px-4 mb-0 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partnering with global institutions to advance AI transparency and
              trust
            </p>
          </AnimatedSection>
        </div>
        <MarqueePartners />
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedGridItem key={index} index={index}>
                <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              </AnimatedGridItem>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advanced Verification Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of tools designed to verify and validate
              AI-generated content
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedGridItem key={index} index={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-100 group">
                  <div className="bg-blue-50 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose TrustAI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empower your organization with reliable AI content verification
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedGridItem key={index} index={index}>
                <div className="text-center group hover:translate-y-[-4px] transition-all duration-300">
                  <div className="inline-block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
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
              Ready to Trust Your AI Content?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join organizations worldwide in adopting transparent and reliable
              AI systems
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
