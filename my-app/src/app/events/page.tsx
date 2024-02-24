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
import { EventsList } from "@/components/team-members";
import data from "../data.json"


export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-left bg-white w-full h-full p-6 sm:px-32 sm:pt-6">
        <h1 className="md:text-3xl text-3xl font-bold text-black text-left ">
          Upcoming events
        </h1>
        <EventsList events={data.events} />
        <h1 className="md:text-3xl text-3xl font-bold text-black text-left ">
          Past events
        </h1>
        <EventsList events={data.pastEvents} />
      </section>
    </>
  );
}
