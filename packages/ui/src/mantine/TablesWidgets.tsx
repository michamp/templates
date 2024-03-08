"use client";

import { AppShell, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MenuBar } from "@repo/ui/MenuBar";
import { DemoDonutChart } from "@repo/ui/DemoDonutChart";
import { DemoAreaChart } from "@repo/ui/DemoAreaChart";
import { Grid, Skeleton, Container } from '@mantine/core';

import '@mantine/charts/styles.css';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';

import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconPaw,
  IconMapSearch,
  IconKarate,
  
  IconLayoutDashboard,
  IconForms, 
  IconTable,
  IconChartDots2,
  IconCalendarMonth,
  IconFileInfo,
  IconAppWindow,
  IconUsersGroup
} from '@tabler/icons-react';
import classes from './DashWidgets.module.css';

import { useMantineColorScheme, Button, Group } from '@mantine/core';

import { Stepper} from '@mantine/core';

import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

import { Table,SimpleGrid, Image} from '@mantine/core';

export function TablesWidgets() {
 
  const iconStyle = { width: rem(12), height: rem(12) };
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));
  
  
  const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));	
  
  const mainContainer = (
  <Container my="md">
      <Grid grow justify="flex-start" align="stretch">
	      <Grid.Col span={{ base: 12, xs: 8 }}>
			<h1>Color Scheme</h1>
			<Group>
		      		<Button onClick={() => setColorScheme('light')}>Light</Button>
		      		<Button onClick={() => setColorScheme('dark')}>Dark</Button>
		      		<Button onClick={() => setColorScheme('auto')}>Auto</Button>
		      		<Button onClick={clearColorScheme}>Clear</Button>
	    		</Group>
	    	</Grid.Col>
		<Grid.Col span={{ base: 12, xs: 8}}>
			<h1>Tabs</h1>
			<Tabs defaultValue="gallery">
			      <Tabs.List>
				<Tabs.Tab value="gallery" leftSection={<IconKarate style={iconStyle} />}>
				  Reptile
				</Tabs.Tab>
				<Tabs.Tab value="pounce" leftSection={<IconPaw style={iconStyle} />}>
				  Big Cat
				</Tabs.Tab>
				<Tabs.Tab value="city" leftSection={<IconMapSearch style={iconStyle} />}>
				  City
				</Tabs.Tab>
			      </Tabs.List>

			      <Tabs.Panel value="gallery">
				Reptile Gallery
				<Image
				      radius="md"
				      h={200}
      				      w="auto"
				      src="/stealth.jpg"
				    />
			      </Tabs.Panel>

			      <Tabs.Panel value="pounce">
				Big Cat Gallery
				<Image
				      radius="md"
				      h={200}
      				      w="auto"
				      src="/pounce.jpg"
				    />
			      </Tabs.Panel>

			      <Tabs.Panel value="city">
				City Gallery
				
				    
				    <SimpleGrid cols={3}>
				      <div>
				      	<Image
					      radius="md"
					      h={200}
	      				      w="auto"
					      src="/0dark30.jpg"
					/>
				      </div>
				      <div>
				      	<Image
					      radius="md"
					      h={250}
	      				      w="auto"
					      src="/aleksandar-pasaric.jpg"
					/>
				      </div>
				      <div>
				      	<Image
					      radius="md"
					      h={250}
	      				      w="auto"
					      src="/david-skyrius.jpg"
					/>
				      </div>
				      
				      
				    </SimpleGrid>
			      </Tabs.Panel>
		    	</Tabs>
	    	</Grid.Col>
		<Grid.Col span={{ base: 12, xs: 8 }}>
		 	<h1>Donut Chart</h1>
			<DemoDonutChart/>
		</Grid.Col>
		
		<Grid.Col span={{ base: 12, xs: 4 }}>
		       	<h1>Guide Stepper</h1>
			<Stepper active={activeStep} onStepClick={setActiveStep}>
			<Stepper.Step label="First step" description="Create an account">
			  Step 1 content: Create an account
			</Stepper.Step>
			<Stepper.Step label="Second step" description="Verify email">
			  Step 2 content: Verify email
			</Stepper.Step>
			<Stepper.Step label="Third step" description="Verify mobile">
			  Step 3 content: Verify mobile number
			</Stepper.Step>
			<Stepper.Step label="Final step" description="Get full access">
			  Step 4 content: Get full access
			</Stepper.Step>
			<Stepper.Completed>
			  Completed, click back button to get to previous step
			</Stepper.Completed>
		      </Stepper>

		      <Group justify="center" mt="xl">
			<Button variant="default" onClick={prevStep}>Back</Button>
			<Button onClick={nextStep}>Next step</Button>
		      </Group>
		</Grid.Col>
		<Grid.Col span={{ base: 12, xs: 8 }}>
			<h1>Area Chart</h1>
			<DemoAreaChart/>
		</Grid.Col>
		
		<Grid.Col span={{ base: 12, xs: 6 }}>
		        <h1>Timeline</h1>
			<Timeline active={2} bulletSize={24} lineWidth={2}>
		      
		      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
			<Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
			<Text size="xs" mt={4}>2 hours ago</Text>
		      </Timeline.Item>

		      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
			<Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
			<Text size="xs" mt={4}>52 minutes ago</Text>
		      </Timeline.Item>

		      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
			<Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
			<Text size="xs" mt={4}>34 minutes ago</Text>
		      </Timeline.Item>

		      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
			<Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
			<Text size="xs" mt={4}>12 minutes ago</Text>
		      </Timeline.Item>
		    </Timeline>
	    </Grid.Col>
	    
	    <Grid.Col span={{ base: 12, xs: 3 }}>
			<h1>Data Table</h1>
			<Table>
			      <Table.Thead>
				<Table.Tr>
				  <Table.Th>Element position</Table.Th>
				  <Table.Th>Element name</Table.Th>
				  <Table.Th>Symbol</Table.Th>
				  <Table.Th>Atomic mass</Table.Th>
				</Table.Tr>
			      </Table.Thead>
			      <Table.Tbody>{rows}</Table.Tbody>
		    	</Table>
		</Grid.Col>
      </Grid>
          
    </Container>
  
  
  );
  return (
    mainContainer
  );
}
