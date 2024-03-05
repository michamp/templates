export type SubMenuItem{
	icon?:any;
	label:string;
	link:string;
}

export type DashMenuItem{
	item_icon:any;
	item_label:string;
	item_submenu?:Array<SubMenuItem>;
}

export interface AdminDash {
  menu: Array<DashMenuItem>,
  
}

