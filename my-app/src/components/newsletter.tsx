import { Button } from "@/components/ui/button";

import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="flex flex-col col justify-left bg-white w-full h-full p-6 sm:px-32 sm:pt-4">
      <h1 className="md:text-1xl text-1xl font-bold text-black text-left pt-6 ">
        Get in touch
      </h1>
      <h1 className=" text-sm text-muted-foreground text-green-700 text-left pt-1 ">
       {` We're always looking for new members, volunteers, and potential
        collaborators. If you have any questions or ideas, please reach out to
        us via email or social media. You can also sign up for our newsletter to
        stay updated on upcoming events and activities.`}
      </h1>
      <div className="md:w-1/3 ">
        <h1 className=" text-sm font-bold text-black text-left pt-6 ">
          Your email address
        </h1>

        <div className="pt-1 flex flex-col items-center  gap-x-4">
          <Input type="email" placeholder="email"></Input>
          <Button
            variant="secondary"
            className="text-black-500 bg-green-400 w-full mt-4"
          >
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
}
