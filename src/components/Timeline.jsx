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
        display: { xs: 'contents', sm: 'flex' }, // 👈 mobile vs desktop
        flexDirection: 'column',
        alignItems: 'flex-end',
        minWidth: '10rem',
        lineHeight: 1.05,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'common.white',
        pr: '1rem',
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
  maxWidth: '54rem', // 🔥 controls how long the text line can be
};

function TimeLine() {
  return (
    <Box
      sx={{
        maxWidth: 960,
        width: '100%',
        textAlign: 'left',
      }}
    >
      {/* Intro block */}
      <div className="mechabust-section">
        <div className="mechabust-content">
          <div className="mechabust-text">
            <h2>Me Quy and the Mechabust</h2>
            <q>To go fast, run alone. To go far, walk together.</q>

            <p className="text-indent">
              Like many, I went through a period of professional reflection during the pandemic. Looking for something to pour myself into, I seized the opportunity to begin work on the Mechabust project. Because honestly... how cool would it be to have a standing mech bust geared in samurai-style armor right in your room?🤩 I mean, COME ON!
            </p>

            <p className="text-indent">
              This kit was born directly out of my biggest passions: storytelling, drawing, sculpting, mechs, 3D printing, and design. The stars aligned—time, energy, and urgency pushed this dream past the starting line. I realized I might never have this chance again to design my very own customizable model kit. From then on, I simply trusted the iterative creative process to bring it to life.
            </p>
            <p className="text-indent">
              As the full bust is a massive undertaking, I am launching with the head unit first. Here is the twist: when flipped upside down, the head transforms into a standalone mini-submarine.
            </p>
          </div>

          <img src="/images/decorative/me.png" alt="mascot" className="mechabust-image" />
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
        {/* 2022 */}
        <TimelineItem>
          <LeftLabel lines={['2022']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 0,
                visibility: 'hidden',
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 0, px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Laying the Foundation🌱
            </Typography>
            <Typography component="div" sx={contentTextSx}>
              Back then, this project was just a budding graphic novel. I started with the story and let lore drive my designs.
              <div className="timeline-row">
                <div className="timeline-column">
                  <img
                    width={300}
                    src="/images/decorative/timeline-2022.jpg"
                    alt="comic frame"
                  />
                </div>
              </div>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2024 Summer */}
        <TimelineItem>
          <LeftLabel lines={['2024', 'SUMMER']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 0, px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-1🚀
            </Typography>
            <Typography sx={contentTextSx}>
              I first exposed the concept to the world by submitting it to an international contest. The Mech Bust was already alive in my mind, featuring a head I designed to morph into an ice-shipping craft for the competition's theme.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2025 Summer */}
        <TimelineItem>
          <LeftLabel lines={['2025', 'SUMMER']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 0, px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-2🔧
            </Typography>
            <Typography sx={contentTextSx}>
              Didn’t win last year? All the more reason to go at it again. I revisited my original
              model, but this time I wasn’t starting from scratch. I rebuilt it and pushed the modularity aspect, designed for customization.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2025 Fall */}
        <TimelineItem>
          <LeftLabel lines={['2025', 'FALL']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 0, px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              New Goals!🎯
            </Typography>
            <Typography sx={contentTextSx}>
              Time to set some goals. Can’t always rely on contests. I officially decide to launch
              an MVP and limit it to the mech’s head.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2026 Early */}
        <TimelineItem>
          <LeftLabel lines={['2026', 'EARLY']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 12,
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-3 The Mech Head🔥
            </Typography>
            <Typography sx={contentTextSx}>
              MVP is Live! The base kit is fully designed and ready for you to download. This is our
              starting point, friendly to upgrades. A real standalone product.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Soon */}
        <TimelineItem>
          <LeftLabel lines={['SOON', 'TBD!']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 0,
                height: 12,
              }}
            />
            <TimelineDot sx={dotSx} />
            <TimelineConnector
              sx={{
                ...connectorBaseSx,
                flexGrow: 1,
                visibility: 'hidden',
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Next Step📈
            </Typography>
            <Typography sx={contentTextSx}>
              Community building. Let’s get the ball rolling … stay tuned!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default TimeLine;
