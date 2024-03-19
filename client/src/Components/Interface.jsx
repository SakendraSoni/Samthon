import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { useConfigurator } from '../Context/Configurator';
export const Interface = () => {
  const { itemNo, setItemNo, diamondsColor, setDiamondsColor, ringMaterial, setRingMaterial } = useConfigurator();
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
        p={3}
      >
        <Stack spacing={3}>
          <Box className="glass" p={3}>
            <FormControl>
              <FormLabel>Material</FormLabel>
              <RadioGroup value={ringMaterial} onChange={(e) => setRingMaterial(parseInt(e.target.value))}>
                <FormControlLabel value={0} control={<Radio />} label="Gold & Silver" />
                <FormControlLabel value={1} control={<Radio />} label="Gold" />
                <FormControlLabel value={2} control={<Radio />} label="Silver" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className="glass" p={3}>
            <FormControl>
              <FormLabel>Diamond Color</FormLabel>
              <RadioGroup value={diamondsColor} onChange={(e) => setDiamondsColor(e.target.value)}>
                <FormControlLabel value={'#CFECEC'} control={<Radio />} label="White" />
                <FormControlLabel value={'#FF474C'} control={<Radio />} label="Red" />
                <FormControlLabel value={'#00FFFF'} control={<Radio />} label="Aqua" />
                <FormControlLabel value={'#A020F0'} control={<Radio />} label="Purple" />
                <FormControlLabel value={'#efe75b'} control={<Radio />} label="Yellow" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Button variant="contained">Done</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
        p={3}
      >
        <Typography variant="caption" p={3}>
          3D VIEW RING CONFIGURATION
        </Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Material</FormLabel>
            <RadioGroup value={itemNo} onChange={(e) => setItemNo(parseInt(e.target.value))}>
              <FormControlLabel value={0} control={<Radio />} label="Wedding Ring" />
              <FormControlLabel value={1} control={<Radio />} label="Engagement Ring" />
              {/* <FormControlLabel value={2} control={<Radio />} label="Silver" /> */}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
