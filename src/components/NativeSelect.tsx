import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Id
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'role',
            id: 'uncontrolled-native',
          }}
        >
          <option >EN</option>
          <option >ES</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}