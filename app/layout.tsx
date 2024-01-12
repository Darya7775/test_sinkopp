import React from 'react';
import StyledComponentsRegistry from './registry';
import { relaway } from './ui/fonts';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({children}: Props) => {
  return (
    <html lang='ru'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="test sinkopp" />
        <title>test sinkopp</title>
      </head>
      <body className={`${relaway.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
