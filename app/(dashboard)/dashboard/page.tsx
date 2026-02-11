import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, FileText, Share2, CheckCircle } from "lucide-react";

export default function HQPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="font-display text-[32px] text-charcoal">HQ</h1>
        <p className="text-[13px] text-gray-500 mt-1">
          Your mission control. See everything at a glance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[13px] text-gray-500 font-medium">Scheduled</span>
            <Calendar className="w-[18px] h-[18px] text-caution" />
          </div>
          <div className="font-display text-[32px] text-charcoal">12</div>
          <p className="text-xs text-gray-500 mt-1">Ready to publish</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[13px] text-gray-500 font-medium">Published</span>
            <CheckCircle className="w-[18px] h-[18px] text-success" />
          </div>
          <div className="font-display text-[32px] text-charcoal">48</div>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[13px] text-gray-500 font-medium">Drafts</span>
            <FileText className="w-[18px] h-[18px] text-gray-500" />
          </div>
          <div className="font-display text-[32px] text-charcoal">7</div>
          <p className="text-xs text-gray-500 mt-1">In Holding</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[13px] text-gray-500 font-medium">Channels</span>
            <Share2 className="w-[18px] h-[18px] text-ember" />
          </div>
          <div className="font-display text-[32px] text-charcoal">3</div>
          <p className="text-xs text-gray-500 mt-1">Connected</p>
        </Card>
      </div>

      {/* Launchpad Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Launchpad</CardTitle>
          <p className="text-[13px] text-gray-500 mt-1">
            Your next posts lined up and ready.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ember-light rounded-lg" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      Post Title {i}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Brand Name</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-mono">
                    Today at 2:00 PM
                  </span>
                  <Badge variant="scheduled">Scheduled</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
