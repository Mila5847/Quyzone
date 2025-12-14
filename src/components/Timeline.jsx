import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/components/_timeline.scss';

function LeftLabel({ lines }) {
  return (
    <Box
      className="timeline-left-label"
      sx={{
        display: "flex",
        flexDirection: 'column',
        alignItems: { md: 'flex-end', xs: 'flex-start'},
        minWidth: { md: '10rem', xs: '5rem'},
        lineHeight: 1.05,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'common.white',
        pr: { xs: '0rem', md: '1rem'},
        ml: {xs: '0.5rem'}
      }}
    >
      {lines.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </Box>
  );
}

const dotSx = {
  bgcolor: 'common.white',
  boxShadow: 'none',
  width: 10,
  height: 10,
};

const connectorBaseSx = {
  bgcolor: 'common.white',
  width: 3,
};

const contentTextSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '54rem' },
};

function TimeLine() {
  const items = [
    {
      label: ['2022'],
      title: 'Laying the Foundation🌱',
      text: 'Back then, this project was just a budding graphic novel. I started with the story and let lore drive my designs.',
      img: '/images/decorative/timeline-2022.jpg',
    },
    {
      label: ['2024', 'SUMMER'],
      title: 'Pioneer-1🚀',
      text: 'I first exposed the concept to the world by submitting it to an international contest. The Mech Bust was already alive in my mind, featuring a head I designed to morph into an ice-shipping craft for the competition\'s theme.',
    },
    {
      label: ['2025', 'SUMMER'],
      title: 'Pioneer-2🔧',
      text: 'Didn’t win last year? All the more reason to go at it again. I revisited my original model, but this time I wasn’t starting from scratch. I rebuilt it and pushed the modularity aspect, designed for customization.',
    },
    {
      label: ['2025', 'FALL'],
      title: 'New Goals!🎯',
      text: 'Time to set some goals. Can’t always rely on contests. I officially decide to launch an MVP and limit it to the mech’s head.',
    },
    {
      label: ['2026', 'EARLY'],
      title: 'Pioneer-3 The Mech Head🔥',
      text: 'MVP is Live! The base kit is fully designed and ready for you to download. This is our starting point, friendly to upgrades. A real standalone product.',
    },
    {
      label: ['SOON', 'TBD!'],
      title: 'Next Step📈',
      text: 'Community building. Let’s get the ball rolling … stay tuned!',
    },
  ];

  return (
    <Box sx={{ maxWidth: 960, width: '100%', textAlign: 'left' }}>
      
      <div className="mechabust-section">
        <div className="mechabust-content">
          <div className="mechabust-text">
            <h2>Me Quy and the Mechabust</h2>
            <q>To go fast, run alone. To go far, walk together.</q>

            <p className="text-indent">
              Like many, I went through a period of “professional reflection” in 2022...
            </p>

            <p className="text-indent">
              This kit was born directly out of my biggest passions...
            </p>
          </div>

          <img
            src="/images/decorative/me.png"
            alt="mascot"
            className="mechabust-image"
          />
        </div>
      </div>

      <Timeline
        className="timeline"
        position="right"
        sx={{
          pl: 0,
          ml: 0,
          '& .MuiTimelineItem-root:before': {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {items.map((item, idx) => (
          <TimelineItem key={idx}>
            <LeftLabel lines={item.label} />

            <TimelineSeparator>
              <TimelineDot sx={dotSx} />
              <TimelineConnector
                sx={{
                  ...connectorBaseSx,
                  flexGrow: 1,
                  visibility: idx === items.length - 1 ? 'hidden' : 'visible',
                }}
              />
            </TimelineSeparator>

            <TimelineContent sx={{ py: 1, px: 2 }}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
                {item.title}
              </Typography>

              <Typography sx={contentTextSx}>
                {item.text}
                {item.img && (
                  <div className="timeline-row">
                    <div className="timeline-column">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="timeline-img"
                      />
                    </div>
                  </div>
                )}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default TimeLine;
