import ComponentO1 from "@/components/component-01";
import ComponentO2 from "@/components/component-02";

export default function Home() {
  return (
    <div className="grid gap-24 xl:gap-[15rem]">
      <ComponentO1 />
      <ComponentO2 />
    </div>
  );
}
