"use client"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import HelloWorld from "@/img/hello-world-html-code.png"
import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';
const code = [
  {
    language: 'jsx',
    filename: 'MyComponent.jsx',
    code: `function MyComponent(props) {
  cont [number, incrementNbr] = setState(0);
  return (
    <div>
      <h1>Current Number: {number}</h1>
      <p>This is an example React component.</p>
      <p>This component displays a simple React hook example.</p>
      <p>Not only is it an example React component, but it is also a 
      valid block of HTML.</p>
      <button onClick={incrementNbr((prev) => prev + 1)}>Click Me</button>
    </div>
  );
}`,
  },
  {
    language: 'tsx',
    filename: 'MyComponent.tsx',
    code: `function MyComponent(props: { name: string }) {
  return (
    <div>
      <h1>Current Number: {number}</h1>
      <p>This is an example React component.</p>
      <p>This component displays a simple React hook example.</p>
      <p>Not only is it an example React component, but it is also a 
      valid block of HTML.</p>
      <button onClick={incrementNbr((prev) => prev + 1)}>Click Me</button>
    </div>
  );
}`,
  },
];
const Example = () => (
  <CodeBlock data={code} defaultValue={code[0].language} className="bg-trans-gray" >
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
);
export default function SkillsetNav(){
    return(
         <div className="grid grid-cols-[auto_1fr] gap-50">
            <div className="grid grid-rows-3 gap-16 items-center">
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Skillset</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-2xl font-semibold uppercase">My coding Niche</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Recent work</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-2xl font-semibold uppercase">Spotify Copycat</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <a href="" className="flex flex-row items-center justify-baseline gap-6 group">
                            <span className="hover:underline transform transition-transform duration-300 uppercase font-extralight">Let's Work Together</span>
                            <ArrowDown size={16} className="-rotate-45 group-hover:-rotate-90 transform transition-transform duration-300" />
                        </a>
                        <p className="text-lg font-bold">markkirby1997@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Example />
                {/*<Image src={HelloWorld} alt="Hello World HTML image example" className="grayscale max-w-[650px]" />*/}

            </div>
         </div>
    )
}