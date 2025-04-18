import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-red-500">CL</span>Devs
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        {/* Warning Banner */}
        <div className="bg-red-500/10 text-red-500 py-2 px-4 rounded-full mb-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <p>This is the only official site, anything else is a scam</p>
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          CLDevs, Roblox's <span className="text-red-500">#1 Exploit</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          CLDevs is an Keyless Executor with 99% Script Support and Optimized for Low-end Computers
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <a href="https://github.com/Baoconroaster/CLDevs-Free/releases" target="_blank" rel="noopener noreferrer">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
              Download Now
            </Button>
          </a>
          <a href="https://discord.gg/6Ku6fA32zr" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#36393f] hover:bg-[#2f3136] text-white px-8">
              Join Discord
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
