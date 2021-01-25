const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '767px',
  nolaptop: '1023px',
  laptop: '1024px',
  laptopS: '1270px',
  laptopL: '1440px',
  desktopS: '1441px',
  desktopL: '1750px',
  desktop: '2560px',
};

export const maxdevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  nolaptop: `(max-width: ${size.nolaptop})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const mindevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  nolaptop: `(min-width: ${size.nolaptop})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
