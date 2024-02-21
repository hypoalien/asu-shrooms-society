import { SiteHeader } from "@/components/site-header";
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

export default function Hero() {
  return (
    <section className="flex justify-center bg-white w-full p-6 max-3xl sm:px-16 sm:pt-16">
      <Card
        className=" h-fill bg-white rounded-2xl shadow-xl bg-no-repeat bottom-0 bg-cover "
        style={{ backgroundImage: "url('/hero.png')", "height":500, }}
      >
        <div className="">
          <CardHeader>
            <CardTitle className="md:text-4xl md:pt-64 text-4xl font-bold text-white text-left ">
              Welcome to ASU Shrooms Society
            </CardTitle>
            <CardDescription className="text-white">
              Discover the fascinating world of mushrooms and learn how to
              cultivate and cook them. Join us for educational events, forays,
              and more.
            </CardDescription>
            <div className="flex  pt-2 ">
            <Button variant="secondary" className="text-black-500 bg-green-500">
              Join Now
            </Button>
          </div>
          </CardHeader>

         
        </div>
      </Card>
    </section>
  );
}
