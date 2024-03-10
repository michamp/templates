"use client";

import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HomeWidgets.module.css';

export function HomeWidgets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> NextJS  <br /> Admin Dashboard
          </Title>
          <Text c="dimmed" mt="md">
            Simple Next Mantine Admin Dashboard Template
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
            	<b>Mantine UI</b> - Integrated Mantine components to speed up development time  	
            </List.Item>
                        
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            
            <List.Item>
            	<b>Turborepo </b> - Delivered as a monorepo to improve sharing of components with team members 
            	and speed up adoption of newly developed components	
            </List.Item>
            
          </List>

          <Group mt={30}>
            
            <Button variant="default" radius="xl" size="md" className={classes.control}
            	onClick={() => {window.open("https://github.com/michamp/templates","_blank")}}
            >
              Source code
            </Button>
          </Group>
        </div>

        <Image
		radius="md"
		h={200}
      		w="auto"
		src="/designer.svg"
		className={classes.image}
	/>
      </div>
    </Container>
  );
}


