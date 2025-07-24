import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";
import { AIAssistantWidget } from "@/components/ai-assistant-widget";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationHeader />
      {children}
      <AIAssistantWidget />
      <Footer />
    </>
  );
}
