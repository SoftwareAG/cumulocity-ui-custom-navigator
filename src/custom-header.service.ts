import { Injectable} from "@angular/core";
import { OptionsService, HeaderService, NavigatorService, HumanizeAppNamePipe, DrawerService } from "@c8y/ngx-components";

@Injectable({ providedIn: 'root' })
export class CustomHeaderService extends HeaderService {
  constructor(options: OptionsService, humanizeAppName: HumanizeAppNamePipe, drawerService: DrawerService) {
    super(
      options,
      humanizeAppName,
      drawerService
    );
    console.log("CustomHeaderService was called");
  }

  changePageTitle(newTitle?: string): void {
    //newTitle = newTitle + "aaa";
    //super.changeTitle(newTitle + "aaa");
    console.log("CustomHeaderService.changePageTitle was called:", newTitle);
  }

}