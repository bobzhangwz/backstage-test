import { Header } from '@backstage/core-components';
import { ClockConfig, HeaderWorldClock, HomePageToolkit, TemplateBackstageLogoIcon } from '@backstage/plugin-home';
import { Grid } from '@material-ui/core';
import React from 'react';

// Refer to: https://backstage.io/storybook/?path=/story/plugins-examples--plugin-with-data
export const HomePage = () => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const clockConfigs: ClockConfig[] = [
    {
      label: 'NYC',
      timeZone: 'America/New_York',
    },
    {
      label: 'UTC',
      timeZone: 'UTC',
    },
    {
      label: 'STO',
      timeZone: 'Europe/Stockholm',
    },
    {
      label: 'TYO',
      timeZone: 'Asia/Tokyo',
    },
  ];
  return (
    <>
    <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock
        clockConfigs={clockConfigs}
        customTimeFormat={timeFormat}
      />
    </Header>
    <Grid item xs={12} md={6}>
      <HomePageToolkit
        tools={Array(8).fill({
          url: '#',
          label: 'link',
          icon: <TemplateBackstageLogoIcon />,
        })}
      />
    </Grid>
    </>


  )
};