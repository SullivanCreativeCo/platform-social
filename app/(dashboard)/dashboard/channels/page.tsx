import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Share2, Plus, Instagram, Facebook, Linkedin, Settings2, CheckCircle2 } from "lucide-react";

// Mock data - will be replaced with real data from database
const channels = [
  {
    id: "1",
    type: "Instagram",
    username: "@acmecorp",
    brandName: "Acme Corp",
    status: "connected",
    followers: "12.5K",
    lastSync: "2 hours ago",
    icon: Instagram,
  },
  {
    id: "2",
    type: "Facebook",
    username: "Acme Corporation",
    brandName: "Acme Corp",
    status: "connected",
    followers: "8.2K",
    lastSync: "1 hour ago",
    icon: Facebook,
  },
  {
    id: "3",
    type: "LinkedIn",
    username: "acme-corp",
    brandName: "Acme Corp",
    status: "connected",
    followers: "5.1K",
    lastSync: "3 hours ago",
    icon: Linkedin,
  },
  {
    id: "4",
    type: "Instagram",
    username: "@greenearthco",
    brandName: "Green Earth Co",
    status: "connected",
    followers: "18.3K",
    lastSync: "30 minutes ago",
    icon: Instagram,
  },
];

export default function ChannelsPage() {
  const hasChannels = channels.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-charcoal">Channels</h1>
          <p className="text-gray-500 mt-1">
            Manage connected social media accounts
          </p>
        </div>
        <Button variant="primary" size="default">
          <Plus className="w-4 h-4" />
          Connect Channel
        </Button>
      </div>

      {!hasChannels ? (
        <EmptyState
          icon={Share2}
          title="No channels connected"
          description="Connect your first social media account to start posting"
          actionLabel="Connect Channel"
          onAction={() => {}}
        />
      ) : (
        <>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-5">
              <div className="text-sm text-gray-500 mb-1">Total Channels</div>
              <div className="text-2xl font-semibold text-charcoal">{channels.length}</div>
            </Card>
            <Card className="p-5">
              <div className="text-sm text-gray-500 mb-1">Instagram</div>
              <div className="text-2xl font-semibold text-charcoal">
                {channels.filter((c) => c.type === "Instagram").length}
              </div>
            </Card>
            <Card className="p-5">
              <div className="text-sm text-gray-500 mb-1">Facebook</div>
              <div className="text-2xl font-semibold text-charcoal">
                {channels.filter((c) => c.type === "Facebook").length}
              </div>
            </Card>
            <Card className="p-5">
              <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
              <div className="text-2xl font-semibold text-charcoal">
                {channels.filter((c) => c.type === "LinkedIn").length}
              </div>
            </Card>
          </div>

          {/* Channels List */}
          <div className="space-y-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.id} className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-ember-light flex items-center justify-center text-ember">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-charcoal">
                            {channel.username}
                          </h3>
                          <Badge variant="published">
                            <CheckCircle2 className="w-3 h-3" />
                            Connected
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500">
                            {channel.brandName}
                          </span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-500">
                            {channel.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-charcoal">
                          {channel.followers}
                        </div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-700">Last synced</div>
                        <div className="text-xs text-gray-500">{channel.lastSync}</div>
                      </div>

                      <Button variant="ghost" size="sm">
                        <Settings2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
