import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
import {
  CoreModule,
  DataGridModule,
  HeaderService,
  RouterModule,
  ViewContext,
  hookRoute,
} from "@c8y/ngx-components";
import {
  DashboardUpgradeModule,
  UpgradeModule,
  HybridAppModule,
  UPGRADE_ROUTES,
} from "@c8y/ngx-components/upgrade";
import { SubAssetsModule } from "@c8y/ngx-components/sub-assets";
import { ChildDevicesModule } from "@c8y/ngx-components/child-devices";
import {
  CockpitDashboardModule,
  ReportDashboardModule,
} from "@c8y/ngx-components/context-dashboard";
import { ReportsModule } from "@c8y/ngx-components/reports";
import { SensorPhoneModule } from "@c8y/ngx-components/sensor-phone";
import { BinaryFileDownloadModule } from "@c8y/ngx-components/binary-file-download";
import { SearchModule } from "@c8y/ngx-components/search";
import {
  AssetNodeService,
  AssetsNavigatorModule,
} from "@c8y/ngx-components/assets-navigator";
import { CockpitConfigModule } from "@c8y/ngx-components/cockpit-config";
import { DatapointLibraryModule } from "@c8y/ngx-components/datapoint-library";
import { WidgetsModule } from "@c8y/ngx-components/widgets";
import { CustomAssetNodeService } from "./src/custom-asset-node.service";
import { CustomHeaderService } from "./src/custom-header.service";
import { CustomSubassetsComponent } from "./src/custom-subassets.component";
import { DeviceGridModule } from "@c8y/ngx-components/device-grid";

@NgModule({
  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot(
      [
        {
          path: "subassets",
          component: CustomSubassetsComponent,
        },
        ...UPGRADE_ROUTES,
      ],
      {
        enableTracing: false,
        useHash: true,
      }
    ),
    CoreModule.forRoot(),
    ReportsModule,
    NgUpgradeModule,
    AssetsNavigatorModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
    SearchModule,
    SubAssetsModule,
    ChildDevicesModule,
    CockpitConfigModule,
    DatapointLibraryModule.forRoot(),
    DeviceGridModule,
    WidgetsModule,
  ],
  declarations:[CustomSubassetsComponent],
  providers: [
    { provide: AssetNodeService, useClass: CustomAssetNodeService },
    hookRoute({
      context: ViewContext.Group,
      path: "subassets",
      component: CustomSubassetsComponent,
      priority: 10000,
      label: "Custom Subassets",
    }),
    // { provide: HeaderService, useClass: CustomHeaderService },
  ],
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
