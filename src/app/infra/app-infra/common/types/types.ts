
// Menu Items
export interface MenuItem {
    id?: string; // for backward compatibility
    code: number;
    title: string;
    icon?: string;
    children?: MenuItem[];
    link?: string;
}

export type MenuItems = MenuItem[];
