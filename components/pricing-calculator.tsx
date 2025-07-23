"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const calculatePrice = () => totalPrice;

  const calculateSavings = () => {
    if (!annualBilling) return 0;
    const monthlyPrice = basePrice + extraProjectsCost + extraStorageCost;
    return (monthlyPrice * 2).toFixed(2);
  };

  useEffect(() => {
    const targetPrice = calculatePrice();
    const step = Math.abs(targetPrice - animatedPrice) / 20;
    const animate = () => {
      setAnimatedPrice((current) => {
        if (Math.abs(targetPrice - current) < step) return targetPrice;
        return current + (targetPrice > current ? step : -step);
      });
    };
    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [
    basePrice,
    extraProjectsCost,
    extraStorageCost,
    annualBilling,
    selectedTier,
    projectCount,
    storageNeeded,
  ]);

  // Interactive comparison table
  const handleComparisonTierClick = (tier: PricingTier) => {
    setSelectedTier(tier);
    toast({ title: `Selected ${tier.name} plan!` });
  };

  // Get Started action
  const handleGetStarted = () => {
    toast({
      title: `Get Started with ${selectedTier.name}`,
      description: `Plan: ${
        selectedTier.name
      }\nProjects: ${projectCount}\nStorage: ${storageNeeded}MB\nBilling: ${
        annualBilling ? "Annual" : "Monthly"
      }\nTotal: $${totalPrice.toFixed(2)} ${
        annualBilling ? "/year" : "/month"
      }`,
    });
  };

  return (
    <section className='py-20 bg-black'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-terminal-green mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pricing Calculator
          </motion.h2>
          <motion.p
            className='text-gray-400 text-lg'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Calculate your perfect plan based on your needs
          </motion.p>
        </div>

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
              {/* Calculator Controls */}
              <motion.div
                className='space-y-8'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Tier Selection */}
                <div className='grid grid-cols-1 gap-4'>
                  {PRICING_TIERS.map((tier) => (
                    <Card
                      key={tier.name}
                      className={`p-6 cursor-pointer transition-all hover:border-terminal-green relative ${
                        selectedTier.name === tier.name
                          ? "border-terminal-green bg-terminal-green/10"
                          : "border-gray-800"
                      }`}
                      onClick={() => setSelectedTier(tier)}
                    >
                      {selectedTier.name === tier.name && (
                        <div className='absolute top-2 right-2 bg-terminal-green text-black rounded-full p-1'>
                          <Check className='w-4 h-4' />
                        </div>
                      )}
                      <div className='flex items-start justify-between mb-4'>
                        <div>
                          <h3 className='text-xl font-bold text-terminal-green'>
                            {tier.name}
                          </h3>
                          <p className='text-gray-400 text-sm'>
                            {tier.description}
                          </p>
                        </div>
                        {tier.popular && (
                          <Badge
                            variant='secondary'
                            className='bg-terminal-green/20 text-terminal-green'
                          >
                            Popular
                          </Badge>
                        )}
                      </div>
                      <pre className='font-mono text-terminal-green text-sm mb-4 opacity-75'>
                        {tier.asciiArt}
                      </pre>
                      <div className='flex flex-wrap gap-2'>
                        {tier.recommended?.map((tag) => (
                          <Badge
                            key={tag}
                            variant='outline'
                            className='text-xs'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>

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
                      value={(projectCount / selectedTier.maxProjects) * 100}
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
                      <span className='text-gray-400'>{storageNeeded} MB</span>
                    </div>
                    <Slider
                      value={[storageNeeded]}
                      onValueChange={(value) => setStorageNeeded(value[0])}
                      min={100}
                      max={2000}
                      step={100}
                      className='my-4'
                    />
                    <Progress
                      value={(storageNeeded / selectedTier.maxStorage) * 100}
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

                {/* Billing Cycle */}
                <Card className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-bold text-terminal-green'>
                        Annual Billing
                      </h3>
                      <p className='text-sm text-gray-400'>
                        Save up to ${calculateSavings()} with annual billing
                      </p>
                    </div>
                    <Switch
                      checked={annualBilling}
                      onCheckedChange={setAnnualBilling}
                    />
                  </div>
                </Card>
              </motion.div>

              {/* Price Display and Features */}
              <motion.div
                className='space-y-8'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Price */}
                <Card className='p-8'>
                  <div className='text-center'>
                    <motion.div
                      className='text-6xl font-bold text-terminal-green mb-2'
                      key={animatedPrice}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ${animatedPrice.toFixed(2)}
                      <span className='text-lg text-gray-400'>
                        /{annualBilling ? "year" : "month"}
                      </span>
                    </motion.div>
                    <div className='mt-4 text-left max-w-md mx-auto'>
                      <div className='flex items-center gap-2 text-sm text-gray-300'>
                        <span>Base price:</span>
                        <span className='font-mono text-terminal-green'>
                          ${basePrice}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>Base price for the selected plan.</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-300'>
                        <span>Extra projects:</span>
                        <span className='font-mono text-terminal-green'>
                          +${extraProjectsCost}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>
                                $5 per 10 extra projects above plan limit.
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-300'>
                        <span>Extra storage:</span>
                        <span className='font-mono text-terminal-green'>
                          +${extraStorageCost}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>
                                $2 per 100MB extra storage above plan limit.
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {annualBilling && (
                        <div className='flex items-center gap-2 text-sm text-gray-300'>
                          <span>Annual discount:</span>
                          <span className='font-mono text-terminal-green'>
                            - ${discount}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
                              </TooltipTrigger>
                              <TooltipContent>
                                <span>
                                  2 months free (pay for 10, get 12 months).
                                </span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                      <div className='flex items-center gap-2 text-base mt-2 font-bold text-terminal-green'>
                        <span>Total:</span>
                        <span className='font-mono'>
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <p className='text-gray-400 mt-2'>
                      Estimated price based on your usage
                    </p>
                    {annualBilling && (
                      <Badge
                        variant='secondary'
                        className='mt-2 bg-terminal-green/20 text-terminal-green'
                      >
                        Save ${calculateSavings()} annually
                      </Badge>
                    )}
                  </div>
                </Card>

                {/* Features */}
                <Card className='p-6'>
                  <h3 className='text-xl font-bold text-terminal-green mb-6'>
                    Included Features
                  </h3>
                  <div className='space-y-4'>
                    <AnimatePresence>
                      {selectedTier.features.map((feature, index) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <TooltipProvider>
                            <div className='flex items-start gap-3'>
                              <div
                                className={`p-1 rounded ${
                                  feature.highlight
                                    ? "bg-terminal-green/20"
                                    : ""
                                }`}
                              >
                                {feature.icon === "zap" && (
                                  <Zap className='w-5 h-5 text-terminal-green' />
                                )}
                                {feature.icon === "package" && (
                                  <Package className='w-5 h-5 text-terminal-green' />
                                )}
                                {feature.icon === "cloud" && (
                                  <Cloud className='w-5 h-5 text-terminal-green' />
                                )}
                                {feature.icon === "lock" && (
                                  <Lock className='w-5 h-5 text-terminal-green' />
                                )}
                                {feature.icon === "sparkles" && (
                                  <Sparkles className='w-5 h-5 text-terminal-green' />
                                )}
                              </div>
                              <div>
                                <div className='flex items-center gap-2'>
                                  <span className='font-medium'>
                                    {feature.name}
                                  </span>
                                  {feature.highlight && (
                                    <Badge
                                      variant='secondary'
                                      className='text-xs bg-terminal-green/20 text-terminal-green'
                                    >
                                      Premium
                                    </Badge>
                                  )}
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <HelpCircle className='w-4 h-4 text-gray-400 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>{feature.description}</span>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <p className='text-sm text-gray-400'>
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </TooltipProvider>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </Card>

                <Button
                  className='w-full bg-terminal-green hover:bg-terminal-green/90 text-black'
                  size='lg'
                  onClick={handleGetStarted}
                >
                  Get Started with {selectedTier.name}
                </Button>
              </motion.div>
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
                          className={`text-center p-4 cursor-pointer transition-colors ${
                            selectedTier.name === tier.name
                              ? "bg-terminal-green/10 border-b-2 border-terminal-green"
                              : "hover:bg-terminal-green/5"
                          }`}
                          onClick={() => handleComparisonTierClick(tier)}
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
                    {PRICING_TIERS[2].features.map((feature) => (
                      <tr key={feature.name}>
                        <td className='p-4'>{feature.name}</td>
                        {PRICING_TIERS.map((tier) => (
                          <td key={tier.name} className='text-center p-4'>
                            {tier.features.some(
                              (f) => f.name === feature.name
                            ) ? (
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
      </div>
    </section>
  );
}
