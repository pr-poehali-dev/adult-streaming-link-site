import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const socialLinks = [
    {
      name: "Twitch",
      url: "https://twitch.tv/yourusername",
      icon: "Tv",
      color: "from-purple-900/80 to-purple-800/80",
      hoverColor: "hover:from-purple-800/90 hover:to-purple-700/90"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      icon: "Youtube",
      color: "from-red-900/80 to-red-800/80",
      hoverColor: "hover:from-red-800/90 hover:to-red-700/90"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      icon: "Music",
      color: "from-slate-800/80 to-slate-700/80",
      hoverColor: "hover:from-slate-700/90 hover:to-slate-600/90"
    },
    {
      name: "Telegram",
      url: "https://t.me/yourusername",
      icon: "Send",
      color: "from-blue-900/80 to-blue-800/80",
      hoverColor: "hover:from-blue-800/90 hover:to-blue-700/90"
    },
    {
      name: "Kick",
      url: "https://kick.com/yourusername",
      icon: "Zap",
      color: "from-emerald-900/80 to-emerald-800/80",
      hoverColor: "hover:from-emerald-800/90 hover:to-emerald-700/90"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gaming-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gaming-purple rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gaming-blue rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gaming-gray rounded-full blur-2xl animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-md w-full z-10">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden gaming-border">
              <img 
                src="/img/f876faf7-efa6-4c8c-8334-3ca9777ec512.jpg" 
                alt="Streamer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gaming-accent/80 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold font-orbitron text-white gaming-text mb-2">
            GAMER STREAMER
          </h1>
          <p className="text-gaming-accent/80 text-lg font-medium mb-1">
            🎮 Pro Gaming Content
          </p>
          <p className="text-gray-400 text-sm">
            Live Streaming • Adult Gaming Community
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 mb-8">
          {socialLinks.map((link, index) => (
            <Card key={link.name} className="overflow-hidden gaming-card">
              <Button 
                asChild
                className={`w-full h-14 bg-gradient-to-r ${link.color} ${link.hoverColor} hover:scale-[1.02] transform transition-all duration-300 border-0 text-white font-semibold text-base group backdrop-blur-sm`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4"
                >
                  <Icon 
                    name={link.icon as never} 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300 text-gray-200" 
                  />
                  <span className="group-hover:tracking-wider transition-all duration-300 text-gray-100">
                    {link.name}
                  </span>
                  <Icon 
                    name="ExternalLink" 
                    size={16} 
                    className="opacity-50 group-hover:opacity-80 transition-opacity duration-300 text-gray-300" 
                  />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Gaming Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { icon: "Gamepad2", label: "Gaming" },
            { icon: "Video", label: "Streaming" },
            { icon: "Headphones", label: "Audio" },
            { icon: "Trophy", label: "Achievements" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 mx-auto bg-gaming-dark/50 rounded-lg flex items-center justify-center mb-2 border border-gaming-accent/20 hover:border-gaming-accent/40 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Icon name={stat.icon as never} size={18} className="text-gaming-accent/70" />
              </div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium">
            ⚡ Follow for epic gaming streams
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;