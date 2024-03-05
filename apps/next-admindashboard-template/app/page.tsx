import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
//import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { DoubleNavbarAdminDash } from "@repo/ui/DoubleNavbarAdminDash";
import { DemoDonutChart } from "@repo/ui/DemoDonutChart";

import { AdminDash } from "@repo/ui/AdminDash";
import { DashMenuItem } from "@repo/ui/DashMenuItem";
import { SubMenuItem } from "@repo/ui/SubMenuItem";

import { Container } from '@mantine/core';


const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export default function Page(): JSX.Element {

  const dashMenuItems:Array<DashMenuItem> = [
	{ item_icon: "IconHome2", item_label: 'Home'},
  	{ item_icon: "IconGauge", item_label: 'Dashboard' },
  	{ item_icon: "IconDeviceDesktopAnalytics", item_label: 'Tables'},
  	{ item_icon: "IconCalendarStats", item_label: 'Releases' },
  	{ item_icon: "IconUser", item_label: 'Account' },
  	{ item_icon: "IconFingerprint", item_label: 'Security' },
  	{ item_icon: "IconSettings", item_label: 'Settings' },
	];

  const dashMenuConfig:AdminDash =  {menu: dashMenuItems};

  return (
    <main>
	<DoubleNavbarAdminDash menuConfig={dashMenuConfig}/>

    </main>
  );
}
