export enum DeviceType {
  pc = 'pc',
  mobile = 'mobile',
}

export const themes: { [key in DeviceType]: { type: DeviceType } } = {
  [DeviceType.pc]: { type: DeviceType.pc },
  [DeviceType.mobile]: { type: DeviceType.mobile },
};

export const media: { [key in DeviceType]: string } = {
  [DeviceType.mobile]: `
    @media only screen and (max-width: 767px)
  `,
  [DeviceType.pc]: `
    @media only screen and (min-width: 768px)
  `,
};
