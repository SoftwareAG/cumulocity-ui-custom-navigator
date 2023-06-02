import { Injectable} from "@angular/core";
import { OptionsService, HeaderService, NavigatorService, HumanizeAppNamePipe } from "@c8y/ngx-components";

@Injectable({ providedIn: 'root' })
export class CustomHeaderService extends HeaderService {
  constructor(navigatorService: NavigatorService, options: OptionsService, humanizeAppName: HumanizeAppNamePipe) {
    super(
      navigatorService,
      options,
      humanizeAppName
    );
    console.log("CustomHeaderService was called");
  }

  changePageTitle(newTitle?: string): void {
    //newTitle = newTitle + "aaa";
    //super.changeTitle(newTitle + "aaa");
    console.log("CustomHeaderService.changePageTitle was called:", newTitle);
  }

}