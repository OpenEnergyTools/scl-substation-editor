import { OscdActionIcon } from '@openenergytools/oscd-action-icon';
import { OscdActionPane } from '@openenergytools/oscd-action-pane';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon';
import { MdFilledIconButton } from '@scopedelement/material-web/iconbutton/MdFilledIconButton';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem';

if (!window.customElements.get('oscd-action-pane'))
  window.customElements.define('oscd-action-pane', OscdActionPane);

if (!window.customElements.get('oscd-action-icon'))
  window.customElements.define('oscd-action-icon', OscdActionIcon);

if (!window.customElements.get('md-icon'))
  window.customElements.define('md-icon', MdIcon);

if (!window.customElements.get('md-icon-button'))
  window.customElements.define('md-icon-button', MdIconButton);

if (!window.customElements.get('md-menu'))
  window.customElements.define('md-menu', MdMenu);

if (!window.customElements.get('md-menu-item'))
  window.customElements.define('md-menu-item', MdMenuItem);

if (!window.customElements.get('md-filled-icon-button'))
  window.customElements.define('md-filled-icon-button', MdFilledIconButton);

export function editActionable(pane: HTMLElement): HTMLElement | null {
  return pane.querySelector('abbr[title="Edit"] > md-icon-button');
}

export function addActionable(pane: HTMLElement): HTMLElement[] {
  return Array.from(
    pane.querySelectorAll(':scope > abbr > span > md-menu > md-menu-item')
  );
}

export function removeActionable(pane: HTMLElement): HTMLElement | null {
  return pane.querySelector('abbr[title="Remove"] > md-icon-button');
}
