export type SubMenuItem{
	icon?:any;
	label:string;
	link:string;
}

export type DashMenuItem{
	item_icon:any;
	item_label:string;
}

export interface AdminDash {
  menu: Array<DashMenuItem>,
  pageSubMenu:Array<SubMenuItem>
}

