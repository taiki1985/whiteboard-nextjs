import * as React from 'react';
import jaLocale from 'date-fns/locale/ja';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';

const localeMap = {
  ja: jaLocale,
};

const maskMap = {
  ja: '____/__/__',
};

export default function LocalizedDatePicker() {
  const [locale, setLocale] = React.useState<keyof typeof maskMap>('ja');
  const [value, setValue] = React.useState<Date | null>(new Date());

  const selectLocale = (newLocale: any) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
      <div>
        {/* <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
          {Object.keys(localeMap).map((localeItem) => (
            <ToggleButton
              key={localeItem}
              value={localeItem}
              onClick={() => selectLocale(localeItem)}
            >
              {localeItem}
            </ToggleButton>
          ))}
        </ToggleButtonGroup> */}
        <DatePicker
          mask={maskMap[locale]}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
