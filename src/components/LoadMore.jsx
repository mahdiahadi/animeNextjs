"use client";
import { fetchAnime } from "@/lib/action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const delay = 500;
      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });
        setIsLoading(false);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default LoadMore;
