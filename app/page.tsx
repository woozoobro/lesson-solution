"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, X } from "lucide-react";
import PocoLetter from "./components/PocoLetter";
import FloatingCTA from "./components/FloatingCTA";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}
interface PricingFeature {
  included: boolean;
  text: string;
}

interface PricingCardProps {
  plan: string;
  price: string;
  features: PricingFeature[];
}

const TestimonialCard = ({ name, role, content }: Testimonial) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-600 mb-4">{content}</p>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const PricingCard = ({ plan, price, features }: PricingCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-2xl font-bold mb-2">{plan}</h3>
    <p className="text-4xl font-bold text-indigo-600 mb-6">
      ₩{price}
      <span className="text-sm text-gray-500">/월</span>
    </p>
    <ul className="text-left mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          {feature.included ? (
            <Check className="text-green-500 mr-2" />
          ) : (
            <X className="text-red-500 mr-2" />
          )}
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 w-full">
      선택하기
    </button>
  </div>
);

export default function EnhancedLandingPage() {
  const [activeTab, setActiveTab] = useState("feature1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">Poco</h1>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-teal-600">
              기능
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">
              요금제
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300">
              무료 체험 시작
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            당신의 레슨, Poco가 책임집니다.
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            공간의 제약 없이, 당신의 열정을 전해요.
          </motion.p>
          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            수강생 관리부터 출석, 진도까지 모든 것을 간편하게 지원합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg flex items-center mx-auto"
              onClick={() => console.log("Clicked")}
            >
              레슨 관리 시작하기
              <ChevronRight className="ml-2" />
            </button>
          </motion.div>
        </section>

        <PocoLetter />

        <section id="features" className="py-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Poco의 주요 기능
          </h3>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-md">
              {["수강관리", "일정관리", "결제시스템"].map((tab, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === `feature${index + 1}`
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(`feature${index + 1}`)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "feature1" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="수강관리 기능"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <h4 className="text-2xl font-bold mb-4">
                      직관적인 수강 관리
                    </h4>
                    <p className="text-gray-600 mb-4">
                      수강생 정보, 출석, 진도 등을 한눈에 파악하고 관리할 수
                      있습니다. 맞춤형 대시보드로 효율적인 레슨 운영을
                      지원합니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>실시간 출석 체크</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>개인별 진도 관리</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>수강생 피드백 시스템</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "feature2" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
                    alt="일정관리 기능"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <h4 className="text-2xl font-bold mb-4">
                      스마트 일정 관리
                    </h4>
                    <p className="text-gray-600 mb-4">
                      AI 기반 일정 최적화로 여러 공간에서의 레슨을 효율적으로
                      관리합니다. 중복 예약 방지와 자동 알림 기능으로 일정
                      관리가 더욱 편리해집니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>AI 기반 일정 최적화</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>다중 공간 관리</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>자동 알림 시스템</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "feature3" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="결제시스템 기능"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <h4 className="text-2xl font-bold mb-4">
                      안전한 결제 시스템
                    </h4>
                    <p className="text-gray-600 mb-4">
                      다양한 결제 옵션과 함께 안전하고 편리한 결제 시스템을
                      제공합니다. 자동 정산과 세금 계산서 발행으로 회계 관리도
                      간편해집니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>다양한 결제 옵션</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>자동 정산 시스템</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        <span>세금 계산서 자동 발행</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="py-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            고객 후기
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="우송원"
              role="피겨 강사"
              content="Poco 덕분에 여러 장소에서의 레슨 관리가 훨씬 수월해졌어요. 특히 자동 알림 기능이 큰 도움이 됩니다."
            />
            <TestimonialCard
              name="황승호"
              role="영어회화 강사"
              content="수강생 관리와 결제가 한 번에 해결되니 정말 편리해요. 덕분에 레슨에 더 집중할 수 있게 되었습니다."
            />
            <TestimonialCard
              name="김소연"
              role="요가 강사"
              content="다양한 공간에서 진행하는 클래스를 효율적으로 관리할 수 있어 정말 좋아요. 강추합니다!"
            />
          </div>
        </section>

        <section id="pricing" className="py-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            합리적인 요금제
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              plan="스타터"
              price="30,000"
              features={[
                { included: true, text: "기본 수강 관리" },
                { included: true, text: "간단한 일정 관리" },
                { included: true, text: "기본 결제 시스템" },
                { included: false, text: "고급 분석 기능" },
                { included: false, text: "다중 공간 관리" },
              ]}
            />
            <PricingCard
              plan="프로"
              price="50,000"
              features={[
                { included: true, text: "고급 수강 관리" },
                { included: true, text: "AI 기반 일정 최적화" },
                { included: true, text: "고급 결제 시스템" },
                { included: true, text: "기본 분석 기능" },
                { included: true, text: "다중 공간 관리" },
              ]}
            />
            <PricingCard
              plan="엔터프라이즈"
              price="문의"
              features={[
                { included: true, text: "맞춤형 수강 관리" },
                { included: true, text: "고급 AI 일정 관리" },
                { included: true, text: "맞춤형 결제 시스템" },
                { included: true, text: "고급 분석 및 리포팅" },
                { included: true, text: "무제한 공간 관리" },
              ]}
            />
          </div>
        </section>

        <section className="py-20 bg-indigo-50 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              자주 묻는 질문
            </h3>
            <div className="space-y-6">
              {[
                {
                  question: "무료 체험 기간은 얼마인가요?",
                  answer:
                    "Poco는 30일 무료 체험을 제공합니다. 이 기간 동안 모든 기능을 제한 없이 사용해 보실 수 있습니다.",
                },
                {
                  question: "계약 기간은 어떻게 되나요?",
                  answer:
                    "월간 또는 연간 구독 모두 가능합니다. 연간 구독 시 20% 할인된 가격으로 이용하실 수 있습니다.",
                },
                {
                  question: "기술 지원은 어떻게 받을 수 있나요?",
                  answer:
                    "모든 요금제에 이메일 지원이 포함되어 있으며, 프로 플랜 이상에서는 실시간 채팅 지원도 제공됩니다.",
                },
                {
                  question: "데이터 보안은 어떻게 관리되나요?",
                  answer:
                    "Poco는 최신 암호화 기술을 사용하여 모든 데이터를 안전하게 보호합니다. 또한 정기적인 보안 감사를 통해 시스템의 안전성을 지속적으로 검증하고 있습니다.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-left"
                >
                  <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="bg-indigo-600 rounded-lg p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              지금 바로 Poco를 경험해보세요
            </h3>
            <p className="text-xl mb-8">
              30일 무료 체험으로 Poco의 모든 기능을 직접 체험해보세요.
              <br />
              설정이 필요 없으며, 신용카드 정보도 필요하지 않습니다.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              무료 체험 시작하기
            </button>
          </div>
        </section>
      </main>

      <FloatingCTA />

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Poco</h4>
              <p className="text-gray-600">
                당신의 레슨 비즈니스를 위한 최고의 파트너
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">제품</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    기능
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    요금제
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    고객 후기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">회사</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    블로그
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    채용 정보
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">고객 지원</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    도움말 센터
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2024 Poco. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
