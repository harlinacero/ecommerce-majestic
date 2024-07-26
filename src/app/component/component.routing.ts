import { Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { ProdcutComponent } from './prodcut/prodcut.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'presentation',
				component: VideoComponent
			}, 
			{
				path: 'product',
				component: ProdcutComponent
			}
		]
	}
];
