import React from 'react'
import { Description } from './Description';

interface ContentProps {
    theme: string;
}

const Content = ({theme}: ContentProps) => {
  return (
    <main className="min-h-screen py-16 md:py-32 px-6 sm:px-0 justify-start items-center max-w-xl mx-auto flex w-full flex-col gap-4">
    <Description theme={theme}></Description>
  </main>
  )
}

export { Content }