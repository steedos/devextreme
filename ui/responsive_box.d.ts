/**
* DevExtreme (ui/responsive_box.d.ts)
* Version: 18.2.10
* Build date: Mon Jul 29 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxResponsiveBox(): JQuery;
    dxResponsiveBox(options: "instance"): DevExpress.ui.dxResponsiveBox;
    dxResponsiveBox(options: string): any;
    dxResponsiveBox(options: string, ...params: any[]): any;
    dxResponsiveBox(options: DevExpress.ui.dxResponsiveBoxOptions): JQuery;
}
}
export default DevExpress.ui.dxResponsiveBox;
export type Options = DevExpress.ui.dxResponsiveBoxOptions;

/** @deprecated use Options instead */
export type IOptions = DevExpress.ui.dxResponsiveBoxOptions;