import { Badge } from "@/components/ui/badge";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumArtwork } from "@/components/ui/album-artwork";
import { CarouselDemo } from "./carousel";
import { DialogDemo } from "./dialog";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-left bg-white w-fill h-fill p-6 sm:px-32 sm:pt-6">
        {/* <DialogDemo></DialogDemo> */}
        <h1 className="md:text-3xl text-3xl font-bold text-black text-left ">
          Gallery
        </h1>
        <div className="w-fill mt-8 ">
          
          <Badge variant="secondary" className="w-fill mr-1">
            All
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Forays
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Meetups
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Workshops
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Mushrooms
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            People
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Nature
          </Badge>
        </div>
        <div className="relative pt-8">
          <ScrollArea className="h-96">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 pb-4">
              
              {madeForYouAlbums.map((album) => (
                <AlbumArtwork
                  key={album.name}
                  album={album}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
      </section>
      {/* <section className="flex flex-col justify-left bg-white w-fill h-fill p-6 sm:px-32 sm:pt-6">
        <h1 className="md:text-3xl text-3xl font-bold text-black text-left ">
          Gallery
        </h1>
        <div className="w-fill mt-8 ">
          <button className="focus:outline-none">
            <Badge variant="secondary" className="w-fill mr-1">
              All
            </Badge>
          </button>
          <Badge variant="secondary" className="w-fill mr-1">
            All
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Forays
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Meetups
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Workshops
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Mushrooms
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            People
          </Badge>
          <Badge variant="secondary" className="w-fill mr-1">
            Nature
          </Badge>
        </div>
        <div className="relative pt-8">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {madeForYouAlbums.map((album) => (
                <AlbumArtwork
                  key={album.name}
                  album={album}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section> */}
      
    </>
  );
}
