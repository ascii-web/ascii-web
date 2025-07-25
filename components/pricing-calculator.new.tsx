"use client";

import { useState, useEffect } from "react";
import {
  Check,
  HelpCircle,
  Zap,
  Package,
  Cloud,
  Lock,
  Sparkles,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { GlitchVariation } from "@/components/ui/glitch-variations";
import { cn } from "@/lib/utils";

interface PricingFeature {
  name: string;
  description: string;
  included: boolean;
  icon?: "zap" | "package" | "cloud" | "lock" | "sparkles";
  highlight?: boolean;
}

interface PricingTier {
  name: string;
  features: PricingFeature[];
  basePrice: number;
  maxProjects: number;
  maxStorage: number;
  popular?: boolean;
  asciiArt: string;
  description: string;
  recommended?: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Hobby",
    description: "Perfect for hobbyists and ASCII art enthusiasts",
    features: [
      {
        name: "Basic ASCII Art Generation",
        description: "Create simple ASCII art with AI assistance",
        included: true,
        icon: "sparkles",
      },
      {
        name: "Community Templates",
        description: "Access to community-shared templates",
        included: true,
        icon: "package",
      },
      {
        name: "Basic Export Options",
        description: "Export as TXT and PNG",
        included: true,
        icon: "cloud",
      },
      {
        name: "Community Support",
        description: "Access to community forums",
        included: true,
        icon: "lock",
      },
    ],
    basePrice: 0,
    maxProjects: 5,
    maxStorage: 100,
    recommended: ["Students", "Hobbyists", "Beginners"],
    asciiArt: `
     ┌─────────┐
     │  HOBBY  │
     │  START  │
     └─────────┘
    `,
  },
  {
    name: "Pro",
    description: "For professionals and growing creators",
    features: [
      {
        name: "Advanced AI Generation",
        description: "Create complex ASCII art with advanced AI models",
        included: true,
        icon: "sparkles",
        highlight: true,
      },
      {
        name: "Custom Templates",
        description: "Create and save your own templates",
        included: true,
        icon: "package",
      },
      {
        name: "Advanced Export Options",
        description: "Export in multiple formats including SVG and animations",
        included: true,
        icon: "cloud",
      },
      {
        name: "Priority Support",
        description: "Fast response support via email",
        included: true,
        icon: "zap",
      },
      {
        name: "API Access",
        description: "Basic API access for integration",
        included: true,
        icon: "lock",
      },
    ],
    basePrice: 15,
    maxProjects: 50,
    maxStorage: 500,
    popular: true,
    recommended: ["Content Creators", "Artists", "Small Teams"],
    asciiArt: `
    ╔════════════╗
    ║    PRO     ║
    ║  CREATOR   ║
    ╚════════════╝
    `,
  },
  {
    name: "Enterprise",
    description: "For organizations needing ultimate flexibility",
    features: [
      {
        name: "Custom AI Models",
        description: "Train and use custom AI models",
        included: true,
        icon: "sparkles",
        highlight: true,
      },
      {
        name: "White-label Solution",
        description: "Remove ASCII Web branding",
        included: true,
        icon: "package",
        highlight: true,
      },
      {
        name: "Unlimited Export Options",
        description: "Export in any format with batch processing",
        included: true,
        icon: "cloud",
      },
      {
        name: "24/7 Priority Support",
        description: "Dedicated support team",
        included: true,
        icon: "zap",
      },
      {
        name: "Full API Access",
        description: "Unlimited API access with higher rate limits",
        included: true,
        icon: "lock",
      },
      {
        name: "Custom Integration",
        description: "Custom integration support",
        included: true,
        icon: "sparkles",
      },
    ],
    basePrice: 49,
    maxProjects: 999,
    maxStorage: 2000,
    recommended: ["Large Teams", "Enterprises", "Agencies"],
    asciiArt: `
    ╔═══════════════╗
    ║  ENTERPRISE   ║
    ║   UNLIMITED   ║
    ╚═══════════════╝
    `,
  },
];

