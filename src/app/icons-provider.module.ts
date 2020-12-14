import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  GatewayOutline,
  WifiOutline,
  SafetyOutline,
  FallOutline,
  EyeOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  GatewayOutline,
  WifiOutline,
  SafetyOutline,
  FallOutline,
  EyeOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
