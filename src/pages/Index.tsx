import CustomCursor from "@/components/landing/CustomCursor";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BrandCollaborations from "@/components/landing/BrandCollaborations";
import TalentRoster from "@/components/landing/TalentRoster";
import ManagementServices from "@/components/landing/ManagementServices";
import CampaignMetrics from "@/components/landing/CampaignMetrics";
import SocialDominance from "@/components/landing/SocialDominance";
import PREventManagement from "@/components/landing/PREventManagement";
import CinematicImage from "@/components/landing/CinematicImage";
import AudienceCounters from "@/components/landing/AudienceCounters";
import IndustryNews from "@/components/landing/IndustryNews";
import ExclusivePerks from "@/components/landing/ExclusivePerks";
import BrandReviews from "@/components/landing/BrandReviews";
import ApplyFooter from "@/components/landing/ApplyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <BrandCollaborations />
      <TalentRoster />
      <ManagementServices />
      <CampaignMetrics />
      <SocialDominance />
      <PREventManagement />
      <CinematicImage />
      <AudienceCounters />
      <IndustryNews />
      <ExclusivePerks />
      <BrandReviews />
      <ApplyFooter />
    </div>
  );
};

export default Index;
