import type { AppProps } from 'next/app'
import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function HeadingDesc(props:{heading:string,content:string}) {
  return (
    <section className="flex flex-col justify-left bg-white w-full h-full p-6 sm:px-32 sm:pt-4">
      <h1 className="md:text-3xl text-3xl font-bold text-black text-left ">
      {props.heading}
      </h1>
      <h1 className=" text-sm text-muted-foreground text-left pt-4 ">
      {props.content}
      </h1>
    </section>
  );
}
