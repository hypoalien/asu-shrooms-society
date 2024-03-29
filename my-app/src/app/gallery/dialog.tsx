import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CarouselDemo } from "./carousel";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] ">
        <DialogHeader className="items-center">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
          <CarouselDemo></CarouselDemo>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
