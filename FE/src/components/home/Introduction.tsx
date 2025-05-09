'use client';

import LottieFile from '@/../public/lottie/video.json';
import Lottie from 'lottie-react';
import * as motion from 'framer-motion/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Introduction = () => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div className='flex w-full flex-col items-center gap-8 text-nowrap pt-[25rem]'>
      <motion.h2
        className='bg-gradient-to-r from-slate-400 to-white bg-clip-text text-5xl font-bold text-transparent max-[768px]:text-4xl max-[540px]:text-3xl max-[440px]:text-2xl'
        initial={{ x: '-3rem', opacity: 0 }}
        whileInView={{ x: '0rem', opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        온라인으로 즐기는 마피아 게임
      </motion.h2>
      <motion.p
        className='text-2xl text-slate-200 max-[768px]:text-xl max-[540px]:text-lg max-[440px]:text-base'
        initial={{ x: '-3rem', opacity: 0 }}
        whileInView={{ x: '0rem', opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        화상 채팅으로 마피아 게임을 즐겨보세요!
      </motion.p>
      <div className='flex w-full flex-row items-center justify-between gap-8 pt-8 max-[1080px]:flex-col'>
        <motion.div
          className='aspect-square w-4/5 max-w-[31.25rem] rounded-full bg-blue-800/50'
          initial={{ rotate: '-90deg', opacity: 0 }}
          whileInView={{ rotate: '0deg', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Lottie animationData={LottieFile} loop={3} />
        </motion.div>
        <motion.div
          className='text-xl text-white max-[768px]:text-lg max-[540px]:text-base max-[440px]:text-sm'
          initial={{ x: '-1rem', opacity: 0 }}
          whileInView={{ x: '0rem', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <p>MafiaCamp는 여러 사람들과 실시간 화상 채팅을 통해</p>
          <p>마피아 게임을 즐길 수 있도록 지원합니다. 여러 사람들과의</p>
          <p>심리전을 통해 게임에서 승리할 수 있도록 노력해 보세요!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
