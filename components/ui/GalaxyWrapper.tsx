"use client";

import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/ui/Galaxy"), { ssr: false });

export default function GalaxyWrapper(props: any) {
  return <Galaxy {...props} />;
}
