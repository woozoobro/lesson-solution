import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Laptop, Crosshair, LucideIcon } from 'lucide-react';

interface PocoLetterProps {
  letter: string;
  word: string;
  icon: LucideIcon;
  description: string;
}


const PocoLetter = ({ letter, word, icon: Icon, description }: PocoLetterProps) => (
  <motion.div 
    className="bg-gradient-to-br from-teal-400 to-indigo-400 p-6 rounded-lg shadow-lg text-white"
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center justify-center mb-4">
      <h4 className="text-5xl font-extrabold mr-2">{letter}</h4>
      <Icon size={32} />
    </div>
    <p className="text-xl font-semibold mb-2">{word}</p>
    <p className="text-sm break-all">{description}</p>
  </motion.div>
);

export default function PocoExplanationSection() {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Personal Lesson Assistant</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PocoLetter 
            letter="P" 
            word="Personalized" 
            icon={Zap}
            description="맞춤형 레슨 관리로 당신만의 교육 스타일을 완성하세요."
          />
          <PocoLetter 
            letter="O" 
            word="Online" 
            icon={Laptop}
            description="언제 어디서나 접속 가능한 클라우드 기반 플랫폼입니다."
          />
          <PocoLetter 
            letter="C" 
            word="Class" 
            icon={Users}
            description="개인 레슨부터 그룹 수업까지, 모든 형태의 클래스를 지원합니다."
          />
          <PocoLetter 
            letter="O" 
            word="Organizer" 
            icon={Crosshair}
            description="복잡한 일정과 관리 업무를 한 눈에 정리해드립니다."
          />
        </div>
        <motion.p 
          className="text-center text-xl text-gray-600 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Poco와 함께라면, 당신의 열정을 레슨에만 집중할 수 있습니다.
        </motion.p>
      </div>
    </section>
  );
}