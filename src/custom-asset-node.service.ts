import { Injectable, Optional, Inject } from "@angular/core";
import { InventoryService, UserService } from "@c8y/client";
import { ModalService, AlertService, BreadcrumbService, AppStateService, OptionsService } from "@c8y/ngx-components";
import { ApiService } from "@c8y/ngx-components/api";
import { AssetNodeService, ASSET_NAVIGATOR_CONFIG, AssetNavigatorConfig, DeviceGroupService, AssetNode, DynamicGroupNode } from "@c8y/ngx-components/assets-navigator";
import { CustomAssetNode } from "./custom-asset-node";

@Injectable({ providedIn: 'root' })
export class CustomAssetNodeService extends AssetNodeService {
  constructor(
    public inventory: InventoryService,
    public apiService: ApiService,
    public modal: ModalService,
    public alert: AlertService,
    protected breadcrumbService: BreadcrumbService,
    protected user: UserService,
    protected appState: AppStateService,
    protected optionsService: OptionsService,
    @Optional() @Inject(ASSET_NAVIGATOR_CONFIG) public moduleConfig: AssetNavigatorConfig,
    protected deviceGroupService: DeviceGroupService
  ) {
    super(
      inventory,
      apiService,
      modal,
      alert,
      breadcrumbService,
      user,
      appState,
      optionsService,
      moduleConfig || {},
      deviceGroupService
    );
    if (!this.moduleConfig) {
      console.log("CustomAssetNodeService was called:", this.moduleConfig)
      this.moduleConfig = {};
    }
  }

  createAssetNode(config: Partial<AssetNode>): AssetNode {
    console.log("CustomAssetNodeService.createAssetNode was called:", config)

    return new CustomAssetNode(this, config);
  }

}