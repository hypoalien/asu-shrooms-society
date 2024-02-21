import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import About from "@/components/aboutSection";
import Events from "@/components/eventsSection";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events/>
      <Newsletter/>
    </>
  );
}
