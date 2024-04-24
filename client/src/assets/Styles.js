const basicLetter = {
  alignItems: 'center',
  color: '#1e88e5',
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

const heroBox = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '110vh',
  display: 'flex', //
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
  heroBox,
};

export default Styles;
