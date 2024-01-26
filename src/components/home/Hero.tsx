"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShopButton } from "../ui/button";
import Navbar from "../Navbar";

interface square {
  id: number;
  src: string;
}

const ShuffleHero = () => {
  return (
    <div>
      <Navbar/>
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let&apos;s change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <Link href="/sign-in">
          <ShopButton size="lg" />
        </Link>
      </div>
      <ShuffleGrid />
    </section>
</div>
  );
};

const shuffle = (array: square[]) => {
  let currentIndex = array.length,
  randomIndex;
  
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData: square[] = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1661629241728-0d43f7a6a406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1564077439888-928a90061fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1661320893912-46f983307995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVuJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1603712521905-3c68898026f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1701401224460-3d12a7a89917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1679623100266-db82be84f5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkwfHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQ5fHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjQ2fHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1665571434687-e3d20ff33295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjYyfHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1702567297116-f83074bdcf06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODgwfHxncmVlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1525695230005-efd074980869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV1c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1635214408967-0717b9507d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJldXNlfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1533626904905-cc52fd99285e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1560452265-74a9a3b351cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxyZXVzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current as NodeJS.Timeout);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="hidden md:grid grid-cols-4 grid-rows-4 h-[450px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
