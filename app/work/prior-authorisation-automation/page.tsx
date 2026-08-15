import { redirect } from "next/navigation";

/**
 * The slug moved from -authorisation- to -authorization- (US spelling; it is a
 * US term of art). This stub keeps the old indexed URL alive.
 */
export const metadata = { robots: { index: false, follow: true } };

export default function LegacyPriorAuthUrl() {
  redirect("/work/prior-authorization-automation/");
}
