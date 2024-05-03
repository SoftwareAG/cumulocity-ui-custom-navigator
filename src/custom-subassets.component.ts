import { Component, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IManagedObject, InventoryService } from "@c8y/client";
import { ActionControl, Column, Pagination } from "@c8y/ngx-components";
import { DeviceGridService } from "@c8y/ngx-components/device-grid";

@Component({
  selector: "custom-subsaates",
  templateUrl: "./custom-subassets.component.html",
})
export class CustomSubassetsComponent {
  constructor(
    private route: ActivatedRoute,
    private inventory: InventoryService,
    private deviceGridService: DeviceGridService
  ) {}
  @Input() refresh = new EventEmitter<any>();
  baseQuery: any;
  titleMapping: String = "Subassets";
  columns: Column[];
  actionControls: ActionControl[] = [];
  currentGroup: IManagedObject;
  currentGroupId: string;
  pagination: Pagination = {
    pageSize: 10,
    currentPage: 1,
  };

  async ngOnInit() {
    this.currentGroup = this.route.snapshot.parent.data.contextData;
    this.currentGroupId = this.currentGroup.id;
    this.setIncludedInGroupQuery();
    this.columns = this.deviceGridService.getDefaultColumns();
  }

  setIncludedInGroupQuery() {
    const includedInGroupQuery = { __bygroupid: this.currentGroupId };
    this.baseQuery = includedInGroupQuery;
  }
}
