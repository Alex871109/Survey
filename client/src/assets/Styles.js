const basicLetter = {
  alignItems: 'center',
  color: 'white',
  fontFamily: 'monospace',
};

const emailIcon = {
  fontSize: 50,
  display: { xs: 'flex' },
  alignItems: 'center',
  mr: 1,
};

const emailyBrand = {
  mr: 2,
  ...basicLetter,
  display: { xs: 'flex' },
  fontWeight: 700,
  letterSpacing: '.3rem',
  textDecoration: 'none',
  color: 'inherit',
};

const creditsLabel = {
  ...basicLetter,
  fontWeight: 700,
  color: 'inherit',
};

const completionBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const completionMessage = {
  ...basicLetter,
  fontWeight: 700,
  letterSpacing: '.3rem',
};

const dashboardContainerBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  maxWidth: '800px',
  margin: '0 auto',
};

const dashboardContainerTypography = {
  ...basicLetter,
  fontWeight: 700,
  letterSpacing: '.3rem',
  textDecoration: 'none',
  marginBottom: '8px',
};

const NotFoundContainerBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const NotFoundContainerTypography = {
  ...basicLetter,
  fontWeight: 700,
  letterSpacing: '.3rem',
  textDecoration: 'none',
  marginBottom: '8px',
};

const asideTitleTypography = {
  ...basicLetter,
  fontWeight: 700,
  letterSpacing: '.3rem',
};

const asideSubtitleTypography = {
  ...basicLetter,
  fontWeight: 300,
  letterSpacing: '.3rem',
};

const heroImageBox = {
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};
const heroTextBox = {
  position: 'absolute',
  top: '5%',
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Styles = {
  basicLetter,
  emailIcon,
  emailyBrand,
  creditsLabel,
  completionBox,
  completionMessage,
  dashboardContainerBox,
  dashboardContainerTypography,
  NotFoundContainerBox,
  NotFoundContainerTypography,
  asideTitleTypography,
  asideSubtitleTypography,
  heroImageBox,
  heroTextBox,
};

export default Styles;
