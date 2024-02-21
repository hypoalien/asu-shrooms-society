
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-left bg-white w-fill h-fill p-6 sm:px-32 sm:pt-6">
        <h1 className="md:text-1xl text-1xl font-bold text-black text-left ">
          Shroom of the day
        </h1>
        <Card
          className="w-full h-48 mt-4 bg-white rounded-2xl shadow-xl bg-no-repeat	bg-cover "
          style={{ backgroundImage: "url('/hero.png')", height: 300 }}
        />
        <h1 className="md:text-1xl pt-4 text-1xl font-bold text-black text-left ">
          Psilocybin Cubensis
        </h1>
        <h1 className=" text-sm text-muted-foreground text-left pt-1 ">
          The most well-known and widely cultivated of the Psilocybe cubensis
          species, Psilocybe cubensis is a popular choice for those new to the
          magic mushroom experience. It is known for its large, golden-brown
          caps and potent, mind-altering effects.{" "}
        </h1>
        <h1 className="md:text-1xl pt-4 text-1xl font-bold text-black text-left ">
          Characteristics
        </h1>
        <div>
          {/* <Separator className="mt-4"></Separator> */}
          <div className="grid grid-cols-2 gap-3">
            
            {[...Array(5)].map((_, index) => (
              
              <div key={index}>
                <Separator className="mt-4"></Separator>
                <h4 className="text-sm text-muted-foreground text-left pt-2">
                  Cap
                </h4>
                <h4 className="text-sm text-muted-foreground text-left pt-2">
                  2-8 cm in diameter. conical to convex in shape. dry. smooth.
                  and light brown to white in color.
                </h4>
              </div>
            ))}
          </div>
          <Separator className="mt-4"></Separator>
        </div>
        {/* Characteristics */}
        <h1 className="md:text-1xl pt-4 text-1xl font-bold text-black text-left ">
          Characteristics
        </h1>
        <div>
          <Separator className="mt-4"></Separator>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>
        {/* Benifits */}
        <h1 className="md:text-1xl pt-8 text-1xl font-bold text-black text-left ">
          Benefits
        </h1>
        <div>
          <Separator className="mt-4"></Separator>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>

        {/* Interesting Facts */}
        <h1 className="md:text-1xl pt-8 text-1xl font-bold text-black text-left ">
          Interesting Facts
        </h1>
        <div>
          <Separator className="mt-4"></Separator>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
            <div>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                Cap
              </h4>
              <h4 className=" text-sm  text-muted-foreground text-left pt-2 ">
                2-8 cm in diameter. conical to convex in shape. dry. smooth. and
                light brown to white in color.
              </h4>
            </div>
          </div>
          <Separator className="mt-4"></Separator>
        </div>
      </section>
    </>
  );
}
