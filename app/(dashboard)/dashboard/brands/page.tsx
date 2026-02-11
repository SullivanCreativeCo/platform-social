import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Layers, Plus, Settings2 } from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with real data from database
const brands = [
  {
    id: "1",
    name: "Acme Corp",
    description: "Leading technology solutions provider",
    industry: "Technology",
    primaryColor: "#D46A3A",
    toneKeywords: ["Professional", "Innovative", "Trustworthy"],
    targetAudience: "B2B decision makers, tech enthusiasts",
    contentGoals: "Establish thought leadership, drive engagement",
    socialAccounts: 3,
  },
  {
    id: "2",
    name: "Green Earth Co",
    description: "Sustainable products for a better tomorrow",
    industry: "Sustainability",
    primaryColor: "#4A9D6E",
    toneKeywords: ["Eco-friendly", "Authentic", "Inspiring"],
    targetAudience: "Environmentally conscious consumers",
    contentGoals: "Build community, educate on sustainability",
    socialAccounts: 2,
  },
];

export default function BrandsPage() {
  const hasBrands = brands.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-charcoal">Brands</h1>
          <p className="text-gray-500 mt-1">
            Manage brand identities and voice profiles
          </p>
        </div>
        <Link href="/dashboard/brands/new">
          <Button variant="primary" size="default">
            <Plus className="w-4 h-4" />
            New Brand
          </Button>
        </Link>
      </div>

      {!hasBrands ? (
        <EmptyState
          icon={Layers}
          title="No brands yet"
          description="Create your first brand to start managing social media content"
          actionLabel="Create Brand"
          onAction={() => {}}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {brands.map((brand) => (
            <Card key={brand.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-display text-xl"
                    style={{ backgroundColor: brand.primaryColor }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-500">{brand.industry}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Settings2 className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-700 mb-4">{brand.description}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Voiceprint
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.toneKeywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-ember-light text-ember"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Target Audience
                  </p>
                  <p className="text-sm text-gray-700">{brand.targetAudience}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone">
                <div className="text-sm text-gray-500">
                  {brand.socialAccounts} channel{brand.socialAccounts !== 1 ? "s" : ""}{" "}
                  connected
                </div>
                <Link href={`/dashboard/brands/${brand.id}`}>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
