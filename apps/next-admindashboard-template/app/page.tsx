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

export default function Page(): JSX.Element {

  const dashMenuItems:Array<DashMenuItem> = [
	{ item_icon: "IconHome2", item_label: 'Home',item_link: '/'},
  	{ item_icon: "IconLayoutDashboard", item_label: 'Dashboard',item_link: '/dashboard' },
  	{ item_icon: "IconTable", item_label: 'Tables',item_link: '/tables'},
  	{ item_icon: "IconForms", item_label: 'Forms',item_link: '/forms' },
  	{ item_icon: "IconChartDots2", item_label: 'Charts',item_link: '/charts' },
    	{ item_icon: "IconCalendarMonth", item_label: 'Calendars',item_link: '/calendars' },	
  	{ item_icon: "IconFileInfo", item_label: 'Pages',item_link: '/pages' },
  	{ item_icon: "IconAppWindow", item_label: 'UI Elements',item_link: '/ui' },  	
  	{ item_icon: "IconUser", item_label: 'Account',item_link: '/useraccount' },
  	{ item_icon: "IconFingerprint", item_label: 'Security',item_link: '/security' },
  	{ item_icon: "IconUsersGroup", item_label: 'Users',item_link: '/users' },
  	{ item_icon: "IconSettings", item_label: 'Settings',item_link: '/settings' },
	];
	

  const pageSubMenuItems:Array<SubMenuItem> = [
	  { icon: "IconLayoutDashboard", label: 'Dashboard',link:"#dash" },
	  { icon: "IconTable", label: 'Tables',link:"#tables" },
	  { icon: "IconForms", label: 'Forms',link:"#forms"  },
	  { icon: "IconChartDots2", label: 'Charts',link:"#charts"  },
	  { icon: "IconCalendarMonth,", label: 'Calendars',link:"#calendars" },	
	  { icon: "IconFileInfo", label: 'Pages',link:"#pages" },
	  { icon: "IconAppWindow", label: 'UI Elements',link:"#ui" },  	
	  { icon: "IconUser", label: 'Account',link:"#useraccount"  },
	  { icon: "IconFingerprint", label: 'Security',link:"#security"  },
	  { icon: "IconUsersGroup", label: 'Users',link:"#users"  },
	  { icon: "IconSettings", label: 'Settings',link:"#settings"  },
	];

  const dashMenuConfig:AdminDash =  {activeMenuitem:'Home',
  			             menu: dashMenuItems,
                                     pageSubMenu: pageSubMenuItems,
                                     pageWidgetName:'HomeWidgets',
                                     pageTitle:'NextJS Admin Dashboard',};

  return (
    <main>
	<DoubleNavbarAdminDash menuConfig={dashMenuConfig}/>

    </main>
  );
}
