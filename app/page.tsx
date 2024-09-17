import Image from "next/image";
import Appbar from "./Components/Appbar"
import Providers from "./Components/Providers";
export default function Home() {
  return (
    <div>
      <Providers>
  <Appbar/>
  </Providers>
    </div>
  );
}
