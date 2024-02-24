import { Button } from "@/components/ui/button";
import data from "../app/data.json";

import Image from "next/image";
import { Carousel } from "./ui/carousel";
import Link from "next/link";

export default function Events() {
  return (
    <section className="flex flex-col col justify-left bg-white w-full h-full p-6 sm:px-32 sm:pt-4">
      <h1 className="md:text-1xl text-1xl font-bold text-black text-left ">
        Upcoming Events
      </h1>
      {data.events.map(function (event,index) {
        return (
          <div key={index} className="flex pt-4 flex-col-reverse lg:flex-row gap-6" >
            <div>
              <div className=" text-sm text-muted-foreground text-green-700 text-left pt-1 md:pt-6 ">
                {event.eventDate}
              </div>
              <div className=" text-1xl font-bold text-muted-foreground text-black text-left pt-1 ">
                {event.eventName}
              </div>
              <h1 className=" text-sm text-muted-foreground text-green-700 text-left pt-1 ">
                {event.eventDesc}
              </h1>
              <div className="pt-2 md:pt-8">
              <Link href={`${event.eventLink}`}>
                {" "}
                <Button
                  variant="secondary"
                  className="sm:w-full md:w-full lg:w-fit"
                >
                  Register
                </Button>
              </Link>
                {/* <Button
                  variant={"secondary"}
                  className="sm:w-full md:w-full lg:w-fit"
                >
                  Register
                </Button> */}
              </div>
            </div>
            <div className="flex-initial md:justify-center lg:justify-left pt-6 ">
              <Image
                src={`${event.img}`} // Replace with your image URL
                alt="Your image description"
                width={500}
                height={150}
                className="rounded-2xl"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
