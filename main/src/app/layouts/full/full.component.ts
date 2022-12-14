import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { MenuItemsMedico } from '../../shared/menu-items/menu-items-medico';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { LoginComponent } from '../../authentication/login/login.component';
import { MedicoLoginComponent } from '../../authentication/medico-login/medico-login.component';

/** @title Responsive sidenav */
@Component({
	selector: 'app-full-layout',
	templateUrl: 'full.component.html',
	styleUrls: []
})
export class FullComponent implements OnDestroy {

	mobileQuery: MediaQueryList;

	dir = 'ltr';
	dark = false;
	minisidebar = false;
	boxed = false;
	horizontal = false;

	//recuperar role del los logins

	green = false;
	blue = false;
	danger = false;
	showHide = false;
	url = '';
	sidebarOpened = false;
	status = false;

	public showSearch = false;
	public config: PerfectScrollbarConfigInterface = {};
	// tslint:disable-next-line - Disables all
	private _mobileQueryListener: () => void;

	constructor(
		public router: Router,
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher,
		public menuItems: MenuItems,
		public menuItemsMedico: MenuItemsMedico
	) {
		this.mobileQuery = media.matchMedia('(min-width: 1023px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		// tslint:disable-next-line: deprecation
		this.mobileQuery.addListener(this._mobileQueryListener);
		// this is for dark theme
		// const body = document.getElementsByTagName('body')[0];
		// body.classList.toggle('dark');
		this.dark = false;

	}

	ngOnDestroy(): void {
		// tslint:disable-next-line: deprecation
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}


	ngOnInit() {
		//const body = document.getElementsByTagName('body')[0];
		// body.classList.add('dark');

	}

	clickEvent(): void {
		this.status = !this.status;
	}

	darkClick() {
		// const body = document.getElementsByTagName('body')[0];
		// this.dark = this.dark;
		const body = document.getElementsByTagName('body')[0];
		body.classList.toggle('dark');
		// if (this.dark)
		// else
		// 	body.classList.remove('dark');
		// this.dark = this.dark;
		// body.classList.toggle('dark');
		// this.dark = this.dark;
	}

	/* private expresion(menuItems: MenuItems, menuItemsMedico: MenuItemsMedico): boolean {
		if (route = ['dashboards/dashboard1']) {
			return this.role = true;
		}
		else if (route = ['dashboards/dashboard2']) {
			{
				return this.role = false;
			}
		} */


	/* role(): boolean {
		if (role == 'paciente') {
			return this.role = true;
		}
		else {
			return this.role = false;
		}
	} */

}




