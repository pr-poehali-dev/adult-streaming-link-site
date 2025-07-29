import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const socialLinks = [
    {
      name: "TWITCH",
      url: "https://twitch.tv/yourusername",
      icon: "Tv",
      color: "#9146FF",
      bgColor: "bg-purple-600/20"
    },
    {
      name: "YOUTUBE", 
      url: "https://youtube.com/@yourusername",
      icon: "Youtube",
      color: "#FF0000",
      bgColor: "bg-red-600/20"
    },
    {
      name: "TIKTOK",
      url: "https://tiktok.com/@yourusername", 
      icon: "Music",
      color: "#FF0050",
      bgColor: "bg-pink-600/20"
    },
    {
      name: "TELEGRAM",
      url: "https://t.me/yourusername",
      icon: "Send", 
      color: "#0088CC",
      bgColor: "bg-blue-600/20"
    },
    {
      name: "KICK",
      url: "https://kick.com/yourusername",
      icon: "Zap",
      color: "#53FC18", 
      bgColor: "bg-green-500/20"
    }
  ];

  const Dot = ({ className = "" }: { className?: string }) => (
    <div className={`w-2 h-2 rounded-full bg-yellow-400 animate-pulse ${className}`}></div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Pac-Man dots pattern */}
      <div className="absolute inset-0 dot-pattern"></div>
      
      {/* Floating power pellets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-yellow-400 animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-32 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 rounded-full bg-magenta-400 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-sm w-full z-10 relative">
        {/* Arcade-style border */}
        <div className="pixel-border rounded-lg p-6 mb-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              {/* Pac-Man style avatar */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="w-full h-full rounded-full bg-yellow-400 neon-glow relative overflow-hidden">
                  <div className="absolute top-1/2 right-0 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[20px] border-t-transparent border-b-transparent border-r-black pacman-move"></div>
                  <img 
                    src="/img/f876faf7-efa6-4c8c-8334-3ca9777ec512.jpg" 
                    alt="Streamer Avatar"
                    className="w-full h-full object-cover rounded-full opacity-80"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full neon-glow flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold font-pixel neon-text mb-2 tracking-wider">
                GAMER_STREAMER
              </h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-cyan-400 text-sm font-pixel">LVL 99</span>
                <span className="text-yellow-400">👾</span>
                <span className="text-magenta-400 text-sm font-pixel">PRO</span>
              </div>
              <p className="text-green-400 text-xs font-pixel">
                ARCADE • RETRO • GAMING
              </p>
            </div>
          </div>

          {/* Social Links - Arcade Buttons */}
          <div className="space-y-3 mb-6">
            {socialLinks.map((link, index) => (
              <Card key={link.name} className="overflow-hidden bg-black/80 border-cyan-400 border-2">
                <Button 
                  asChild
                  className={`w-full h-12 arcade-button hover:scale-105 transform transition-all duration-200 text-white font-pixel text-xs group ${link.bgColor}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: `0 0 10px ${link.color}40, inset 0 0 10px ${link.color}20`
                  }}
                >
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Icon 
                      name={link.icon as never} 
                      size={16} 
                      className="group-hover:scale-110 transition-transform duration-200" 
                      style={{color: link.color}}
                    />
                    <span 
                      className="group-hover:tracking-widest transition-all duration-200"
                      style={{color: link.color, textShadow: `0 0 10px ${link.color}`}}
                    >
                      {link.name}
                    </span>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: link.color}}></div>
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Pixel Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { icon: "Gamepad2", label: "GAMES", value: "999+" },
              { icon: "Users", label: "FANS", value: "50K" },
              { icon: "Trophy", label: "WINS", value: "1337" },
              { icon: "Zap", label: "POWER", value: "MAX" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto bg-black/80 border-2 border-cyan-400 rounded flex items-center justify-center mb-1 arcade-button group hover:scale-110 transition-all duration-200">
                  <Icon name={stat.icon as never} size={16} className="text-cyan-400 group-hover:text-yellow-400 transition-colors duration-200" />
                </div>
                <p className="text-[8px] text-yellow-400 font-pixel mb-1">{stat.value}</p>
                <p className="text-[6px] text-cyan-400 font-pixel">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Retro Footer */}
          <div className="text-center border-t-2 border-cyan-400 pt-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Dot />
              <Dot className="delay-200" />
              <Dot className="delay-400" />
            </div>
            <p className="text-green-400 text-[10px] font-pixel tracking-wider">
              PRESS START TO FOLLOW
            </p>
            <p className="text-yellow-400 text-[8px] font-pixel mt-1">
              © 2024 RETRO GAMING
            </p>
          </div>
        </div>

        {/* Power-up indicator */}
        <div className="flex justify-center">
          <div className="bg-black/80 border-2 border-yellow-400 rounded-full px-4 py-2 neon-glow">
            <span className="text-yellow-400 font-pixel text-xs">POWER UP! 🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;