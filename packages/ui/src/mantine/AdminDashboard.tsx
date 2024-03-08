export type SubMenuItem{
	icon?:any;
	label:string;
	link:string;
}

export type DashMenuItem{
	item_icon:any;
	item_label:string;
	item_link:string;
}

export interface AdminDash {
  menu: Array<DashMenuItem>;
  pageSubMenu:Array<SubMenuItem>;
  active_menuitem:string;
  pageWidgetName:string;
}

