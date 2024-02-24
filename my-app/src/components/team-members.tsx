import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export function EventsList(props:{events:{eventName:string,eventDate:string,eventDesc:string,img:string,eventLink:string}[]}) {
  return (
    <>

    <div>
      <CardContent className="grid gap-6 pt-6">
        {props.events.map(function(event,index){
          return(
            <div className="flex items-center justify-between pr-4 space-x-4 min-w-72" key={index}>
            <div className="flex items-center space-x-4 ">
              <Avatar className="h-12 w-12">
                <AvatarImage src={event.img} />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium inline leading-none">
                  {`${event.eventName} | ${event.eventDate}`}
                </p>
                <p className="text-sm text-green-600 text-muted-foreground pt-2">
                  {event.eventDesc}
                </p>
              </div>
            </div>
            <Link href={`${event.eventLink}`}>
                {" "}
                <Button
                  variant="secondary"
                  className="text-black-500 bg-green-500"
                >
                  View
                </Button>
              </Link>
          </div>
          )
        })}
       
      </CardContent>
    </div>
    
    </>
  );
}
