import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const socialLinks = [
    {
      name: "Twitch",
      url: "https://twitch.tv/yourusername",
      icon: "Tv",
      color: "from-purple-600 to-purple-800",
      hoverColor: "hover:shadow-purple-500/50"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      icon: "Youtube",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:shadow-red-500/50"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      icon: "Music",
      color: "from-pink-600 to-pink-800",
      hoverColor: "hover:shadow-pink-500/50"
    },
    {
      name: "Telegram",
      url: "https://t.me/yourusername",
      icon: "Send",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      name: "Kick",
      url: "https://kick.com/yourusername",
      icon: "Zap",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-neon-magenta rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-neon-green rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-neon-purple rounded-full blur-2xl animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-md w-full z-10">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 gaming-border animate-neon-pulse">
              <img 
                src="/img/f876faf7-efa6-4c8c-8334-3ca9777ec512.jpg" 
                alt="Streamer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold font-orbitron text-white neon-text animate-glow mb-2">
            GAMER STREAMER
          </h1>
          <p className="text-neon-cyan text-lg font-medium mb-1">
            🎮 Gaming Ganins
          </p>
          <p className="text-gray-300 text-sm">
            Streaming Camera • Adult Gaming Content
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4 mb-8">
          {socialLinks.map((link, index) => (
            <Card key={link.name} className="overflow-hidden bg-black/30 border-gray-700/50 backdrop-blur-sm">
              <Button 
                asChild
                className={`w-full h-16 bg-gradient-to-r ${link.color} hover:scale-105 transform transition-all duration-300 border-0 text-white font-semibold text-lg ${link.hoverColor} hover:shadow-2xl group`}
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
                    size={24} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    {link.name}
                  </span>
                  <Icon 
                    name="ExternalLink" 
                    size={18} 
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
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
            { icon: "Trophy", label: "Wins" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-lg flex items-center justify-center mb-2 border border-neon-cyan/30 hover:border-neon-cyan hover:scale-110 transition-all duration-300">
                <Icon name={stat.icon as never} size={20} className="text-neon-cyan" />
              </div>
              <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium">
            🚀 Follow for epic gaming content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;