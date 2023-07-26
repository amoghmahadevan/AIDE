import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
const LandingPage = () => {
    return(
       <div className = "h-full">
            <LandingNavbar />
            <LandingHero />
       </div>
    );
}

export default LandingPage;