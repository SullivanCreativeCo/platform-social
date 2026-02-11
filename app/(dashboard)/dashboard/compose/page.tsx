"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Upload,
  Wand2,
  Calendar,
  Instagram,
  Facebook,
  Linkedin,
  Image as ImageIcon,
  X,
  RefreshCw
} from "lucide-react";
import { useState } from "react";

export default function ComposePage() {
  const [selectedBrand, setSelectedBrand] = useState("1");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [topic, setTopic] = useState("");
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const brands = [
    { id: "1", name: "Acme Corp" },
    { id: "2", name: "Green Earth Co" },
  ];

  const availableChannels = [
    { id: "ig-1", type: "Instagram", username: "@acmecorp", icon: Instagram },
    { id: "fb-1", type: "Facebook", username: "Acme Corporation", icon: Facebook },
    { id: "li-1", type: "LinkedIn", username: "acme-corp", icon: Linkedin },
  ];

  const handleChannelToggle = (channelId: string) => {
    if (selectedChannels.includes(channelId)) {
      setSelectedChannels(selectedChannels.filter((id) => id !== channelId));
    } else {
      setSelectedChannels([...selectedChannels, channelId]);
    }
  };

  const handleGenerateCaption = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);
    // Simulate AI generation - will be replaced with actual Anthropic API call
    setTimeout(() => {
      setCaption(
        `🚀 Exciting news! ${topic}\n\nWe're thrilled to share this update with our community. This represents a significant milestone in our journey to deliver exceptional value.\n\n#innovation #growth #acmecorp`
      );
      setIsGenerating(false);
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="font-display text-3xl text-charcoal">Compose</h1>
        <p className="text-gray-500 mt-1">
          Create and schedule social media content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Content Creation */}
        <div className="lg:col-span-2 space-y-5">
          {/* Brand & Channel Selection */}
          <Card className="p-5">
            <h2 className="font-semibold text-charcoal mb-4">Brand & Channels</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-charcoal">
                  Select Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                >
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-charcoal">
                  Post to Channels
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {availableChannels.map((channel) => {
                    const Icon = channel.icon;
                    const isSelected = selectedChannels.includes(channel.id);
                    return (
                      <button
                        key={channel.id}
                        onClick={() => handleChannelToggle(channel.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                          isSelected
                            ? "border-ember bg-ember-light"
                            : "border-stone bg-warm-white hover:border-gray-300"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? "text-ember" : "text-gray-500"}`} />
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium text-charcoal">
                            {channel.type}
                          </div>
                          <div className="text-xs text-gray-500">{channel.username}</div>
                        </div>
                        {isSelected && (
                          <Badge variant="published" className="text-xs">
                            Selected
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>

          {/* Media Upload */}
          <Card className="p-5">
            <h2 className="font-semibold text-charcoal mb-4">Media</h2>

            {!uploadedImage ? (
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-stone rounded-lg p-8 text-center hover:border-ember transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-charcoal mb-1">
                    Upload an image
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full rounded-lg"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute top-2 right-2 p-2 bg-charcoal/80 hover:bg-charcoal rounded-lg text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </Card>

          {/* Caption */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-charcoal">Caption</h2>
              <Badge variant="draft" className="text-xs">
                {caption.length} characters
              </Badge>
            </div>

            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your caption or use AI to generate one..."
              className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
              rows={8}
            />
          </Card>
        </div>

        {/* Right Column - AI Signal & Actions */}
        <div className="space-y-5">
          {/* AI Caption Generation */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-5 h-5 text-ember" />
              <h2 className="font-semibold text-charcoal">Signal</h2>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Generate AI-powered captions based on your brand voice
            </p>

            <div className="space-y-3">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-charcoal">
                  Topic or Prompt
                </label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., New product launch"
                />
              </div>

              <Button
                onClick={handleGenerateCaption}
                variant="primary"
                size="default"
                className="w-full"
                disabled={!topic.trim() || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    Generate Caption
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-5">
            <h2 className="font-semibold text-charcoal mb-4">Actions</h2>

            <div className="space-y-3">
              <Button variant="primary" size="default" className="w-full">
                <Calendar className="w-4 h-4" />
                Schedule Post
              </Button>

              <Button variant="secondary" size="default" className="w-full">
                Save as Draft
              </Button>

              <div className="pt-3 border-t border-stone">
                <p className="text-xs text-gray-500 text-center">
                  Posts will be published to {selectedChannels.length || 0} channel
                  {selectedChannels.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </Card>

          {/* Templates (Blueprints) */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-5 h-5 text-ember" />
              <h2 className="font-semibold text-charcoal">Blueprints</h2>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              Select a template for infographics
            </p>

            <Button variant="secondary" size="sm" className="w-full">
              Browse Templates
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
