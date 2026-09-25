import { Nav } from "@/components/nav";
import { OfflineBanner } from "@/src/components/OfflineBanner";
import { StakingSlipDrawer } from "@/src/components/StakingSlipDrawer";
import { StakingSlipProvider } from "@/src/context/StakingSlipContext";

export function AppLayout({
    children,
    rightSidebar
}: {
    children: React.ReactNode,
    rightSidebar?: React.ReactNode
}) {
    return (
        <StakingSlipProvider>
            <div className="min-h-screen bg-background">
                <OfflineBanner />
                <div className="max-w-7xl mx-auto flex justify-center min-h-screen">
                    <Nav />

                    <main id="main-content" className="flex-1 max-w-2xl w-full border-x border-border min-h-screen">
                        {children}
                    </main>

                    {rightSidebar && (
                        <aside className="hidden lg:block sticky top-0 h-screen w-80 p-6 overflow-y-auto">
                            {rightSidebar}
                        </aside>
                    )}
                </div>
                <StakingSlipDrawer />
            </div>
        </StakingSlipProvider>
    );
}
