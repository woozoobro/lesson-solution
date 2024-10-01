// components/FloatingCTA.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      if (window.scrollY > 200) { // 스크롤 위치를 200px로 설정 (필요에 따라 조정)
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 초기 스크롤 위치에 따라 가시성 설정
    handleScroll();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 w-full flex justify-center md:bottom-8 z-50 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <button
            aria-label="무료 체험 시작하기"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center hover:bg-indigo-700 transition duration-300"
            onClick={() => console.log("Floating CTA Clicked")}
          >
            무료 체험 시작하기
            <ChevronRight className="ml-2" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
