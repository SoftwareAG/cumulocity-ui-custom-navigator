import { gettext } from "@c8y/ngx-components";
import { AssetNode } from "@c8y/ngx-components/assets-navigator";

export class CustomAssetNode extends AssetNode {
    setLabel() {
      console.log("CustomAssetNode.setLabel was called:", this.config)
      this.label = 
        this.config.label ||
        (this.root && gettext('Groups')) ||
        `${this.mo.name} (${this.mo.type})` ||
        '--';
    }
  }