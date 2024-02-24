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
import data from "../app/data.json";

export function EventsList() {
  if (0 == 0) {
  } else {
  }
  return (
    <>
      <div>
        <CardContent className="grid gap-6 pt-6">
          {data.events.map(function (event) {
            return (
              <div className="flex items-center justify-between p-2 space-x-4">
                <div className="flex-col space-y-4">
                  <div className="flex justify-center">
                    {" "}
                    {/* Added this div for horizontal centering */}
                    <Avatar className="h-12  w-12 content-center">
                      <AvatarImage src="/avatars/02.png" />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                  </div>

                  <div>
                    <p className="text-sm font-medium inline leading-none">
                      {`${event.eventName} | ${event.eventDate}`}
                    </p>
                    <p className="text-sm text-green-600 text-muted-foreground pt-2">
                      Join us for a guided mushroom forage in the beautiful
                      Sonoran Desert.
                    </p>
                  </div>
                  <Button variant={"secondary"} className="w-full">
                    View
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </div>
    </>
  );
}
