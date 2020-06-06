import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  AspectRatioBox,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/core';
import { Button } from './Button';

const CardWrapper = forwardRef(({ children, ...props }, ref) => {
  return (
    <Flex direction="column" overflow="hidden" {...props} ref={ref}>
      {children}
    </Flex>
  );
});

const CardImage = forwardRef(({ children, ...props }, ref) => {
  return (
    <AspectRatioBox ratio={3 / 2}>
      <Image
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="50% 50%"
        {...props}
        ref={ref}
      />
    </AspectRatioBox>
  );
});

const CardContent = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box p={{ base: 3, md: 6 }} flexGrow={1} {...props} ref={ref}>
      {children}
    </Box>
  );
});

const CardHeading = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      as={props => <Heading {...props} size="lg" as="h3" />}
      mb={3}
      {...props}
      ref={ref}
    >
      {children}
    </Box>
  );
});

const CardText = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      as={props => <Text {...props} as="p" />}
      fontSize="md"
      {...props}
      ref={ref}
    >
      {children}
    </Box>
  );
});

const CardButtonGroup = forwardRef(({ children, ...props }, ref) => {
  return (
    <Stack
      isInline
      spacing={3}
      // as={props => <Sta {...props} spacing={4} />}
      alignItems="center"
      mt={3}
      width="100%"
      {...props}
      ref={ref}
    >
      {children}
    </Stack>
  );
});

const CardButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <Button
      flexGrow={1}
      // TODO: Unsure about these colors BTW, we can swap this out for a themed
      // Button component when it's available.
      //   bg="#140303"
      //   color="white"
      //   _hover={{ bg: '#000' }}
      //   _active={{ bg: '#000' }}
      //   _focus={{ bg: '#000' }}
      variant="primary"
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  );
});

const Card = forwardRef(({ children, ...props }, ref) => {
  return (
    <CardWrapper {...props} ref={ref}>
      {children}
    </CardWrapper>
  );
});

CardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

CardWrapper.displayName = 'CardWrapper';
CardImage.displayName = 'CardImage';
CardContent.displayName = 'CardContent';
CardHeading.displayName = 'CardHeading';
CardText.displayName = 'CardText';
CardButtonGroup.displayName = 'CardButtonGroup';
CardButton.displayName = 'CardButton';
Card.displayName = 'Card';

export {
  CardWrapper,
  CardImage,
  CardContent,
  CardHeading,
  CardText,
  CardButtonGroup,
  CardButton,
  Card,
};
export default Card;
