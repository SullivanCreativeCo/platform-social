"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewBrandPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#D46A3A");

  // Voiceprint fields
  const [brandVoice, setBrandVoice] = useState("");
  const [toneKeywords, setToneKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [contentGoals, setContentGoals] = useState("");

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !toneKeywords.includes(keywordInput.trim())) {
      setToneKeywords([...toneKeywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setToneKeywords(toneKeywords.filter((k) => k !== keyword));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to create brand
    console.log({
      name,
      description,
      industry,
      website,
      primaryColor,
      brandVoice,
      toneKeywords,
      targetAudience,
      contentGoals,
    });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/brands">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="font-display text-3xl text-charcoal">Create New Brand</h1>
          <p className="text-gray-500 mt-1">
            Set up a new brand identity and voice profile
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card className="p-6">
          <h2 className="font-display text-xl text-charcoal mb-4">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
                Brand Name *
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Acme Corp"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-charcoal">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the brand"
                className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="industry" className="block text-sm font-semibold text-charcoal">
                  Industry
                </label>
                <Input
                  id="industry"
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Technology"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-semibold text-charcoal">
                  Website
                </label>
                <Input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="primaryColor" className="block text-sm font-semibold text-charcoal">
                Primary Brand Color
              </label>
              <div className="flex gap-3 items-center">
                <input
                  id="primaryColor"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="h-12 w-20 rounded-lg border-2 border-stone cursor-pointer"
                />
                <Input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  placeholder="#D46A3A"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Voiceprint Configuration */}
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="font-display text-xl text-charcoal">Voiceprint</h2>
            <p className="text-sm text-gray-500 mt-1">
              Define your brand's voice and tone for AI-generated content
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="brandVoice" className="block text-sm font-semibold text-charcoal">
                Brand Voice Description
              </label>
              <textarea
                id="brandVoice"
                value={brandVoice}
                onChange={(e) => setBrandVoice(e.target.value)}
                placeholder="Describe how your brand sounds. e.g., Professional yet approachable, innovative but trustworthy..."
                className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="toneKeywords" className="block text-sm font-semibold text-charcoal">
                Tone Keywords
              </label>
              <div className="flex gap-2">
                <Input
                  id="toneKeywords"
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddKeyword();
                    }
                  }}
                  placeholder="Add keywords like 'Professional', 'Friendly'..."
                />
                <Button type="button" onClick={handleAddKeyword} variant="secondary">
                  Add
                </Button>
              </div>
              {toneKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {toneKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-ember-light text-ember"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyword(keyword)}
                        className="hover:text-ember-dark"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="targetAudience" className="block text-sm font-semibold text-charcoal">
                Target Audience
              </label>
              <textarea
                id="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Describe your target audience. e.g., B2B decision makers, tech enthusiasts aged 25-45..."
                className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contentGoals" className="block text-sm font-semibold text-charcoal">
                Content Goals
              </label>
              <textarea
                id="contentGoals"
                value={contentGoals}
                onChange={(e) => setContentGoals(e.target.value)}
                placeholder="What do you want to achieve with content? e.g., Establish thought leadership, drive engagement..."
                className="w-full px-4 py-3 rounded-lg border border-stone bg-warm-white text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
                rows={2}
              />
            </div>
          </div>
        </Card>

        <div className="flex gap-3 justify-end">
          <Link href="/dashboard/brands">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary">
            Create Brand
          </Button>
        </div>
      </form>
    </div>
  );
}
