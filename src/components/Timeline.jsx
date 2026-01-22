import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Parallax } from 'react-scroll-parallax';
import '../styles/components/_timeline.scss';

const leftLabelSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { md: 'flex-end', xs: 'flex-end' },
  minWidth: { md: '10rem', xs: '5rem' },
  lineHeight: 1.05,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'common.white',
  pr: { xs: 0, md: '1rem' },
  ml: { xs: '0.5rem' },
  mr: {xs: '5px'}
};

const timelineSx = {
  pl: 0,
  ml: 0,
  '& .MuiTimelineItem-root:before': {
    flex: 0,
    padding: 0,
  },
};

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
  maxWidth: '351px',
};

const titleSx = { fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 };

function LeftLabel({ lines, isFirstItem }) {
  return (
    <Box className="timeline-left-label" sx={leftLabelSx}>
      {lines.map((t, i) => (
        <Box
          key={`${t}-${i}`}
          component="span"
          sx={{
            mt: isFirstItem && i === 0 ? '0.5rem' : 0,
            mr: lines[i - 1] === 'FALL' ? '-3px' : 0,
          }}
        >
          {t}
        </Box>
      ))}
    </Box>
  );
}

function TimelineImage({ src, alt }) {
  return (
    <div className="timeline-row">
      <div className="timeline-column">
        <img src={src} alt={alt} className="timeline-img" />
      </div>
    </div>
  );
}

const ITEMS = [
  {
    label: ['2022'],
    title: 'Laying the Foundation🌱',
    text: 'Back then, this project was just a budding graphic novel. I started with the story and let lore drive my designs.',
    img: '/images/decorative/timeline-0-0.jpg',
  },
  {
    label: ['2024', 'SUMMER'],
    title: 'Pioneer-1🚀',
    text: "I first exposed the concept to the world by submitting it to an international contest. The Mech Bust was already alive in my mind, featuring a head I designed to morph into an ice-shipping craft for the competition's theme.",
    img: '/images/decorative/timeline-1-1.jpg',
  },
  {
    label: ['2025', 'SUMMER'],
    title: 'Pioneer-2🔧',
    text: 'Didn’t win last year? All the more reason to go at it again. I revisited my original model, but this time I wasn’t starting from scratch. I rebuilt it and pushed the modularity aspect, designed for customization.',
    img: '/images/decorative/timeline-2-1.jpg',
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

export default function TimeLine() {
  return (
    <Box>
      <div className="mechabust-section">
        <div className="mechabust-content">
          <div className="mechabust-text">
            <h2>Me Quy and Mechabust</h2>
            <q>To go fast, run alone. To go far, walk together.</q>

            <p className="text-indent">
              Like many, I went through a period of profound “professional reflection” in 2022.
              Bored out of my mind, I grabbed the opportunity to begin work on the Mechabust
              project. I mean ... how cool would it be ... to have in my room ... a standing bust
              ... of a mech ... geared in samurai-style armor?!?🤩 I mean COME ON!
            </p>

            <p className="text-indent">
              This kit was born directly out of my biggest passions: storytelling, drawing,
              sculpting, mechs, 3D printing, and design. Many factors lined up to push the dream
              past the starting line: time, energy, and, most importantly, the urgency. I might
              never have this chance again to design my very own customizable model kit of a mech
              bust. From then on, I simply trusted the iterative creative process to bring it to
              life.
            </p>
          </div>

          <Parallax speed={0}>
            <img src="/images/decorative/me.png" alt="mascot" className="mechabust-image" />
          </Parallax>
        </div>
      </div>

      <Timeline className="timeline" position="right" sx={timelineSx}>
        {ITEMS.map((item, idx) => {
          const isLast = idx === ITEMS.length - 1;

          return (
            <TimelineItem key={`${item.title}-${idx}`}>
              <LeftLabel lines={item.label} isFirstItem={idx === 0} />

              <TimelineSeparator>
                <TimelineDot sx={dotSx} />
                <TimelineConnector
                  sx={{
                    ...connectorBaseSx,
                    flexGrow: 1,
                    visibility: isLast ? 'hidden' : 'visible',
                  }}
                />
              </TimelineSeparator>

              <TimelineContent sx={{ py: 1, px: 2 }}>
                <Typography variant="h6" sx={titleSx}>
                  {item.title}
                </Typography>

                <Typography sx={contentTextSx}>
                  {item.text}
                  {item.img ? <TimelineImage src={item.img} alt={item.title} /> : null}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}
