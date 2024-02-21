import data from "../app/data.json"
import HeadingDesc from "./headingDecreption";

export default function About() {
  return (
    <HeadingDesc heading={data.hero.heading} content={data.hero.content} ></HeadingDesc>
  );
}
