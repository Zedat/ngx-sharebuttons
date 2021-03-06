import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { ShareDirective } from './share-button.directive';
import { SHARE_BUTTONS_CONFIG, ShareButtonsConfig } from './share.models';

@NgModule({
  imports: [
    PlatformModule
  ],
  declarations: [
    ShareDirective
  ],
  exports: [
    ShareDirective
  ]
})
export class ShareModule {
  static withConfig(config?: ShareButtonsConfig): ModuleWithProviders<ShareModule> {
    return {
      ngModule: ShareModule,
      providers: [
        {provide: SHARE_BUTTONS_CONFIG, useValue: config}
      ]
    };
  }
}
