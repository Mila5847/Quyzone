import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LeftLabel({ lines }) {
  return (
    <Box
      sx={{
        m: 'auto 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        lineHeight: 1.05,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'common.white',
      }}
    >
      {lines.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </Box>
  );
}

function WhiteSeparator() {
  return (
    <TimelineSeparator>
      <TimelineConnector sx={{ bgcolor: 'common.white', width: 3 }} />
      <TimelineDot sx={{ bgcolor: 'common.white', boxShadow: 'none', width: 10, height: 10 }} />
      <TimelineConnector sx={{ bgcolor: 'common.white', width: 3 }} />
    </TimelineSeparator>
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
      <h2>  Me Quy and the Mechabust</h2>
      <q>To go fast, run alone. To go far, walk together.</q>
      <p>The Mechabust project started. It was a downtime for me professionally—a perfect time to reflect on how to change the world. I&apos;d like to call
        myself an artist: besides my passion for games and animation, I just love to create things. I love mechs, I love 3D printing—so this whole thing was a
        no-brainer. </p>

      <Timeline position="right" sx={{ pl: 0, ml: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent sx={{ pr: 2 }}>
            <LeftLabel lines={['2022']} />
          </TimelineOppositeContent>

          <WhiteSeparator />


          {/* 2022 */}
          <TimelineContent sx={{ py: '0px', px: 2 }}>

            <Typography sx={{ width: { xs: '30rem' } }}>
              I began designing, testing, and iterating slowly with whatever
              resources I could get my hands on.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ pr: 2 }}>
            <LeftLabel lines={['2022']} />
          </TimelineOppositeContent>

          <WhiteSeparator />

          {/* 2022 */}
          <TimelineContent sx={{ py: '0px', px: 2 }}>

            <Typography sx={{ width: { xs: '30rem' } }}>
              Pioneer-1
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ pr: 2 }}>
            <LeftLabel lines={['2022']} />
          </TimelineOppositeContent>

          <WhiteSeparator />

          {/* 2022 */}
          <TimelineContent sx={{ py: '0px', px: 2 }}>

            <Typography sx={{ width: { xs: '30rem' } }}>
              Pioneer-2
            </Typography>
          </TimelineContent>
        </TimelineItem>



        {/* NOW 2025 */}
        <TimelineItem>
          <TimelineOppositeContent sx={{ pr: 2 }}>
            <LeftLabel lines={['Now', '2025']} />
          </TimelineOppositeContent>

          <WhiteSeparator />

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Today
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>
              The Mech Head, Pioneer-3 MVP is Live! The base kit is fully designed and ready for you
              to download. This is our starting point.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Soon */}
        <TimelineItem>
          <TimelineOppositeContent sx={{ pr: 2 }}>
            <LeftLabel lines={['Soon']} />
          </TimelineOppositeContent>

          <WhiteSeparator />

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 0.5 }}>
              Next Step
            </Typography>
            <Typography sx={{ width: { xs: '30rem' } }}>Community building… stay tuned guys!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default TimeLine;
