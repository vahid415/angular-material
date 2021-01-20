import { MenuItems } from './../infra/app-infra/common/types/types';
// import { MenuItems } from '@app/infra';

export default [{
  code: 100,
  title: 'Subsystem1',
  icon: 'keypad-outline',
  children: [
    {
      code: 101,
      title: 'datePicker',
      link: 'date-picker',
    },
    {
      code: 102,
      title: 'virtualScroll',
      link: 'virtual-scroll',
    },
  ],
}] as MenuItems;