function PriceBreakdownRow({
  label,
  amount,
  prefix,
  tooltip,
  className,
}: {
  label: string;
  amount: number;
  prefix?: string;
  tooltip?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-2 text-sm text-gray-300", className)}
    >
      <span>{label}:</span>
      <span className='font-mono text-terminal-green'>
        {prefix}${amount.toFixed(2)}
      </span>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
            </TooltipTrigger>
            <TooltipContent>
              <span>{tooltip}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}

export function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState<PricingTier>(
    PRICING_TIERS[1]
  ); // Pro by default
  const [projectCount, setProjectCount] = useState(10);
  const [storageNeeded, setStorageNeeded] = useState(100);
  const [annualBilling, setAnnualBilling] = useState(false);
  const [activeTab, setActiveTab] = useState("calculator");
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const { toast } = useToast();

  // Price breakdown logic
  const basePrice = selectedTier.basePrice;
  const extraProjects = Math.max(0, projectCount - selectedTier.maxProjects);
  const extraProjectsCost =
    extraProjects > 0 ? Math.ceil(extraProjects / 10) * 5 : 0;
  const extraStorage = Math.max(0, storageNeeded - selectedTier.maxStorage);
  const extraStorageCost =
    extraStorage > 0 ? Math.ceil(extraStorage / 100) * 2 : 0;
  let subtotal = basePrice + extraProjectsCost + extraStorageCost;
  let discount = 0;
  if (annualBilling) {
    discount = subtotal * 2;
    subtotal = subtotal * 10;
  }
  const totalPrice = subtotal;

  // Price animation effect
  useEffect(() => {
    const targetPrice = totalPrice;
    const step = Math.abs(targetPrice - animatedPrice) / 20;
    const animate = () => {
      setAnimatedPrice((current) => {
        if (Math.abs(targetPrice - current) < step) return targetPrice;
        return current + (targetPrice > current ? step : -step);
      });
    };
    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [totalPrice, animatedPrice]);

  const calculateSavings = () => {
    if (!annualBilling) return 0;
    const monthlyPrice = basePrice + extraProjectsCost + extraStorageCost;
    return (monthlyPrice * 2).toFixed(2);
  };

  const handleSelectTier = (tier: PricingTier) => {
    setSelectedTier(tier);
    toast({ title: `Selected ${tier.name} plan!` });
  };

  return (
    <section className='py-20 bg-black'>
      <GlitchVariation variant='matrix' delay={0}>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <GlitchVariation variant='slice' delay={200}>
              <h2 className='text-4xl md:text-5xl font-bold text-terminal-green mb-6'>
                Choose Your Creative Plan
              </h2>
            </GlitchVariation>

            <GlitchVariation variant='digital' delay={300}>
              <p className='text-gray-400 text-lg'>
                Flexible pricing crafted to inspire and grow your ASCII
                creations
              </p>
            </GlitchVariation>
          </div>

          <div className='max-w-6xl mx-auto'>
            <GlitchVariation variant='wave' delay={400}>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='space-y-8'
              >
                <TabsList className='grid w-full grid-cols-2 mb-8'>
                  <TabsTrigger value='calculator'>Calculator</TabsTrigger>
                  <TabsTrigger value='comparison'>Plan Comparison</TabsTrigger>
                </TabsList>

                <TabsContent value='calculator' className='space-y-8'>
                  <div className='grid lg:grid-cols-2 gap-12 items-start'>
                    {/* Left Column - Calculator Controls */}
                    <div className='space-y-8'>
                      {/* Billing Toggle */}
                      <Card className='p-6'>
                        <div className='flex items-center justify-between'>
                          <div className='space-y-1'>
                            <h3 className='text-xl font-bold text-terminal-green'>
                              Annual Billing
                            </h3>
                            <p className='text-sm text-gray-400'>
                              Save ${calculateSavings()} with annual billing
                            </p>
                          </div>
                          <Switch
                            checked={annualBilling}
                            onCheckedChange={setAnnualBilling}
                            className='data-[state=checked]:bg-terminal-green'
                          />
                        </div>
                      </Card>

                      {/* Project Count */}
                      <Card className='p-6'>
                        <div className='space-y-4'>
                          <div className='flex items-center justify-between'>
                            <h3 className='text-xl font-bold text-terminal-green'>
                              Number of Projects
                            </h3>
                            <span className='text-gray-400'>
                              {projectCount} projects
                            </span>
                          </div>
                          <Slider
                            value={[projectCount]}
                            onValueChange={(value) => setProjectCount(value[0])}
                            min={1}
                            max={1000}
                            step={1}
                            className='my-4'
                          />
                          <Progress
                            value={
                              (projectCount / selectedTier.maxProjects) * 100
                            }
                            className='h-1'
                          />
                          <p className='text-sm text-gray-400'>
                            {projectCount > selectedTier.maxProjects
                              ? `${
                                  projectCount - selectedTier.maxProjects
                                } extra projects will be charged additionally`
                              : `${
                                  selectedTier.maxProjects - projectCount
                                } projects remaining in your plan`}
                          </p>
                        </div>
                      </Card>

                      {/* Storage */}
                      <Card className='p-6'>
                        <div className='space-y-4'>
                          <div className='flex items-center justify-between'>
                            <h3 className='text-xl font-bold text-terminal-green'>
                              Storage Needed
                            </h3>
                            <span className='text-gray-400'>
                              {storageNeeded} MB
                            </span>
                          </div>
                          <Slider
                            value={[storageNeeded]}
                            onValueChange={(value) =>
                              setStorageNeeded(value[0])
                            }
                            min={100}
                            max={2000}
                            step={100}
                            className='my-4'
                          />
                          <Progress
                            value={
                              (storageNeeded / selectedTier.maxStorage) * 100
                            }
                            className='h-1'
                          />
                          <p className='text-sm text-gray-400'>
                            {storageNeeded > selectedTier.maxStorage
                              ? `${
                                  storageNeeded - selectedTier.maxStorage
                                } MB extra storage will be charged additionally`
                              : `${
                                  selectedTier.maxStorage - storageNeeded
                                } MB remaining in your plan`}
                          </p>
                        </div>
                      </Card>
                    </div>

                    {/* Right Column - Price Display */}
                    <div className='space-y-8'>
                      <Card className='p-8'>
                        <div className='text-center'>
                          <GlitchVariation variant='matrix' delay={100}>
                            <div className='text-6xl font-bold text-terminal-green mb-2'>
                              ${animatedPrice.toFixed(2)}
                              <span className='text-lg text-gray-400'>
                                /{annualBilling ? "year" : "month"}
                              </span>
                            </div>
                          </GlitchVariation>

                          <div className='mt-4 text-left max-w-md mx-auto space-y-2'>
                            <PriceBreakdownRow
                              label='Base price'
                              amount={basePrice}
                              tooltip='Base price for the selected plan.'
                            />
                            <PriceBreakdownRow
                              label='Extra projects'
                              amount={extraProjectsCost}
                              prefix='+'
                              tooltip='$5 per 10 extra projects above plan limit.'
                            />
                            <PriceBreakdownRow
                              label='Extra storage'
                              amount={extraStorageCost}
                              prefix='+'
                              tooltip='$2 per 100MB extra storage above plan limit.'
                            />
                            {annualBilling && (
                              <PriceBreakdownRow
                                label='Annual discount'
                                amount={discount}
                                prefix='-'
                                tooltip='2 months free (pay for 10, get 12 months).'
                              />
                            )}
                            <div className='border-t border-gray-800 pt-2 mt-2'>
                              <PriceBreakdownRow
                                label='Total'
                                amount={totalPrice}
                                className='font-bold text-terminal-green'
                              />
                            </div>
                          </div>
                        </div>
                      </Card>

                      <Button
                        className='w-full bg-terminal-green text-black hover:bg-terminal-green/90'
                        size='lg'
                        onClick={() => handleSelectTier(selectedTier)}
                      >
                        Get Started with {selectedTier.name}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='comparison'>
                  <Card className='p-6'>
                    <div className='overflow-x-auto'>
                      <table className='w-full'>
                        <thead>
                          <tr className='border-b border-gray-800'>
                            <th className='text-left p-4'>Feature</th>
                            {PRICING_TIERS.map((tier) => (
                              <th
                                key={tier.name}
                                className={cn(
                                  "text-center p-4 cursor-pointer transition-colors",
                                  selectedTier.name === tier.name
                                    ? "bg-terminal-green/10 border-b-2 border-terminal-green"
                                    : "hover:bg-terminal-green/5"
                                )}
                                onClick={() => handleSelectTier(tier)}
                              >
                                <div className='font-bold text-terminal-green'>
                                  {tier.name}
                                </div>
                                <div className='text-sm text-gray-400'>
                                  ${tier.basePrice}/mo
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-800'>
                          <tr>
                            <td className='p-4'>Projects</td>
                            {PRICING_TIERS.map((tier) => (
                              <td key={tier.name} className='text-center p-4'>
                                {tier.maxProjects === 999
                                  ? "Unlimited"
                                  : tier.maxProjects}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className='p-4'>Storage</td>
                            {PRICING_TIERS.map((tier) => (
                              <td key={tier.name} className='text-center p-4'>
                                {tier.maxStorage} MB
                              </td>
                            ))}
                          </tr>
                          {/* Feature rows */}
                          {PRICING_TIERS[2].features.map((feature) => (
                            <tr key={feature.name}>
                              <td className='p-4'>{feature.name}</td>
                              {PRICING_TIERS.map((tier) => (
                                <td key={tier.name} className='text-center p-4'>
                                  {tier.features.find(
                                    (f) => f.name === feature.name
                                  )?.included ? (
                                    <Check className='w-5 h-5 text-terminal-green mx-auto' />
                                  ) : (
                                    <span className='text-gray-600'>—</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </GlitchVariation>
          </div>
        </div>
      </GlitchVariation>
    </section>
  );
}
