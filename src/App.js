import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center">
      <Navbar />
      <Model />
    </div>
  );
}

export default App;
