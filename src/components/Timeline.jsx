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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center', // center label vertically vs dot
        height: '100%',
        lineHeight: 1.05,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'common.white',
        paddingRight: '1rem',
      }}
    >
      {lines.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </Box>
  );
}

function TimeLine() {
  return (
    <Box
      sx={{
        maxWidth: 760,
        width: '100%',
        textAlign: 'left',
      }}
    >
      <div className="mechabust-section">
        <div className="mechabust-content">
          <div className="mechabust-text">
            <h2>Me Quy and the Mechabust</h2>
            <q>To go fast, run alone. To go far, walk together.</q>

            <p className="text-indent">
              Like many, I went through a period of “professional reflection” in 2022. Bored out of
              my mind, I grabbed the opportunity to begin work on the Mechabust project. I mean ...
              how cool would it be ... to have in my room ... a standing bust ... of a mech ...
              geared in samurai-style armor?!?🤩 I mean COME ON!
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

          <img src="/images/decorative/me.png" alt="mascot" className="mechabust-image" />
        </div>
      </div>

      <Timeline className="timeline" position="right" sx={{ pl: 0, ml: 0 }}>
        {/* 2022 */}
        <TimelineItem>
          <LeftLabel lines={['2022', 'SOMEWHERE']} />

          <TimelineSeparator>
            {/* top connector: no growth, hidden (first item, no line above) */}
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 0,
                visibility: 'hidden',
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            {/* bottom connector grows to fill */}
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '0px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Laying the Foundation🌱
            </Typography>
            <Typography component="div" sx={{ width: { xs: '30rem' } }}>
              Back then, it was a birthing graphic novel. All I knew was I needed a universe, a lore
              for my designs to take shape.
              <div className="timeline-row">
                <div className="timeline-column">
                  <img width={300} src="/images/decorative/timeline-2022.jpg" alt="comic frame" />
                </div>
              </div>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2024 */}
        <TimelineItem>
          <LeftLabel lines={['2024', 'SUMMER']} />

          <TimelineSeparator>
            {/* small fixed top connector, no grow -> dot stays near top */}
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '0px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-1🚀
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
              My first public attempt . I submitted it to an international contest. The concept of
              the Mech Bust was already alive in my mind. It had a head I could morph into an
              ice-shipping craft for the contest theme.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2025 Summer */}
        <TimelineItem>
          <LeftLabel lines={['2025', 'SUMMER']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '0px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-2🔧
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
              Didn’t win last year? All the more reason to go at it again. I revisited my original
              model, but this time I wasn’t starting from scratch. I rebuilt it to be far more
              modular designed for customization and community remixing.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2025 Fall */}
        <TimelineItem>
          <LeftLabel lines={['2025', 'FALL']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 0,
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '0px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              New Goals!🎯
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
              Time to be set some goals. Can’t always rely on contests. I officially decide to
              launch an MVP and limit it to mech’s head.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2026 Early */}
        <TimelineItem>
          <LeftLabel lines={['2026', 'EARLY']} />

          <TimelineSeparator>
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 12,
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Pioneer-3 The Mech Head🔥
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
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
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 0,
                height: 12,
              }}
            />
            <TimelineDot
              sx={{
                bgcolor: 'common.white',
                boxShadow: 'none',
                width: 10,
                height: 10,
              }}
            />
            {/* last item: no connector below */}
            <TimelineConnector
              sx={{
                bgcolor: 'common.white',
                width: 3,
                flexGrow: 1,
                visibility: 'hidden',
              }}
            />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Next Step📈
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
              Community building. Lets get the ball rolling … stay tuned guys!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default TimeLine;
