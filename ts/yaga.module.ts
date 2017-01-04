import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { TileLayerDirective } from './tile-layer.directive';
import { ImageOverlayDirective } from './image-overlay.directive';
import { PopupDirective } from './popup.directive';
import { TooltipDirective } from './tooltip.directive';
import { IconDirective } from './icon.directive';
import { DivIconDirective } from './div-icon.directive';
import { PolylineDirective } from './polyline.directive';
import { MarkerDirective } from './marker.directive';

@NgModule({
    declarations: [
        MapComponent,
        TileLayerDirective,
        ImageOverlayDirective,
        PopupDirective,
        TooltipDirective,
        IconDirective,
        DivIconDirective,
        PolylineDirective,
        MarkerDirective
    ],
    exports: [
        MapComponent,
        TileLayerDirective,
        ImageOverlayDirective,
        PopupDirective,
        TooltipDirective,
        IconDirective,
        DivIconDirective,
        PolylineDirective,
        MarkerDirective
    ]
})
export class YagaModule { }
