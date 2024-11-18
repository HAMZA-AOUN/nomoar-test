import Header from "@/components/Header";
import Helping from "@/components/Helping";
import Paying from "@/components/Paying";
import Plans from "@/components/Plans";
import Significant from "@/components/Significant";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <Header />
      <Plans />
      <Paying />
      <Significant />
      <Helping />
    </div>
  );
}
