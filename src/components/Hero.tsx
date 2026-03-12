'use client'

import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { Button } from './Button';
import { useState, useEffect, use } from 'react';

type HeroProps = {
  id?: string;
  theme?: 'primary' | 'dark' | string;
  heading?: React.ReactNode;
  body?: string;
  button?: {
    id?: string;
    theme?: 'primary' | 'dark' | string;
    url?: string;
    label?: string;
  };
  image?: {
    src: string;
    alt: string;
  };
};

const themeClassMap: Record<string, string> = {
  imgLeft: 'md:flex-row-reverse',
  imgRight: 'md:flex-row',
};

export const Hero = (props: HeroProps) => {

  const [toggle, setToggle] = useState(false);
  const [toggleClass, setToggleClass] = useState('toggleOff');
  const toggleHandler = () => {
      setToggle(!toggle);
  }

  useEffect(() => {
    toggle ? setToggleClass('toggleOn') : setToggleClass('toggleOff');
  }, [toggle]);

  return (
    <div className="px-6 py-16 bg-gray-100 sm:px-12 sm:py-24" data-sb-object-id={props.id}>
      <div className={`max-w-6xl mx-auto flex flex-col gap-12 md:items-center ${themeClassMap[props.theme] ?? themeClassMap['imgRight']} ${toggleClass}`}>
        <div className="flex-1 w-full max-w-xl mx-auto">
        <div>
            <button onClick={toggleHandler} className="py-2 px-4 bg-blue-500 text-white rounded">
                {toggle ? 'ON' : 'OFF'}
            </button>
        </div>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl" data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <Markdown options={{ forceBlock: true }} className="mb-6 text-lg" data-sb-field-path="body">
              {props.body}
            </Markdown>
          )}
          {props.button && <Button {...props.button} />}
        </div>
        <div className="relative flex-1 w-full overflow-hidden rounded-md aspect-4/3">
          {props.image && (
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className='object-cover'
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
              data-sb-field-path="image"
            />
          )}
        </div>
      </div>
    </div>
  );
};
